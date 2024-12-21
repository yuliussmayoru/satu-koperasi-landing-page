import { ServicesListProps } from "sections/services/type"


export function ServicesList(props: ServicesListProps) {
    const { children, title, description } = props
    return (
        <div className="flex gap-8">
            <div>
                <div className="rounded-full bg-[#78b6a4] w-12 h-12 flex items-center justify-center">
                    {children}
                </div>
            </div>
            <div>
                <p className="font-bold">{title}</p>
                <p className="text-gray-500">{description}</p>
            </div>
        </div>
    )
}