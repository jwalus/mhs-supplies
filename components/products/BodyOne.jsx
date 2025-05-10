"use client";
import Text from "@/public/content/products/text/ProductsPage";
import Image from "next/image";

export default function BodyOne() {
    const {
        Header,
        Product1Name,
        Product1Data,
        Product2Name,
        Product2Data,
        Product3Name,
        Product3Data,
        Product4Name,
        Product4Data,
        Point1,
        Point2,
        Point3,
        Point4,
        Point5,
        Point6,
        Button1
    } = Text;

    const products = [
        { name: Product1Name, data: Product1Data },
        { name: Product2Name, data: Product2Data },
        { name: Product3Name, data: Product3Data },
        { name: Product4Name, data: Product4Data }
    ];

    const points = [Point1, Point2, Point3, Point4, Point5, Point6];

    return (
        <div className="flex justify-center w-full bg-gray-200 h-auto py-10">
            <div className="tw-container-responsive">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-xl font-semibold">{Header}</h1>
                    <div className="flex flex-row w-full">
                        <div className="w-2/3">
                            <h2 className="text-blueOne font-semibold my-[1.2rem]">Products:</h2>
                            <div className="space-y-4">
                                {products.map((product, index) => (
                                    <div key={index}>
                                        <h3 className="text-2xl pb-[0.4rem] font-semibold">{product.name}</h3>
                                        <p className="text-lg">{product.data}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-blue-500">
                                {Button1}
                            </div>
                        </div>
                        <div className="w-1/3">
                            <div className="">
                                <Image
                                    src="/content/home/images/mhspackage.png"
                                    alt="MHS Logo"
                                    width={400}
                                    height={10000}
                                    priority
                                />
                            </div>
                            <div>
                                <ul className="list-disc list-inside">
                                    {points.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}