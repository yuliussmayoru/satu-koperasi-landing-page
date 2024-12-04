import { twMerge } from "tailwind-merge";
import { CardProps } from "./type";


    export function Card(props: CardProps) {
        const { children, cardClassName, ...rest } = props
        return (
            <div
                className={twMerge(
                    "p-4 w-full bg-white border border-gray-6 rounded-md", cardClassName
                )}
                {...rest}
            >
                {children}
            </div>
        )
    }