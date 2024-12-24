export type BlogCardData = {
    documentId: string
    imgSrc: string
    alt: string
    blogTitle: string
    blogDescription: string
    authorName: string
    authorImgSrc?: string
    blogDate: string
    slug: string
}

export type BlogDetailProps = {
    params: {slug: string}
}
