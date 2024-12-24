import axiosClient from "api/axiosClient";

export async function fetchBlogDetail(documentId: string) {
    try {
        const response = await axiosClient.get(`/api/articles/${documentId}?populate=*`)
        const blog = response.data
        console.log(`ini data blog detail ${JSON.stringify(blog)}`)
        return {
            title: blog.title,
            description: blog.description,
            content: blog.blocks.map((block: any) => block.body).join("\n"),
            coverImage: blog.cover.url,
        }
    } catch (error) {
        console.error ("Error fetching blog detail:", error)
        return null;
    }
}