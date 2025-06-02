"use client";
import { useState } from "react";
import MenuIcon from "@/public/content/header/svgs/Menu";
import XIcon from "@/public/content/header/svgs/X";
import ChevronRightIcon from "@/public/content/header/svgs/ChevronRight";
import navLinks from "@/public/content/header/text/navLinks";
import Image from "next/image";
import Button from "../reuseable/Button";

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
    <header className="relative z-50 w-full h-[6.5rem] bg-gray-200 flex justify-center">
      <div className="flex items-center justify-between tw-container-responsive">
        <div className="flex justify-center items-center">
          <a href="/" className="">
            <Image
              src="/content/home/images/MHSwoundcare.png"
              alt="MHS Logo"
              width={250}
              height={250}
              priority
              className="h-auto w-[220px] lg:w-[250px] object-contain"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-5 text-base font-medium">
          {navLinks.map((item) => (
            <div key={item.label} className="relative group">
              {item.label === "Contact" ? (
                <a href={item.href}>
                  <Button text="Contact" />
                </a>
              ) : (
                <a
                  href={item.href}
                  className="relative z-10 flex items-center gap-[0.25rem] py-2 hover:text-orangeOne font-semibold hover:scale-110 tw-transition-standard"
                >
                  {item.label}
                  {item.children && <ChevronRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:rotate-90" />}
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <XIcon className="w-[2rem] h-[2rem]" /> : <MenuIcon className="w-[2rem] h-[2rem]" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[6rem] left-0 w-full bg-gray-200 shadow-lg px-4 font-semibold text-base flex flex-col text-left z-50">
          {navLinks.map((item, index) => (
            <div key={item.label} className={`w-full ${index !== navLinks.length - 1 ? "border-b border-gray-300" : "mb-[1rem]"}`}>
              <button
                onClick={() =>
                  setOpenMobileDropdown(openMobileDropdown === item.label ? null : item.label)
                }
                className="w-full text-left py-3 flex justify-between items-center"
              >
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