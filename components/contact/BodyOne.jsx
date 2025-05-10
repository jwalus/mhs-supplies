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
        SideText12,
    } = Text;

    const contactItems = [
        { header: Header1, text: Text1, Icon: Svg1 },
        { header: Header2, text: Text2, Icon: Svg2 },
        { header: Header3, text: Text3, Icon: Svg3 },
        { header: Header4, text: `${Text4Part1}\n${Text4Part2}`, Icon: Svg4 },
    ];

    return (
        <div className="flex justify-center w-full ">
            <div className="tw-container-responsive flex flex-row gap-10">
                <div className="w-1/2">
                    <ContactCard />
                </div>

                <div className="w-1/2">
                    {contactItems.map(({ header, text, Icon }, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <Icon className="w-6 h-6 mt-1" />
                            <div>
                                <h4 className="font-semibold text-lg">{header}</h4>
                                <p className="whitespace-pre-line">{text}</p>
                            </div>
                        </div>
                    ))}
                    <div className="">
                        <h3 className="text-xl font-bold">{SideHeader}</h3>
                        <p>{SideText1}</p>
                        <p>{SideText12}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}