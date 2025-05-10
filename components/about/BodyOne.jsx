"use client";
import Text from "@/public/content/about/text/AboutUsPage";
import Image from "next/image";
import Button from "../reuseable/Button";

export default function BodyOne() {
    const {
        AboutHeader,
        AboutParagraph1,
        AboutParagraph2,
        AboutParagraph3,
        Button1,
        Button2,
    } = Text;

    return (
        <div className="flex justify-center w-full h-auto py-10">
            <div className="tw-container-responsive">
                <div>
                    <div className="flex flex-col gap-[2rem]">
                        <h1 className="text-3xl font-semibold text-orangeOne">{AboutHeader}</h1>
                        <div className="flex flex-col mdlg:flex-row gap-[4rem]">
                            <div className="mdlg:w-1/2">
                                <div className="flex flex-col gap-[2rem] text-lg">
                                    <p>{AboutParagraph1}</p>
                                    <p>{AboutParagraph2}</p>
                                </div>
                            </div>
                            <div className="mdlg:w-1/2">
                                <div className="flex justify-center items-center mdlg:justify-start">
                                    <Image
                                        src="/content/about/images/hospital.png"
                                        alt="MHS Logo"
                                        width={400}
                                        height={10000}
                                        priority
                                    />
                                </div>
                                <div className="mt-[2rem] text-lg">
                                    <p>{AboutParagraph3}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[1.25rem] flex justify-start mdlg:justify-center">
                            <Button text={Button1} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}