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
        Point7,
        Point8,
        Button1
    } = Text;

    const products = [
        { name: Product1Name, data: Product1Data },
        { name: Product2Name, data: Product2Data },
        { name: Product3Name, data: Product3Data },
        { name: Product4Name, data: Product4Data }
    ];

    const points = [Point1, Point2, Point3, Point4, Point5, Point6, Point7, Point8];

    return (
        <div className="flex justify-center w-full bg-gray-200 h-auto py-10">
            <div className="tw-container-responsive">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="">{Header}</h1>
                    <div className="flex flex-row w-full">
                        <div className="w-2/3">
                            <h2 className="">Products</h2>
                            <div className="space-y-4">
                                {products.map((product, index) => (
                                    <div key={index}>
                                        <h3 className="">{product.name}</h3>
                                        <p className="">{product.data}</p>
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