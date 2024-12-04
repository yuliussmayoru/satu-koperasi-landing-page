import { twMerge } from "tailwind-merge"
import { ButtonProps } from "./type"

export function Button(props: ButtonProps) {
    const { children, buttonClassName, ...rest } = props
    return (
        <button
            className={twMerge(
                "py-3 bg-green-500 hover:bg-green-600 text-white font-semibold",buttonClassName
            )}
            {...rest}
        >
            {children}
        </button>
    )
}
