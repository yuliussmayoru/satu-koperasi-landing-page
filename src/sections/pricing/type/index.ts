export type PricingPlan = {
    title: string;
    price: string;
    features: { name: string; isActive: boolean}[]
}

export type PricingResponse = {
    data: {
        monthly: Record<string, { price: string; features: Record<string, boolean>}>
        annual: Record<string, { price: string; features: Record<string, boolean>}>
    }
}

export type PricingCardProps = {
    title: string;
    price: string;
    features: { name: string; isActive: boolean }[];
};