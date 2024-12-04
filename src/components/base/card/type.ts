import { HTMLAttributes } from "react";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
    cardClassName?: string
};