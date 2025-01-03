
import axiosClient, { baseURL } from "api/axiosClient";
import {Carousel, Partner, PartnerResponse} from "sections";



async function fetchPartners(): Promise<Partner[]> {
    try {
      const response = await axiosClient.get("api/partners?populate=logoUrl") as PartnerResponse;
      const partnersData = response.data;
      // console.log (`ini isi dari partnersData ${JSON.stringify(partnersData)}`)
  
      // Map the response to extract required fields
      return partnersData?.map((partner: any) => ({
        id: partner.id,
        name: partner.name,
        logoUrl: {
          url: partner.logoUrl?.url || "/img/placeholder-logo.png", // Fallback to placeholder if logoUrl is missing
        },
      }));
    } catch (error) {
      console.error("Failed to fetch partners data:", error);
      return []; // Return an empty array on error
    }
  }

export async function Testimonials() {
    const partners = await fetchPartners()

    return (
        <div className="mb-8" id="testimonials-section">
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
                    {partners.map((partner, i) => (
                        <div key={i} className="flex items-center justify-center p-4">
                            <img
                            src={`${baseURL}${partner.logoUrl.url}`}
                            alt="logo images"
                            className="w-40 m-2"
                            />
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}