"use client";
import ContactCard from "../reuseable/ContactCard";
import Image from "next/image";

export default function BodyOne() {

    const {

    } = Text;

    return (
        <div className="flex justify-center w-full bg-gray-200 h-auto py-10">
            <div className="w-[65%]">
                <div className="flex flex-col justify-center items-center text-center">
                    <div>
                        info
                    </div>
                    <div>
                        <div>
                            <div className="">
                                <Image
                                    src="/content/contact/images/hospital.png"
                                    alt="MHS Logo"
                                    width={400}
                                    height={10000}
                                    priority
                                />
                            </div>
                        </div>
                        <div>
                            <ContactCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}