"use client";

export default function BodyOne() {
    return (
        <div className="flex justify-center w-full bg-gray-200 h-[20rem]">
            <div className="w-[65%]">
                <div className="flex flex-col justify-center items-center h-full">
                    <iframe
                        width="560"
                        height="315"
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