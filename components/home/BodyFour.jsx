import Text from "@/public/content/home/text/BodyTwoText";
import Button from "../reuseable/Button";

export default function BodyFour() {

    const {
        BottomHeader,
        BottomText,
        BottomBtnText,
    } = Text;

    return (
        <div className="flex justify-center w-full h-auto tw-bg-blue-gradient">
            <div className="tw-container-responsive">
                <div className="flex flex-col md:flex-row py-[3rem]">
                    <div className="flex flex-col gap-[2rem] md:w-[80%] text-white">
                        <h1 className="text-2xl font-semibold">{BottomHeader}</h1>
                        <h2 className="md:text-xl">{BottomText}</h2>
                    </div>
                    <div className="mt-[2rem] md:w-[20%] tw-center">
                       <a href="/contact-us">
                       <Button text={BottomBtnText} />
                       </a>
                    </div>
                </div>
            </div>
        </div>
    );
}