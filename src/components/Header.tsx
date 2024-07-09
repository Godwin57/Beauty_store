import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { BiStore } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";

const Header = () => {
    return (
        <header className="flex justify-between px-10 py-6">
            <Link href="/" aria-label="Link to Homepage">
                <IoMdMenu className="w-[24px] h-[24px]" />
            </Link>
            <div className="flex gap-10">
                <Link href="/" aria-label="Link to Search">
                    <CiSearch className="w-[24px] h-[24px]" />
                </Link>
                <Link href="/products" aria-label="Link to Products page">
                    <BiStore className="w-[24px] h-[24px]" />
                </Link>
                <Link href="cart" aria-label="Link to Carts">
                    <IoCartOutline className="w-[24px] h-[24px]" />
                </Link>
            </div>
        </header>
    );
};

export default Header;
