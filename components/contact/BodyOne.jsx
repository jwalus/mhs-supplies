"use client";

import ContactCard from "../reuseable/ContactCard";
import Text from "@/public/content/contact/text/Text";

export default function BodyOne() {
    const {
        Header1,
        Text1,
        Svg1,
        Header2,
        Text2,
        Svg2,
        Header3,
        Text3,
        Svg3,
        Header4,
        Text4Part1,
        Text4Part2,
        Svg4,
        SideHeader,
        SideText1,
        SideText2,
    } = Text;

    const contactItems = [
        { header: Header1, text: Text1, Icon: Svg1 },
        { header: Header2, text: Text2, Icon: Svg2 },
        { header: Header3, text: Text3, Icon: Svg3 },
        { header: Header4, text: `${Text4Part1}\n${Text4Part2}`, Icon: Svg4 },
    ];

    return (
        <div className="flex justify-center w-full">
            <div className="tw-container-responsive flex flex-col mdlg:flex-row my-[3rem] gap-[3rem]">
                <div className="mdlg:w-[60%]">
                    <ContactCard />
                </div>

                <div className="mdlg:w-[40%]">
                    <div>
                        <h3 className="text-2xl font-semibold text-orangeOne">{SideHeader}</h3>
                        <p className="text-lg mt-[0.75rem] font-semibold">{SideText1}</p>
                        <p className="text-lg mt-[1rem] mb-[2rem]">{SideText2}</p>
                    </div>
                    {contactItems.map(({ header, text, Icon }, index) => (
                        <div key={index} className="flex items-start gap-[1rem]">
                            <Icon className="w-6 h-6 mt-1 text-blueOne" />
                            <div className="mb-[1rem]">
                                <h4 className="font-bold text-sm">{header}</h4>
                                <p className="whitespace-pre-line text-base font-semibold">{text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}