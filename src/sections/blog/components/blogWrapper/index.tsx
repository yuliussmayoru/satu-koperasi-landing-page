import { BlogCard } from "sections";


export function Blog() {
    return (
        <div className="pb-16" id="blog-section">
            <div className="flex flex-col text-center items-center gap-8 p-12">
                <h2 className="font-bold text-[#007654]">Blog</h2>
                <p className="text-3xl lg:text-4xl">cek berita terakhir tentang perusahaan kami dalam blog kami.</p>
            </div>
            <div>
                <BlogCard />
            </div>
        </div>
    )
}