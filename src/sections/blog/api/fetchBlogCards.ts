import axiosClient from "api/axiosClient";
import {BlogCardData} from "../type";

export async function fetchBlogCards(): Promise<BlogCardData[]> {
    try {
        const response = await axiosClient.get("/api/articles?populate=*");
        const articles = response.data.slice(0, 3).map((item: any) => ({
            documentId: item.documentId,
            imgSrc: item.cover.formats.thumbnail.url,
            alt: item.cover.alternativeText || item.title,
            blogTitle: item.title,
            blogDescription: item.description,
            authorName: item.author.name,
            blogDate: new Date(item.createdAt).toLocaleDateString(),
            slug: item.slug,
        }));
        console.log(`ini data blog ${(articles)}`)

        return articles;
    } catch (error) {
        console.error("Error fetching blog data:", error);
        return []; // Return empty array if fetching fails
    }
}
