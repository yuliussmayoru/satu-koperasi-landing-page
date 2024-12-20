import { BlogCardData } from "../api"

export default function BlogCard() {
    const data = BlogCardData
    return (
        <div className="p-8 lg:pl-40 lg:pr-40 lg:mr-40 lg:ml-40">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {data.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col gap-2 rounded-xl shadow-xl border border-gray-300">
                            <img src={item.imgSrc} alt={item.alt} className="w-full h-full object-cover rounded-t-xl"/>
                            <div className="p-8">
                                <p className="font-bold text-xl text-[#007654] pb-4">{item.blogTitle}</p>
                                <p className="text-md">{item.blogDescription}</p>
                            </div>
                            <div className="flex justify-between gap-2 p-8">
                                <div className="flex items-center gap-2">
                                    <img src={item.authorImgSrc} alt={item.authorName} className="w-6 h-6 rounded-full"/>
                                    <p>{item.authorName}</p>
                                </div>
                                <p>{item.blogDate}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}