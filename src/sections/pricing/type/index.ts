export type PricingPlan = {
    title: string;
    price: string;
    features: { name: string; isActive: boolean}[]
}

export type PricingResponse = {
    data: {
        Monthly: Record<string, { price: string; features: Record<string, boolean>}>
        Annual: Record<string, { price: string; features: Record<string, boolean>}>
    }
}