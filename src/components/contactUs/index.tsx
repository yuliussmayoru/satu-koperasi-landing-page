import { EnvelopeIcon, MapPinIcon, PaperAirplaneIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { Input } from "../base";

export default function ContactUs() {
    
    const data = ["Jl. Raya Tegal, Kec. Tegal, Kabupaten Tegal, Jawa Tengah", "info@discuss@satukoperasi.com","(+62) 812 3456 789"]
    const getIcon = (index: any) => {
        switch (index) {
            case 0:
                return <MapPinIcon className="w-8 h-8 text-[#007654] m-2" />
            case 1:
                return <EnvelopeIcon className="w-8 h-8 text-[#007654] m-2" />
            case 2:
                return <PhoneIcon className="w-8 h-8 text-[#007654] m-2" />
            default:
                return null;
        }
    }
    return (
        <div className="bg-slate-100 pb-12 pt-12">
            <div className="flex flex-col lg:flex-row items-center justify-center">
                <div>
                <div className="flex flex-col gap-8 p-8">
                    <h2 className="font-bold text-[#007654]">Hubungi Kami</h2>
                    <p className="text-3xl">Kami siap menerima pertanyaan dan saran Anda!</p>
                </div>
                    <div>
                    {data.map((item, index) => (
                            <div key={index} className="flex items-center gap-8 p-8">
                                <div className="flex flex-col text-center items-center">
                                    <div className="flex flex-col text-center items-center bg-[#78b6a4] rounded-full">
                                        {getIcon(index)}
                                    </div>
                                </div>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="border border-gray-300 rounded-lg shadow-xl m-8 bg-white">
                        <form className="flex flex-col md:grid md:grid-cols-2 gap-8 p-8">
                            <Input
                                type="text"
                                label="First Name"
                                placeholder="Your First Name..."
                            />
                            <Input
                                type="text"
                                label="Last Name"
                                placeholder="Last Name..."
                            />
                            <Input
                                type="text"
                                label="Email Address"
                                placeholder="Your email address..."
                            />
                            <Input
                                type="text"
                                label="Phone Number"
                                placeholder="Your phone number..."
                            />
                           <textarea
                                id="message"
                                name="message"
                                rows={4}
                                cols={50}
                                placeholder="Enter your message here..."
                                className="border border-gray-300 rounded-md p-2 w-full col-span-2"
                            />
                            <button type="submit" className="bg-[#007654] text-white p-2 rounded flex items-center gap-4 justify-center">Send <PaperAirplaneIcon className="w-4 h-4" /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}