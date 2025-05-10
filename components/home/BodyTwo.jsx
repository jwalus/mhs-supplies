"use client";
import Text from "@/public/content/home/text/BodyTwoText";
import Button from "../reuseable/Button";

export default function BodyTwo() {

    const {
        TopHeader,
        TopText,

        SvgOne: SvgOne,
        SvgOneTextOne,
        SvgOneTextTwo,

        SvgTwo: SvgTwo,
        SvgTwoTextOne,
        SvgTwoTextTwo,

        SvgThree: SvgThree,
        SvgThreeTextOne,
        SvgThreeTextTwo,

        SvgFour: SvgFour,
        SvgFourTextOne,
        SvgFourTextTwo,

        BottomHeader,
        BottomText,
        BottomBtnText,
    } = Text;



    return (
        <div className="flex justify-center w-full bg-gray-200 h-auto">
            <div className="tw-container-responsive">
                <div className="flex flex-col justify-center items-center">

                    <div className="flex flex-col gap-[2rem] text-center">
                        <h1 className="text-3xl font-semibold">{TopHeader}</h1>
                        <h2 className="text-xl">{TopText}</h2>
                    </div>

                    <div className="flex flex-col gap-[2rem] my-[4rem]">

                        <div className="tw-center md:text-left flex flex-col sm:flex-row gap-[2rem]">
                            <div className="sm:w-[10%]">
                                <SvgOne className="w-[4.5rem] h-[4.5rem] text-gray-800" />
                            </div>
                            <div className="sm:w-[80%]">
                                <h1 className="text-2xl font-semibold">{SvgOneTextOne}</h1>
                                <h2 className="text-lg">{SvgOneTextTwo}</h2>
                            </div>
                        </div>

                        <div className="tw-center md:text-left flex flex-col sm:flex-row gap-[2rem]">
                            <div className="sm:w-[10%]">
                                <SvgTwo className="w-[4.5rem] h-[4.5rem] text-gray-800" />
                            </div>
                            <div className="sm:w-[80%]">
                                <h1 className="text-2xl font-semibold">{SvgTwoTextOne}</h1>
                                <h2 className="text-lg">{SvgTwoTextTwo}</h2>
                            </div>
                        </div>

                        <div className="tw-center md:text-left flex flex-col sm:flex-row gap-[2rem]">
                            <div className="sm:w-[10%]">
                                <SvgThree className="w-[4.5rem] h-[4.5rem] text-gray-800" />
                            </div>
                            <div className="sm:w-[80%]">
                                <h1 className="text-2xl font-semibold">{SvgThreeTextOne}</h1>
                                <h2 className="text-lg">{SvgThreeTextTwo}</h2>
                            </div>
                        </div>

                        <div className="tw-center md:text-left flex flex-col sm:flex-row gap-[2rem]">
                            <div className="sm:w-[10%]">
                                <SvgFour className="w-[4.5rem] h-[4.5rem] text-gray-800" />
                            </div>
                            <div className="sm:w-[80%]">
                                <h1 className="text-2xl font-semibold">{SvgFourTextOne}</h1>
                                <h2 className="text-lg">{SvgFourTextTwo}</h2>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col md:flex-row">
                        <div className="flex flex-col gap-[2rem]">
                            <h1 className="text-2xl font-semibold">{BottomHeader}</h1>
                            <h2 className="md:text-xl">{BottomText}</h2>
                        </div>
                        <div className="tw-center mt-[2rem]">
                            <Button text={BottomBtnText} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}