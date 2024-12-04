"use client";

import { createContext, useContext, useState } from "react";
import { AdminPanelContextType } from "./type";

// create context
const AdminPanelContext = createContext<AdminPanelContextType | undefined>(undefined)

// provider component
export const AdminPanelProvider = ({children}: {children: React.ReactNode}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    return (
        <AdminPanelContext.Provider value={{isOpen, toggleMenu}}>
            {children}
        </AdminPanelContext.Provider>
    )
}

export function useAdminPanel() {
    const context = useContext(AdminPanelContext);
    if (!context) {
        throw new Error("useAdminPanel must be used within a AdminPanelProvider");
    }
    return context;
}
