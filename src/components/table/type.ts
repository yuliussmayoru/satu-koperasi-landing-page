export type TableProps = {
    children?: React.ReactNode
    columns: string[]
    data: { [key: string]: string }[] | string[]
    onEdit?: (index: number) => void
    onDetail?: (index: number) => void
    onDelete?: (index: number) => void

}