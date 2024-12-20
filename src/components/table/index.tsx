import { TableProps } from "./type";

export default function TableComponent(props: TableProps) {
    const { children, columns, data, onEdit, onDetail, onDelete } = props
    return (
        <table className="w-full border border-gray-300 rounded text-center">
            <thead className="bg-gray-200 border border-gray-300">
                <tr className="border border-gray-300">
                    {columns.map((column, index) => (
                        <th key={index} className="border border-gray-300 px-4 py-2">{column}</th>
                    ))}
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {columns.map((column: string, columnIndex) => (
                            <td
                            key={columnIndex}
                            className="border border-gray-300 px-4 py-4"
                          >
                            {typeof row === "object" ? (
                              column === "Title & Subtitle" ? (
                                <div>
                                  <div className="font-bold">{row[column].split(" & Subtitle:")[0].replace("Title: ", "")}</div>
                                  <div className="text-sm text-gray-600">{row[column].split(" & Subtitle:")[1]}</div>
                                </div>
                              ) : (
                                row[column]
                              )
                            ) : (
                              row
                            )}
                          </td>
                        ))}
                        <td>
                            {onEdit && <button className="mr-2 px-2 py-1 bg-blue-500 text-white w-20 rounded hover:bg-blue-600" onClick={() => onEdit(index)}>Edit</button>}
                            {onDetail && <button className="mr-2 px-2 py-1 bg-green-500 text-white w-20 rounded hover:bg-green-600" onClick={() => onDetail(index)}>Detail</button>}
                            {onDelete && <button className="px-2 py-1 bg-red-500 text-white w-20 rounded hover:bg-red-600" onClick={() => onDelete(index)}>Delete</button>}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}