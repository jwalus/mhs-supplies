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
  } = Text;

  return (
    <footer className="w-full flex justify-center bg-gray-200">
      <div className="tw-container-responsive">
        <div className="flex flex-col md:flex-row my-[3rem]">
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
          <div className="md:w-1/3 tw-center flex-col text-center gap-[1rem] text-base">
            <h1 className="font-semibold text-lg mb-2 text-orangeOne">{Header}</h1>
            <div className="flex items-center justify-center gap-2">
              <p className="tw-center gap-[0.5rem]"><Svg2 className="w-[1.2rem] h-[1.2rem] text-blueOne" />{Text2}</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className="tw-center gap-[0.5rem]"><Svg3 className="w-[1.2rem] h-[1.2rem] text-blueOne" />{Text3}</p>
            </div>
            <div className="flex items-center justify-center gap-2 text-center">
              <div>
                <p className="tw-center gap-[0.5rem]"><Svg1 className="w-[1.2rem] h-[1.2rem] text-blueOne" />{Text1P1}</p>
                <p>{Text1P2}</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 mt-[3rem] md:mt-0 tw-center flex-col text-center text-base gap-[0.355rem] text-blueOne font-semibold">
            <a className="hover:scale-110 tw-transition-standard" href="/products">Products</a>
            <a className="hover:scale-110 tw-transition-standard" href="/how-to-apply">How To Apply</a>
            <a className="hover:scale-110 tw-transition-standard" href="/about">About</a>
            <a className="hover:scale-110 tw-transition-standard" href="/contact-us">Contact</a>
            <a className="hover:scale-110 tw-transition-standard" href="/privacy">Terms & Privacy</a>
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