import Input from "@/components/Input";
import creditCard from "../../assets/credit-card.png";
import paypal from "../../assets/paypal.png";
import visa from "../../assets/visa.png";
import Image from "next/image";
import Link from "next/link";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import SuggestedProducts from "@/components/SuggestedProducts";

const page = () => {
    return (
        <main className="pt-[200px] px-10">
            <div className="flex items-center">
                <IoArrowBackCircleOutline className="h-[20px] w-[20px]" />
                <h1 className="font-bold text-[32px] lg:text-[32px]">
                    Payment
                </h1>
            </div>
            <div className="mt-10 px-10 space-y-10 mb-20">
                <h1 className="sm:text-[24px] text-[18px] font-bold">
                    Delivery Address
                </h1>
                <Input
                    placeholder="Enter Your Address"
                    className="border-0 border-b border-b-lightGrey ml-10 lg:w-80 w-52"
                />
                <h1 className="text-[18px] sm:text-[24px] font-bold">
                    Choose Payment Method
                </h1>
                <div className="flex gap-8">
                    <div className="flex gap-2 px-4 items-center">
                        <Input type="radio" />
                        <Image
                            alt=""
                            src={creditCard}
                            className="w-[30px] h-[30px]"
                        />
                    </div>
                    <div className="flex items-center">
                        <Input type="radio" />
                        <Image
                            alt=""
                            src={paypal}
                            className="w-[100px] h-[30px]"
                        />
                    </div>
                </div>
                <h1 className="sm:text-[24px] text-[18px] font-bold">
                    Payment Details
                </h1>
                <Input
                    placeholder="Enter Name on card"
                    className="border-0 border-b border-b-lightGrey ml-10  lg:w-80 w-52"
                />
                <Input
                    placeholder="Card number"
                    className="border-0 border-b border-b-lightGrey ml-10 lg:w-80 w-52"
                />
                <div className="flex gap-10 flex-col sm:flex-row">
                    <Input
                        placeholder="Expiration"
                        className="border-0 border-b border-b-lightGrey ml-10 w-36 "
                    />
                    <Input
                        placeholder="CVV"
                        className="border-0 border-b border-b-lightGrey ml-10 w-36"
                        withLeftElement
                        leftElement={
                            <Image
                                alt=""
                                src={visa}
                                className="w-[30px] h-[30px] -mt-[10]"
                            />
                        }
                    />
                </div>
                <p className="text-[15px] text-veryLightGray">
                    By Clicking “Confirm Payment” I agree to the companies term
                    of services
                </p>
                <div className="">
                    <Link
                        href={"successful"}
                        className="text-white bg-black px-10 py-2 rounded-lg"
                    >
                        Continue
                    </Link>
                </div>
            </div>
            <div className="mb-32">
                <h1 className="font-bold text-[24px] lg:text-[48px] mb-10 lg:mb-20">
                    More for you
                </h1>

                <SuggestedProducts />
            </div>
        </main>
    );
};

export default page;
