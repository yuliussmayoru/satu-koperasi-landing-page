import { InputHTMLAttributes } from "react"

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string
    containerClassName?: string
    inputContainerClassName?: string
    labelClassName?: string
    inputClassName?: string
    rightNode?: React.ReactNode
    rightNodeClick?: () => void
    control?: any
}