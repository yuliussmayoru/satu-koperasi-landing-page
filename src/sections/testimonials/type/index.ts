export type Testimonial = {
    id: number;
    name: string;
    role: string;
    messages: string;
    avatar: {
        url: string;
    }
}

export type Partner = {
    id: string
    name: string
    logoUrl: {
        url: string
    }
}

export type PartnerResponse = {
    data: [
        id: number,
        attributes: {
            Name: string;
            logoUrl: {
                data: {
                    url: string
                }
            }
        }
    ]
}