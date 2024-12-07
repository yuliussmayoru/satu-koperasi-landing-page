import { HTMLAttributes } from "react";

export type ServicesListProps = HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode
    title: string
    description: string
};