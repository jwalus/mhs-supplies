"use client";

export default function BodyOne() {
    return (
        <div className="flex justify-center w-full h-[50rem]">
            <div className="tw-container-responsive mt-[4rem] tw-center flex-col">
                <div className="flex flex-col gap-[2rem]">
                    <h1 className="text-2xl font-semibold text-orangeOne">Learn How to Properly Apply Wound Care Products for Optimal Healing</h1>
                    <h2 className="md:text-xl">This step-by-step video will guide you through the correct application of collagen dressings, powders, and other wound care materials.</h2>
                </div>
                <div className="flex flex-col justify-center items-center my-[4rem] w-full h-full">
                    <iframe
                        className="flex justify-center items-center w-full h-full"
                        src="https://www.youtube.com/embed/D1uTjaVwGRk"
                        title="How To Apply"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}