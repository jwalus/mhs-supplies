"use client";
import Text from "@/public/content/products/text/ProductsPage";
import Image from "next/image";
import Button from "../reuseable/Button";

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
        Point1Svg,
        Point2Svg,
        Point3Svg,
        Point4Svg,
        Point5Svg,
        Point6Svg,
        Button1,
    } = Text;

    const products = [
        { name: Product1Name, data: Product1Data },
        { name: Product2Name, data: Product2Data },
        { name: Product3Name, data: Product3Data },
        { name: Product4Name, data: Product4Data },
    ];

    const points = [
        { text: Point1, Icon: Point1Svg },
        { text: Point2, Icon: Point2Svg },
        { text: Point3, Icon: Point3Svg },
        { text: Point4, Icon: Point4Svg },
        { text: Point5, Icon: Point5Svg },
        { text: Point6, Icon: Point6Svg },
    ];

    return (
        <div className="flex justify-center w-full  h-auto py-10">
            <div className="tw-container-responsive">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-xl font-semibold">{Header}</h1>
                    <div className="flex flex-col w-full gap-[4rem] mdlg:flex-row">
                        <div className="mdlg:w-2/3">
                            <h2 className="text-orangeOne font-semibold my-[1.2rem]">Products:</h2>
                            <div className="space-y-4">
                                {products.map((product, index) => (
                                    <div key={index}>
                                        <h3 className="text-2xl pb-[0.4rem] font-semibold text-blueOne">{product.name}</h3>
                                        <p className="text-lg w-[90%]">{product.data}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-[3rem]">
                                <Button text={Button1} />
                            </div>
                        </div>
                        <div className="mdlg:w-1/3">
                            <div className="tw-center">
                                <Image
                                    src="/content/home/images/mhspackage.png"
                                    alt="MHS Logo"
                                    width={400}
                                    height={10000}
                                    priority
                                />
                            </div>
                            <div>
                                <ul className="space-y-4 mt-6">
                                    {points.map(({ text, Icon }, index) => (
                                        <li key={index} className="flex items-start text-lg">
                                            <div className="w-[10%] mdlg:w-[20%] tw-center">{Icon && <Icon className="w-6 h-6 mt-[1rem] text-blueOne" />}</div>
                                            <span className="w-[80%]">{text}</span>
                                        </li>
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