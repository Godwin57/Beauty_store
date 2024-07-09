import HeaderSection from "@/components/HeaderSection";
import beautySyrup from "../assets/beautySyrup.jpeg";
import beautyProductsPic from "../assets/beauty-products.jpeg";
import syrup from "../assets/syrup-raw.jpeg";
import cream from "../assets/cream.jpeg";
import beautyStuff from "../assets/beautyStuff.jpeg";
import lipstick from "../assets/lipstick.jpeg";
import Image from "next/image";
import Link from "next/link";

const page = () => {
    return (
        <main>
            <HeaderSection />
            <section className="text-center space-y-16 px-10 lg:p-20">
                <h1 className="font-bold text-[26px] lg:text-[64px]">
                    Acne control products
                </h1>
                <p className="font-Poppins text-[18px] lg:text-[24px]">
                    Browse our products specially formulated to combat acne and
                    reduce the appearance of pores
                </p>
                <div className="flex justify-center gap-5 flex-wrap">
                    <Image
                        alt="A beautiful young lady"
                        src={beautySyrup}
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
            <section className="px-10 lg:px-20 w-[100%] space-y-5 mb-40">
                <h1 className="text-[32px] lg:text-[48px] font-bold text-center">
                    More Products
                </h1>
                <div className="mt-10 flex text-center justify-center flex-wrap gap-10">
                    <div className="lg:gap-2 flex justify-center flex-col">
                        <div className="flex justify-center">
                            <Image
                                alt=""
                                src={syrup}
                                className="lg:w-[300px] lg:h-[180px] w-[250px] h-[250px]"
                            />
                        </div>
                        <p className="text-[16px] lg:text-[20px] font-bold">
                            Stretchy Hijab in ‘Military Black’
                        </p>
                        <p className="text-[13px]">In stock USD 399</p>
                    </div>
                    <div className="gap-2 flex justify-center flex-col">
                        <div className="flex justify-center">
                            <Image
                                alt=""
                                src={beautyStuff}
                                className="lg:w-[300px] lg:h-[180px] w-[250px] h-[250px]"
                            />
                        </div>
                        <p className="text-[16px] lg:text-[20px] font-bold">
                            Fenty Beauty x Nayababy Lip Combo
                        </p>
                        <p className="text-[13px]">In stock USD 399</p>
                    </div>
                    <div className="gap-2 flex justify-center flex-col">
                        <div className="flex justify-center">
                            <Image
                                alt=""
                                src={lipstick}
                                className="lg:w-[300px] lg:h-[180px] w-[250px] h-[250px]"
                            />
                        </div>
                        <p className="text-[16px] lg:text-[20px] font-bold">
                            Fenty Beauty x Nayababy Lip Combo
                        </p>
                        <p className="text-[13px]">In stock USD 399</p>
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
