import productsArr from "@/constants/products";
import { RiArrowDropDownLine } from "react-icons/ri";
import Button from "./Button";
import Image from "next/image";

const SuggestedProducts = () => {
    return (
        <div className="products-grid">
            {productsArr.map((item, index) => (
                <div key={index}>
                    <Image
                        alt=""
                        src={item.src}
                        className="lg:w-[400px] lg:h-[500px] w-[250px] h-[300px]"
                    />
                    <div className="text-[16px] lg:text-[24px] space-y-3">
                        <p className="font-semibold">{item.name}</p>
                        <p>{item.skinType}</p>
                        <p className="font-extrabold text-light-orange">
                            {item.price}
                        </p>
                    </div>
                    <div className="flex sm:justify-between justify-around">
                        <Button
                            name="Add Item"
                            className="text-white bg-black py-2 px-2 sm:px-10 rounded-lg font-bold text-[12px] sm:text-[18px]"
                        />
                        <div className="flex gap-2 items-center px-2 sm:px-4 py-2 border border-veryLightGray">
                            3{" "}
                            <RiArrowDropDownLine className="w-[22px] h-[22px]" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SuggestedProducts;
