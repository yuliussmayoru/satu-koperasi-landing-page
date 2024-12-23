import {Bars3Icon} from "@heroicons/react/16/solid";

export function BlogSidebarButton() {
    return (
        <div className="text-black bg-white sticky top-0 flex justify-between items-center border">
            <div className="text-xl m-2">
                <h1>Koperasi Satu</h1>
            </div>
            <button className="m-2">
                <Bars3Icon className="w-8 h-8"/>
            </button>
        </div>
    )
}