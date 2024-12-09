import Carousel from "./carousel";

export default function Testiomnials() {
    const clientImange = [
        <img src="/img/companyLogo/1.webp" alt="logo1" className="w-40 m-2"/>,
        <img src="/img/companyLogo/2.webp" alt="logo2" className="w-40 m-2"/>,
        <img src="/img/companyLogo/3.webp" alt="logo3" className="w-40 m-2"/>,
        <img src="/img/companyLogo/4.webp" alt="logo4" className="w-40 m-2"/>,
        <img src="/img/companyLogo/5.webp" alt="logo5" className="w-40 m-2"/>,
        <img src="/img/companyLogo/6.webp" alt="logo6" className="w-40 m-2"/>,
    ]
    return (
        <div className="mb-8">
            <div className="flex flex-col text-center items-center gap-8 p-12">
                <h2 className="font-bold text-[#007654]">Client Kami</h2>
                <p className="text-3xl">Apa Kata Pengguna Kami?</p>
            </div>
            <div className="mt-8 mb-8">
                <Carousel />
            </div>
            <div>
            <div className=" bg-slate-100">
                <div className="flex flex-col text-center items-center justify-center gap-8 p-12">
                    <h2 className="font-bold text-[#007654]">Dipercaya oleh Koperasi di seluruh Indonesia</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                        {clientImange.map((item, index) => (
                            <div key={index} className="flex items-center justify-center p-4">{item}</div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}