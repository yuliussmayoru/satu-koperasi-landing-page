import { fetchHero } from "../api";
import { HeroData } from "../type";

export async function Hero() {
    const heroData: HeroData = await fetchHero()

    return (
        <div className="relative text-white" id="hero-section">
            {/* Content */}
            <div className="bg-[#007654] relative z-0 flex flex-col items-center justify-center text-center px-4">
                <div className="max-w-3xl p-4 m-4 md:p-8 md:p-12">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
                        {heroData.title}
                    </h1>
                    <p className="text-md md:text-xl mt-4 max-w-2xl">
                        {heroData.subtitle}
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="mt-6 w-1/2 md:w-1/3 text-sm bg-[#007654] text-white border hover:border-gray-100 hover:text-[#007654] px-6 py-2 rounded hover:bg-gray-100">
                            Free Demo
                        </button>
                        <button className="mt-6 w-1/2 md:w-1/3 text-sm bg-white text-[#007654] px-6 py-2 rounded hover:bg-[#007654] hover:text-white hover:bg-[#007654] hover: border hover:border-white">
                            Get Started
                        </button>
                    </div>
                </div>
                <div className="relative">
                    <img
                        src="/img/laptop.webp"
                        alt="Laptop"
                        className="w-full relative z-10"
                    />
                    <img
                        src="/img/dashboard-landing.webp"
                        alt="Dashboard"
                        className="absolute top-[5%] left-[12%] w-[76%] md:w-[50%] lg:top-[4%] z-0 md:w-[76%] md:top-[4%]"
                    />
                </div>

            </div>
        </div>
    );
}
