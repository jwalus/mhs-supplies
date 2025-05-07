"use client";
import { useState } from "react";
import MenuIcon from "@/public/content/header/svgs/Menu";
import XIcon from "@/public/content/header/svgs/X";
import ChevronRightIcon from "@/public/content/header/svgs/ChevronRight";
import navLinks from "@/public/content/header/text/navLinks";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState({});

  const toggleNested = (label) => {
    setOpenNestedDropdown((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const renderNestedLinks = (items, level = 1) => (
    <div className={`pl-${level * 4} space-y-1 text-left`}>
      {items.map((item) => (
        <div key={item.label}>
          {item.children ? (
            <>
              <button
                onClick={() => toggleNested(item.label)}
                className="w-full text-left py-2 flex justify-between items-center"
              >
                {item.label}
                <ChevronRightIcon
                  className={`w-4 h-4 transition-transform duration-200 ${openNestedDropdown[item.label] ? "rotate-90" : ""}`}
                />
              </button>
              {openNestedDropdown[item.label] && renderNestedLinks(item.children, level + 1)}
            </>
          ) : (
            <a href={item.href} className="block py-2 pl-4">{item.label}</a>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <header className="relative z-50 w-full h-[6.5rem] bg-gray-300 flex justify-center">
      <div className="flex items-center justify-between w-[65%]">
        <div className="text-lg font-bold">
          <a href="/">LOGO</a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((item) => (
            <div key={item.label} className="relative group">
              <a
                href={item.href}
                className="relative z-10 flex items-center gap-1 px-4 py-2 hover:underline rounded-md transition-colors duration-200"
              >
                {item.label}
                {item.children && <ChevronRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:rotate-90" />}
              </a>
              {item.children && (
                <div className="absolute left-0 top-full mt-2 w-64 bg-white border shadow-md rounded-md 
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                  transition duration-200 z-30 pointer-events-none group-hover:pointer-events-auto
                  py-2 before:absolute before:-top-3 before:left-0 before:w-full before:h-4 before:content-['']">
                  {item.children.map((sub) => (
                    <div key={sub.label} className="relative group/nested">
                      <a
                        href={sub.href}
                        className="block px-4 py-2 hover:bg-gray-100 flex justify-between items-center"
                      >
                        {sub.label}
                        {sub.children && <ChevronRightIcon className="w-4 h-4 ml-2" />}
                      </a>
                      {sub.children && (
                        <div className="absolute left-full top-0 ml-1 w-64 bg-white border shadow-md rounded-md 
                          opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible 
                          transition duration-200 z-40 pointer-events-none group-hover/nested:pointer-events-auto
                          py-2 before:absolute before:-left-3 before:top-0 before:w-4 before:h-full before:content-['']">
                          {sub.children.map((deep) => (
                            <a key={deep.label} href={deep.href} className="block px-4 py-2 hover:bg-gray-100">
                              {deep.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[6.5rem] left-0 w-full bg-gray-300 shadow-lg px-4 py-4 text-sm font-medium flex flex-col text-left z-50">
          {navLinks.map((item, index) => (
            <div key={item.label} className={`w-full ${index !== navLinks.length - 1 ? "border-b" : ""}`}>
              <button
                onClick={() =>
                  setOpenMobileDropdown(openMobileDropdown === item.label ? null : item.label)
                }
                className="w-full text-left py-3 flex justify-between items-center"
              >
                
                {item.children && (
                  <ChevronRightIcon
                    className={`w-4 h-4 transition-transform duration-200 ${openMobileDropdown === item.label ? "rotate-90" : ""}`}
                  />
                )}
              </button>
              {(openMobileDropdown === item.label || !item.children) && (
                item.children ? renderNestedLinks(item.children) : (
                  <a href={item.href} className="block pl-4 py-2">{item.label}</a>
                )
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}