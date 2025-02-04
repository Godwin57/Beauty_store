import Image from "next/image";
import cream from "../../assets/cream.jpeg";
import SuggestedProducts from "@/components/SuggestedProducts";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import Link from "next/link";

const page = () => {
    return (
        <main className="pt-[200px] px-5 sm:px-[48px] mb-20">
            <div className="flex items-center gap-x-5 mb-20">
                <Link href={"/products"}>
                    <IoChevronBackCircleOutline className="w-[20px] h-[20px]" />
                </Link>
                <h1 className="text-[32px] font-bold">Cart</h1>
            </div>
            <div className="mb-20">
                <div className="flex flex-col sm:flex-row justify-between mb-20 lg:mb-32 gap-5 sm:gap-0">
                    <div className="flex text-[12px] sm:text-[19px] lg:text-[24px] gap-10">
                        <Image
                            alt=""
                            src={cream}
                            className="w-[160px] h-[200px]"
                        />
                        <div>
                            <h2 className="font-bold">
                                Natural acne control balm
                            </h2>
                            <p className="text-fadingGrey font-bold mb-10">
                                All skin types
                            </p>
                            <div className="flex gap-5 items-center text-white">
                                <span className="px-2 bg-light-orange">-</span>
                                <span className="px-6 py-2 border border-fadingGrey text-black">
                                    1
                                </span>
                                <span className="px-2 bg-light-orange w-min">
                                    +
                                </span>
                            </div>
                        </div>
                    </div>
                    <p className="font-extrabold text-[14px] sm:text-[19px] lg:text-[24px] text-light-orange">
                        NGN7500
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-between mb-20 lg:mb-32 gap-5 sm:gap-0">
                    <div className="flex text-[12px] sm:text-[19px] lg:text-[24px] gap-10">
                        <Image
                            alt=""
                            src={cream}
                            className="w-[160px] h-[200px]"
                        />
                        <div>
                            <h2 className="font-bold">
                                Natural acne control balm
                            </h2>
                            <p className="text-fadingGrey font-bold mb-10">
                                All skin types
                            </p>
                            <div className="flex gap-5 items-center text-white">
                                <span className="px-2 bg-light-orange">-</span>
                                <span className="px-6 py-2 border border-fadingGrey text-black">
                                    1
                                </span>
                                <span className="px-2 bg-light-orange w-min">
                                    +
                                </span>
                            </div>
                        </div>
                    </div>
                    <p className="font-extrabold text-[14px] sm:text-[19px] lg:text-[24px] text-light-orange">
                        NGN7500
                    </p>
                </div>
                <div className="flex justify-center">
                    <Link
                        href={"payment"}
                        className="text-white bg-black px-8 lg:px-10 py-3 font-bold text-[14px] sm:text-[20px] rounded-lg"
                    >
                        Check out
                    </Link>
                </div>
            </div>
            <div>
                <h1 className="font-bold text-[24px] lg:text-[48px] mb-10 lg:mb-20">
                    More for you
                </h1>

                <SuggestedProducts />
            </div>
        </main>
    );
};

export default page;
