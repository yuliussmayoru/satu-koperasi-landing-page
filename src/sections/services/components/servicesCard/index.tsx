import { ServicesCardProps } from "sections/services/type";
import { twMerge } from "tailwind-merge";


export function ServicesCard(props: ServicesCardProps) {
    const { src, alt, title, description, serviceCardClassName, serviceCardImageClassName,serviceCardTitleClassName, serviceCardDescriptionClassName } = props
    return (
        <div className={twMerge("flex flex-col items-center gap-2", serviceCardClassName)}>
            <img src={src} alt={alt} className={twMerge("w-24 h-24", serviceCardImageClassName)}/>
            <p className={twMerge("font-bold text-xl text-[#007654]", serviceCardTitleClassName)}>{title}</p>
            <p className={twMerge("text-md text-center", serviceCardDescriptionClassName)}>{description}</p>
        </div>
    )
}