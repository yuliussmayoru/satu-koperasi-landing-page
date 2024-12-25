import {BlogDetailProps, fetchBlogCards, fetchBlogDetail} from "sections";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function BlogDetailPage({ params } : BlogDetailProps) {
    const { slug } = await params

    const blogs = await fetchBlogCards()
    const matchedBlog = blogs.find((blog) => blog.slug === slug )

    if (!matchedBlog) {
        return <div>Blog not found</div>
    }

    const documentId = matchedBlog?.documentId

    if (!documentId) {
        return <div>Invalid blog ID</div>
    }

    const blog = await fetchBlogDetail(documentId)

    if (!blog) {
        return <div>Failed to fetch blog details</div>
    }

    return (
        <div className="p-8">
            <img
                src={`${process.env.NEXT_PUBLIC_API_URL}${blog.coverImage}`}
                alt={blog.title}
                className="w-full h-auto rounded-lg"
            />
            <h1 className="text-3xl font-bold my-4">{blog.title}</h1>
            <p className="text-gray-600">{blog.description}</p>
            <div className="prose max-w-full">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{blog.content}</ReactMarkdown>
            </div>
        </div>
    )
}