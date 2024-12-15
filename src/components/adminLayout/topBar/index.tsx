"use client"

import { useAdminPanel } from "@/context/adminPanelContext";
import { ArrowRightEndOnRectangleIcon, Bars3Icon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";

export function TopBar() {
    const { toggleMenu } = useAdminPanel();

    const router = useRouter();

    const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push("/login");
    }
    return (
        <div className="flex justify-between items-center bg-[#007654] text-white p-4">
            <button
                onClick={toggleMenu}
                className="p-2 rounded-md hover:bg-green-600 transition"
            >
                <Bars3Icon className="w-6 h-6 lg:hidden"/>
            </button>
            <div className="flex items-center gap-4 p-2">
                <h2>Admin Name</h2>
                <button
                    onClick={handleLogout}
                ><ArrowRightEndOnRectangleIcon className="w-6 h-6"/></button>
            </div>
        </div>
    )
}