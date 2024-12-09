import Image from "next/image";
import { FeatureCard } from "./featureCard";
import { dummyFeatures } from "./api";

export default function Features() {
    const features = dummyFeatures
    return (
        <div>
            <div>
                <div className="relative h-96">
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
                        <h2 className="text-2xl font-bold">"Fitur Modern untuk Koperasi yang Lebih Efisien"</h2>
                        <p className="mt-2">
                            "Jelajahi berbagai fitur canggih kami yang dirancang untuk mempermudah pengelolaan koperasi Anda. Dari keuangan hingga komunikasi dalam satu platform"
                        </p>
                    </div>
                </div>
                <div className="container mx-auto px-8 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center content-center">
                        <div className="flex flex-col mb-8 gap-8 justify-center">
                            <h2 className="font-bold text-[#007654]">Features</h2>
                            <p className="text-3xl">Kenali Fitur Kami dan Dapatkan Pengalaman Koperasi yang Lebih Efisien</p>
                            <p>Teknologi yang semakin berkembang, sudah merevolsi bagaimana cara kita melakukan transaksi pada hari ini, dengan Satu Koperasi, kamu dapat memaksimalkan pengalaman operasional koperasi yang lebih aman, dan nyaman yang dilengkapi dnegan fitur pembayaran online. plaform kami akan memudahkan kamu dalam mengelola keuangan koperasi Anda.</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="flex flex-col gap-8 space-between">
                                    <div className="h-24">
                                        <img src="/img/nelpon.svg" alt="contact us" className="w-32"/>
                                    </div>
                                   
                                    <div>
                                        <p className="text-2xl pb-4">1. Hubungi Kami</p>
                                        <p>Gabung dengan jutaan orang yang sudah merasakan keuntungannya</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-8 space-between">
                                    <div className="h-24">
                                        <img src="/img/register.svg" alt="contact us" className="w-32"/>
                                    </div>
                                   
                                    <div>
                                        <p className="text-2xl pb-4">2. Daftarkan diri Anda</p>
                                        <p>Mulai pengelolaan koperasi Anda sekarang</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-8">
                                    <div className="h-24">
                                        <img src="/img/start.svg" alt="contact us" className="w-32"/>
                                    </div>

                                    <div>
                                        <p className="text-2xl pb-4">3. Hubungi Kami</p>
                                        <p>Gabung dengan jutaan orang yang sudah merasakan keuntungannya</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex justify-center">
                            <img
                                src="/img/hape-sendiri.png"
                                alt="megang hape"
                                className="h-[80vh] relative z-10"
                            />
                            <img
                                src="/img/tampilan-hape-dipotong.webp"
                                alt="landing pinjaman"
                                className="absolute w-[72%] left-[8%] top-[5%]"    
                            />
                        </div>
                    </div>

                    <div id="features-list">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {features.map((feature, i) => (
                                <FeatureCard
                                    key={i}
                                    {...feature}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
