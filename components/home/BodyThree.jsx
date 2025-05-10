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
        <div className="flex justify-center w-full bg-gray-200 py-10">
            <div className="w-[65%]">
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col text-center">
                        <h1 className="">{Header}</h1>
                        <div className="flex flex-row">
                            <div className="w-1/2">
                                <Image
                                    src="/content/home/images/mhspackage.png"
                                    alt="MHS Logo"
                                    width={400}
                                    height={10000}
                                    priority
                                />
                            </div>
                            <div className="flex flex-col w-1/2">
                                {textArray.map((text, index) => (
                                    <div key={index} className="flex flex-row">
                                        <Svg className="w-5 h-5 mt-1 text-blue-600" />
                                        <p className="">{text}</p>
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