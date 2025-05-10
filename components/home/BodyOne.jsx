"use client";
import Text from "@/public/content/home/text/BodyOneText";

export default function BodyOne() {

    const {
        TextOne,
        TextTwo,
        SvgOne: SvgOne,
        SvgTextOne,
        SvgTextTwo,
        SvgTwo: SvgTwo
    } = Text;

    return (
        <div className="flex justify-center w-full  h-auto">
            <div className="tw-container-responsive my-[2rem]">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col text-center gap-[3rem]">
                        <h1 className="text-3xl md:text-5xl font-semibold text-orangeOne">{TextOne}</h1>
                        <h2 className="md:text-xl">{TextTwo}</h2>
                    </div>
                    <div className="flex flex-row gap-[4rem] mt-[3rem]">
                        <div className="tw-center flex-col">
                            <SvgOne className="w-[2.5rem] h-[2.5rem] md:w-[4.5rem] md:h-[4.5rem] text-gray-800" />
                            <h2 className="text-xl font-bold">{SvgTextOne}</h2>
                        </div>

                        <div className="tw-center flex-col">
                            <SvgTwo className="w-[2.5rem] h-[2.5rem] md:w-[4.5rem] md:h-[4.5rem] text-gray-800" />
                            <h2 className="text-xl font-bold">{SvgTextTwo}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}