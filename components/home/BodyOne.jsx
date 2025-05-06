"use client";
import Text from "@/public/content/home/text/BodyOneText";

export default function BodyOne() {

    const {
        TextOne,
        TextTwo,
        ButtonOne,
        SvgOne: SvgOne,
        SvgTextOne,
        SvgTextTwo,
        SvgTwo: SvgTwo
    } = Text;

    return (
        <div className="flex justify-center w-full bg-gray-200 h-[20rem]">
            <div className="w-[65%]">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col text-center gap-[2rem]">
                        <h1 className="">{TextOne}</h1>
                        <h2 className="">{TextTwo}</h2>
                    </div>
                    <div className="flex flex-row gap-[4rem]">
                        <div>
                            <SvgOne className="w-6 h-6 text-gray-800" />
                            <h2>{SvgTextOne}</h2>
                        </div>

                        <div>
                            <SvgTwo className="w-6 h-6 text-gray-800" />
                            <h2>{SvgTextTwo}</h2>
                        </div>
                    </div>
                    <div>
                    <h2 className="bg-blue-500">{ButtonOne}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
