"use client";
import Text from "@/public/content/home/text/BodyOneText";

export default function BodyOne() {
  const {
    TextOne,
    TextTwo,
    SvgOne,
    SvgTextOne,
    SvgTwo,
    SvgTextTwo,
  } = Text;

  return (
    <div
      className="relative flex justify-center w-full min-h-[85vh] bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-blueOne before:opacity-55"
      style={{
        backgroundImage: "url('/content/home/images/doctor.png')",
      }}
    >
      <div className="tw-container-responsive my-[2rem] py-[4rem] relative z-10">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col text-center gap-[3rem] mt-[4rem]">
            <h1 className="text-3xl md:text-5xl font-semibold text-white">{TextOne}</h1>
            <h2 className="md:text-xl font-semibold text-white">{TextTwo}</h2>
          </div>
          <div className="flex flex-row gap-[4rem] mt-[5rem]">
            <div className="hover:scale-110 tw-transition-standard">
              <a href="/products" className="flex-col tw-center text-white">
              <SvgOne className="w-[2.5rem] h-[2.5rem] md:w-[4.5rem] md:h-[4.5rem]" />
              <h2 className="text-xl font-bold">{SvgTextOne}</h2>
              </a>
            </div>
            <div className="hover:scale-110 tw-transition-standard">
              <a href="/contact-us">
              <SvgTwo className="w-[2.5rem] h-[2.5rem] md:w-[4.5rem] md:h-[4.5rem] text-white" />
              <h2 className="text-xl font-bold text-white">{SvgTextTwo}</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
      <svg
    className="absolute bottom-0 left-0 w-full"
    viewBox="0 0 1440 100"
    preserveAspectRatio="none"
  >
    <path
      fill="#ffffff"
      d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,69.3C1200,64,1320,64,1380,64L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
    />
  </svg>
    </div>
  );
}