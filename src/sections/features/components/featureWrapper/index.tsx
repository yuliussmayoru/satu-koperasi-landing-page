import Image from "next/image";
import { FeatureCard, FeaturesData, fetchFeatures, FeatureListData } from "sections";

export async function Features() {
    const featuresData: FeaturesData = await fetchFeatures();
    const featuresList = FeatureListData

    const images = ["/img/nelpon.svg", "/img/register.svg", "/img/start.svg"];

    return (
        <div id="feature-section">
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
                        <h2 className="text-2xl font-bold">{featuresData.featuresTitle}</h2>
                        <p className="mt-2">{featuresData.featuresSubtitle}</p>
                    </div>
                </div>
                <div className="container mx-auto px-8 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center content-center">
                        <div className="flex flex-col mb-8 gap-8 justify-center">
                            <h2 className="font-bold text-[#007654]">Features</h2>
                            <p className="text-3xl">{featuresData.featuresDescHead}</p>
                            <p>{featuresData.featuresDescContent}</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {featuresData?.featuresRegistrationStepSection?.length > 0 ? (
                                    featuresData.featuresRegistrationStepSection.map((step, index) => (
                                        <div key={index} className="flex flex-col gap-8 space-between">
                                            <div className="h-24">
                                                <img
                                                    src={images[index] || "/img/default.svg"}
                                                    alt={step.title}
                                                    className="w-32"
                                                />
                                            </div>
                                            <div>
                                                <p className="text-2xl pb-4">{index + 1}. {step.title}</p>
                                                <p>{step.description}</p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>No registration steps available</p>
                                )}
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
                            {featuresList.map((feature, i) => (
                                <FeatureCard key={i} {...feature} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
