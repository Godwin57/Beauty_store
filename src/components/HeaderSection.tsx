import bgPic from "../assets/syrup-raw.jpeg";

const HeaderSection = () => {
    return (
        <div className="">
            <section
                className="bg-header-background h-[450px] sm:h-[950px] bg-no-repeat Header-section-bg mb-10"
                style={{
                    backgroundImage: `url(${bgPic.src})`,
                }}
            >
                <div className="flex flex-col justify-center items-center h-[100%]">
                    <h1 className="font-extrabold text-[24px] md:text-[48px] lg:text-[96px]">
                        My Beauty Store
                    </h1>
                    <p className="text-[16px] tracking-wide md:tracking-normal md:text-[24px] lg:text-[32px] font-bold italic md:not-italic">
                        Your beauty solution in one store
                    </p>
                </div>
            </section>
        </div>
    );
};

export default HeaderSection;
