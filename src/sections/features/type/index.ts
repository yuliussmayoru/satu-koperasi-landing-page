
export type FeatureCardProps = {
    src: string
    alt: string
    title: string
    description: string
    featureCardClassName?: string
    featureCardImageClassName?: string
    featureCardTitleClassName?: string
    featureCardDescriptionClassName?: string
}

export type FeaturesData = {
    featuresTitle: string;
    featuresSubtitle: string;
    featuresDescHead: string;
    featuresDescContent: string;
    featuresRegistrationStepSection: Array<{ title: string; description: string }>;
};