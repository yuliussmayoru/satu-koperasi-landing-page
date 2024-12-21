export type Testimonial = {
    id: number;
    Name: string;
    Role: string;
    Message: string;
    avatar: {
        url: string;
    }
}

export type CarouselProps = {
    title: string
    description: string
    imgSrc: string
    alt: string
    clientName: string
    clientJob: string
}