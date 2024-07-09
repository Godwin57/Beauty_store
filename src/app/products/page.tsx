import Button from "@/components/Button";
import HeaderSection from "@/components/HeaderSection";
import { repeatedProductsArr } from "@/constants/products";
import Image from "next/image";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";

const page = () => {
    return (
        <main className="mb-10">
            <HeaderSection />
            <section className="mt-32 px-10 py-8">
                <div className="flex justify-between text-[24px] lg:text-[48px] font-bold mb-6">
                    <h1>Products</h1>
                    <h1>Related</h1>
                </div>
                {/* <div className="flex flex-wrap gap-5 justify-center"> */}
                <div className="products-grid">
                    {repeatedProductsArr.map((item, index) => (
                        <div key={index}>
                            <Image
                                alt=""
                                src={item.src}
                                className="lg:w-[400px] lg:h-[500px] w-[250px] h-[300px]"
                            />
                            <div className="text-[12px] lg:text-[24px]">
                                <p className="font-semibold">{item.name}</p>
                                <p>{item.skinType}</p>
                                <p className="font-extrabold text-light-orange">
                                    {item.price}
                                </p>
                            </div>
                            <div className="flex sm:justify-between justify-around">
                                <Link href={"/cart"}>
                                    <Button
                                        name="Add Item"
                                        className="text-white bg-black py-2 px-2 sm:px-10 rounded-lg font-bold text-[12px] sm:text-[18px]"
                                    />
                                </Link>
                                <div className="flex gap-2 items-center px-2 sm:px-4 py-2 border border-veryLightGray">
                                    3{" "}
                                    <RiArrowDropDownLine className="w-[22px] h-[22px]" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default page;
