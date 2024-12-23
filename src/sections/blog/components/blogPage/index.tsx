import Image from "next/image";

export function BlogPage() {

    return (
        <div>
            <div className="relative h-40">
                <Image
                    src="/img/background-feature.jpg"
                    alt="Background Feature"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="bg-scroll"
                />

                <div className="absolute inset-0 bg-[#007654] bg-opacity-60"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                    <h2 className="text-2xl font-bold">Disini Judul</h2>
                    <p className="mt-2">Disini sub judul</p>
                </div>
            </div>
            <section id="news-section">
                <div className={"h-96"}>
                    {/* contain selected news */}
                </div>
            </section>
            <section id={"news-grid"} className={"h-96"}>
                <div className={"grid md:grid-cols-2 lg:grid-cols-4"}>
                    <div>
                        {/* contain grid of news thumbnail */}
                    </div>
                </div>
            </section>
        </div>
    )
}