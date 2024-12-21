import { HTMLAttributes } from "react";

export type ServicesCardProps = HTMLAttributes<HTMLDivElement> & {
    src: string
    alt: string
    title: string
    description: string
    serviceCardClassName?: string
    serviceCardImageClassName?: string
    serviceCardTitleClassName?: string
    serviceCardDescriptionClassName?: string
}

export type ServicesListProps = HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode
    title: string
    description: string
};