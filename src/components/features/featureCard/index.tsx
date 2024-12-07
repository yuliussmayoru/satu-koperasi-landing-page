import { twMerge } from "tailwind-merge"
import { FeatureCardProps } from "./type"

export function FeatureCard(props: FeatureCardProps) {
    const { src, alt, title, description, featureCardClassName, featureCardImageClassName,featureCardTitleClassName, featureCardDescriptionClassName } = props
    return (
        <div className={twMerge("flex flex-col items-center gap-2", featureCardClassName)}>
            <img src={src} alt={alt} className={twMerge("w-24 h-24", featureCardImageClassName)}/>
            <p className={twMerge("font-bold text-xl text-[#007654]", featureCardTitleClassName)}>{title}</p>
            <p className={twMerge("text-md text-center", featureCardDescriptionClassName)}>{description}</p>
        </div>
    )
}