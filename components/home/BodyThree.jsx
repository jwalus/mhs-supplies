"use client";
import Image from "next/image";
import Text from "@/public/content/home/text/BodyThreeText";

export default function BodyThree() {
    const {
        Header,
        Text1,
        Text2,
        Text3,
        Text4,
        Text5,
        Text6,
        Text7,
        Svg,
    } = Text;

    const textArray = [Text1, Text2, Text3, Text4, Text5, Text6, Text7];

    return (
        <div className="flex justify-center w-full  py-10">
            <div className="tw-container-responsive">
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col text-center">
                        <h1 className="text-3xl mb-[2rem] font-semibold text-orangeOne">{Header}</h1>
                        <div className="tw-center flex-col md:flex-row">
                            <div className="md:w-1/2">
                                <Image
                                    src="/content/home/images/mhspackage.png"
                                    alt="MHS Logo"
                                    width={400}
                                    height={10000}
                                    priority
                                />
                            </div>
                            <div className="flex flex-col md:w-1/2 gap-[0.75rem]">
                                {textArray.map((text, index) => (
                                    <div key={index} className="flex flex-row gap-[0.3rem] px-[0.5rem] hover:scale-105 tw-transition-standard">
                                        <Svg className="w-[1.4rem] h-[1.4rem] mt-1 text-blueTwo" />
                                        <p className="pl-[0.65rem] text-left w-auto">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}