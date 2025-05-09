"use client";
import Text from "@/public/content/about/text/AboutUsPage";

export default function BodyOne() {
    const {
        AboutHeader,
        AboutParagraph1,
        AboutParagraph2,
        AboutParagraph3
    } = Text;

    return (
        <div className="flex justify-center w-full bg-gray-200 h-auto py-10">
            <div className="w-[65%]">
                <div className="flex flex-col justify-center items-center text-center">
                    <div className="flex flex-row">
                        <div className="w-1/2">
                            <h1 className="text-2xl font-bold mb-4">{AboutHeader}</h1>
                            <p className="mb-4">{AboutParagraph1}</p>
                            <p className="mb-4">{AboutParagraph2}</p>
                            <p>{AboutParagraph3}</p>
                        </div>
                        <div className="w-1/2">
                            <div className="h-40 bg-white flex items-center justify-center border border-gray-400 rounded">
                                <span className="text-gray-500">Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}