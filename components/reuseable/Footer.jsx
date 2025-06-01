import Image from "next/image";
import Text from "@/public/content/footer/text/Text";
import BusinessInfo from "@/public/content/reuseable/BusinessInfo";

export default function Footer() {
  const {
    Header,
    Text1P1,
    Text1P2,
    Text2,
    Text3,
    Svg1,
    Svg2,
    Svg3,
    SvgChevron,
  } = Text;

  const links = [
    { label: "Products", href: "/products" },
    { label: "How To Apply", href: "/how-to-apply" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact-us" },
    { label: "Terms & Privacy", href: "/privacy" },
  ];

  return (
    <footer className="w-full flex justify-center bg-gray-200">
      <div className="tw-container-responsive">
        <div className="flex flex-col md:flex-row my-[2rem]">
          <div className="md:w-1/3">
            <a href="/" className="py-[3rem] tw-center">
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
          <div className="md:w-1/3 tw-center flex-col text-center text-sm">
            <h1 className="font-semibold text-lg text-blueOne mb-[0.5rem]">{Header}</h1>
            <div className="flex flex-col gap-[0.45rem]">
              <div className="flex items-center justify-center gap-2">
                <p className="tw-center gap-[0.5rem]"><Svg2 className="w-[1rem] h-[1rem] text-blueOne" />{Text2}</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <p className="tw-center gap-[0.5rem]"><Svg3 className="w-[1rem] h-[1rem] text-blueOne" />{Text3}</p>
              </div>
              <div className="flex items-center justify-center gap-2 text-center">
                <div>
                  <p className="tw-center gap-[0.5rem]"><Svg1 className="w-[1rem] h-[1rem] text-blueOne" />{Text1P1}</p>
                  <p>{Text1P2}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 mt-[3rem] md:mt-0 tw-center flex-col text-sm gap-[0.355rem] font-semibold">
            <h1 className="text-blueOne text-lg">Links</h1>
            <div className="text-sm gap-[0.355rem] flex flex-col items-start">
              {links.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="hover:scale-110 hover:text-blueOne tw-transition-standard flex items-center gap-1"
                >
                  <SvgChevron className="w-4 h-4 ml-[2rem]" />
                  {label}
                </a>
              ))}
            </div>

          </div>
        </div>
        <div className="border-t-[1px] border-blueOne pt-[1rem]">
          <div className="tw-center mb-[1rem] text-xs">
            <span className="w-[80%]">MHS Wound Care is redefining home healthcare delivery. We’re dedicated to improving patient outcomes with premium wound care supplies while equipping your practice with efficient digital tools, fast fulfillment, and responsive support that help you focus on what matters most — quality care.</span>
          </div>
          <div className="flex justify-center text-center mb-[1rem] text-xs">
            Copyright © 2025 {BusinessInfo.name}.
          </div>
        </div>
      </div>
    </footer>
  );
}