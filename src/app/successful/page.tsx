import Image from "next/image";
import Link from "next/link";
import { MdOutlineCancel } from "react-icons/md";
import thumbs from "../../assets/thumbs-up.png";
import { IoChevronBackCircleOutline } from "react-icons/io5";

const page = () => {
    return (
        <main className="pt-[200px] px-10 mb-40 space-y-10">
            <div className="flex gap-x-5 items-center mt-10">
                <Link href={"/payment"}>
                    <IoChevronBackCircleOutline className="w-[20px] h-[20px]" />
                </Link>
                <h1 className="font-bold text-[32px]">Order successful</h1>
            </div>

            <div className="flex gap-10 items-center text-[16px] sm:text-[20px] text-white px-4 py-1 bg-fullGreen w-[50%]">
                <p>Order successful</p>
                <MdOutlineCancel />
            </div>
            <div className="space-y-10 mt-14">
                <Image
                    alt=""
                    src={thumbs}
                    className="sm:w-[200px] sm:h-[200px] border border-black w-[100px] h-[100px]"
                    style={{
                        borderRadius: "50%",
                    }}
                />
                <div className="space-y-5 font-semibold">
                    <p className="text-[24px]">Thank you for your purchase</p>
                    <p className="text-[16px]">Your order has been processed</p>
                </div>
            </div>

            <div className="flex gap-4">
                <Link
                    href={"/"}
                    className="text-white bg-black px-10 sm:px-14 py-4 rounded-lg"
                >
                    Return Home
                </Link>
                <Link
                    href={"/"}
                    className="text-black bg-white px-10 sm:px-14 py-4 rounded-lg border border-black"
                >
                    Track order
                </Link>
            </div>
        </main>
    );
};

export default page;
