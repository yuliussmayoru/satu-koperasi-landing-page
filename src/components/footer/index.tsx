import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/16/solid";

export default function Footer() {
    return (
        <div>
            <div className="bg-[#007654] text-white p-8">
                <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:pl-40 lg:pr-40 lg:mr-40 lg:ml-40">
                    <div className="col-span-2 lg:col-span-1">
                        <h1 className="text-2xl font-bold col-span-2">Koperasi Satu</h1>
                        <div className="pt-4">
                            <p className="flex gap-4"><PhoneIcon className="w-6 h-6 text-white"/> +628123456789</p>
                            <p className="flex gap-4"><EnvelopeIcon className="w-6 h-6 text-white"/> 4QKZy@example.com</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-2xl font-bold">Company</p>
                        <ul>
                            <li>About</li>
                            <li>Services</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-2xl font-bold">Product</p>
                        <ul>
                            <li>Services</li>
                            <li>About</li>
                            <li>News & Stories</li>
                        </ul>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                        <p className="text-2xl font-bold">Important Links</p>
                        <ul>
                            <li>Pricing</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-[#359378] text-white p-4 flex justify-between">
                <p>&copy; 2024 Koperasi Satu</p>
                <div>

                </div>
            </div>
        </div>
        
    )
}