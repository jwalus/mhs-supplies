"use client";
import Text from "@/public/content/home/text/BodyTwoText";

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
        <div className="flex justify-center w-full bg-gray-200 h-[60rem]">
            <div className="tw-container-responsive">
                <div className="flex flex-col justify-center items-center">

                    <div className="flex flex-col gap-[2rem] text-center">
                        <h1>{TopHeader}</h1>
                        <h2>{TopText}</h2>
                    </div>

                    <div className="flex flex-col gap-[2rem] my-[4rem]">
                        <div className="flex flex-row gap-[2rem]">
                            <div>
                                <SvgOne className="w-6 h-6 text-gray-800" />
                            </div>
                            <div>
                                <h1>{SvgOneTextOne}</h1>
                                <h2>{SvgOneTextTwo}</h2>
                            </div>
                        </div>

                        <div className="flex flex-row gap-[2rem]">
                            <div>
                                <SvgTwo className="w-6 h-6 text-gray-800" />
                            </div>
                            <div>
                                <h1>{SvgTwoTextOne}</h1>
                                <h2>{SvgTwoTextTwo}</h2>
                            </div>
                        </div>

                        <div className="flex flex-row gap-[2rem]">
                            <div>
                                <SvgThree className="w-6 h-6 text-gray-800" />
                            </div>
                            <div>
                                <h1>{SvgThreeTextOne}</h1>
                                <h2>{SvgThreeTextTwo}</h2>
                            </div>
                        </div>

                        <div className="flex flex-row gap-[2rem]">
                            <div>
                                <SvgFour className="w-6 h-6 text-gray-800" />
                            </div>
                            <div>
                                <h1>{SvgFourTextOne}</h1>
                                <h2>{SvgFourTextTwo}</h2>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-row">
                        <div className="flex flex-col gap-[2rem]">
                            <h1>{BottomHeader}</h1>
                            <h2>{BottomText}</h2>
                        </div>
                        <div>
                            {BottomBtnText}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}