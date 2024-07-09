import HeaderSection from "@/components/HeaderSection";
import lady from "../assets/lady1.jpeg";
import beautyProductsPic from "../assets/beauty-products.jpeg";
import syrup from "../assets/syrup-raw.jpeg";
import cream from "../assets/cream.jpeg";
import faceCream from "../assets/face-cream.jpeg";
import oilBalm from "../assets/body-cream.jpeg";
import Image from "next/image";
import Link from "next/link";

const page = () => {
    return (
        <main>
            <HeaderSection />
            <section className="text-center space-y-16 px-10 lg:p-20 mb-10">
                <h1 className="font-bold text-[26px] lg:text-[64px]">
                    Acne control products
                </h1>
                <p className="font-Poppins text-[18px] lg:text-[24px]">
                    Browse our products specially formulated to combat acne and
                    reduce the appearance of pores
                </p>
                <div className="flex flex-wrap gap-8 justify-center">
                    <Image
                        alt="A beautiful young lady"
                        src={lady}
                        className="w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]"
                    />
                    <Image
                        alt="Some beauty products"
                        src={beautyProductsPic}
                        className="w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]"
                    />
                    <Image
                        alt="A beauty cream"
                        src={cream}
                        className="w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]"
                    />
                </div>
                <div>
                    <Link
                        href={"/products"}
                        className="text-semi-lightblue font-extrabold text-[18px] lg:text-[24px] underline"
                    >
                        See all categories
                    </Link>
                </div>
            </section>
            <section className="px-10 w-[100%] space-y-5 mb-40 flex flex-col items-center sm:block sm:items-start">
                <h1 className="text-[32px] lg:text-[48px] font-bold">
                    More Products
                </h1>
                <div className="mt-10 flex text-center justify-center sm:justify-between flex-wrap sm:gap-10 gap-5">
                    <div className="lg:gap-2 flex justify-center flex-col">
                        <div className="flex justify-center">
                            <Image
                                alt=""
                                src={syrup}
                                className="lg:w-[300px] lg:h-[180px] w-[200px] h-[200px]"
                            />
                        </div>
                        <p className="text-[16px] lg:text-[20px] font-semibold">
                            Natural shine control oil balm
                        </p>
                        <p className="text-[13px]">In stock NGN8,000</p>
                    </div>
                    <div className="gap-2 flex justify-center flex-col">
                        <div className="flex justify-center">
                            <Image
                                alt=""
                                src={faceCream}
                                className="lg:w-[300px] lg:h-[180px] w-[200px] h-[200px]"
                            />
                        </div>
                        <p className="text-[16px] lg:text-[20px] font-semibold">
                            Natural shine control oil balm
                        </p>
                        <p className="text-[13px]">In stock NGN8,000</p>
                    </div>
                    <div className="gap-2 flex justify-center flex-col">
                        <div className="flex justify-center">
                            <Image
                                alt=""
                                src={oilBalm}
                                className="lg:w-[300px] lg:h-[180px] w-[200px] h-[200px]"
                            />
                        </div>
                        <p className="text-[16px] lg:text-[20px] font-semibold">
                            Natural shine control oil balm
                        </p>
                        <p className="text-[13px]">In stock NGN8,000</p>
                    </div>
                </div>
                <div className="text-center">
                    <Link
                        href={"/products"}
                        className="text-[24px] font-extrabold text-semi-lightblue underline"
                    >
                        See all
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default page;
