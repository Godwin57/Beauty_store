import Link from "next/link";

const Header = () => {
    return (
        <header className="flex justify-between px-5 sm:px-10 py-6 items-center">
            <Link
                href="/"
                aria-label="Link to Homepage"
                className="font-semibold italic text-[20px] sm:text-[48px]"
            >
                MyBeautyStore
            </Link>
            <div className="flex gap-5 sm:gap-10 items-center">
                <Link
                    href="/"
                    aria-label="Link to Search"
                    className="font-semibold text-[16px] sm:text-[24px]"
                >
                    Home
                </Link>
                <Link
                    href="/products"
                    aria-label="Link to Products page"
                    className="font-semibold text-[16px] sm:text-[24px]"
                >
                    Shop
                </Link>
                <Link
                    href="cart"
                    aria-label="Link to Carts"
                    className="font-semibold text-[16px] sm:text-[24px]"
                >
                    Cart
                </Link>
            </div>
        </header>
    );
};

export default Header;
