import Image from "next/image";
import beautyProducts from "../assets/beauty-products.jpeg";
import ladies from "../assets/threeladies-edited.jpeg";
import { FaCheckCircle } from "react-icons/fa";
import Input from "./Input";
import Button from "./Button";

const Footer = () => {
    return (
        <footer className="bg-light-orange relative py-10 w-[100%] h-max">
            <Image
                alt=""
                src={ladies}
                className="w-[20%] h-[250px] hidden sm:block absolute bottom-0 left-0"
                style={{ transform: "rotateY(180deg)" }}
            />
            <div className="text-center flex justify-center flex-col sm:w-[90%] mx-auto space-y-10 sm:px-[20%] px-5">
                <h1 className="font-bold text-[22px] lg:text-[40px]">
                    Get updates on the latest products & services.
                </h1>
                <div className="flex justify-around items-center text-[12px] sm:text-[14px] lg:text-[20px] font-semibold lg:gap-3 tracking-tighter lg:tracking-normal">
                    <p className="flex items-center gap-1">
                        <FaCheckCircle className="lg:w-[25px] lg:h-[25px] w-[16px] h-[16px]" />
                        Specially formulated
                    </p>
                    <p className="flex items-center gap-1">
                        <FaCheckCircle className="lg:w-[25px] lg:h-[25px] w-[16px] h-[16px]" />
                        Cruelty-free
                    </p>
                    <p className="flex items-center gap-1">
                        <FaCheckCircle className="lg:w-[25px] lg:h-[25px] w-[16px] h-[16px]" />
                        Natural
                    </p>
                </div>
                <div className="w-[100%] flex">
                    <div style={{ flexGrow: "1" }} className="h-[100%]">
                        <Input
                            type="email"
                            className="w-[100%] px-6 py-4 h-[100%]"
                        />
                    </div>
                    <Button
                        name="Signup"
                        className="px-8 py-2 bg-black text-white font-bold text-[12px] lg:text-[20px]"
                    />
                </div>
                <div>
                    <h3 className="font-semibold">Contact Info</h3>
                    <p className="lg:font-[16px] font-[12px]">
                        +234780453. Email: nayabeautryshop@gmail.com
                    </p>
                    <p className="lg:font-[16px] font-[12px]">
                        Shomolu, Lagos, Nigeria
                    </p>
                </div>
            </div>
            <div className="w-[40%] hidden sm:block">
                <Image
                    alt=""
                    src={beautyProducts}
                    className="w-[20%] h-[200px] absolute top-0 right-0"
                />
            </div>
        </footer>
    );
};

export default Footer;
