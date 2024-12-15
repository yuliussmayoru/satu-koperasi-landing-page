"use client";

import React from "react";
import { AdminPanelProvider, useAdminPanel } from "@/context/adminPanelContext";
import { SideMenu, TopBar } from "@/components/adminLayout";


export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminPanelProvider>
      <div className="flex h-screen">
        {/* Side Menu */}
        <SideMenu />
        {/* Content Area */}
        <ContentWrapper>{children}</ContentWrapper>
      </div>
    </AdminPanelProvider>
  );
}

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
    const { isOpen } = useAdminPanel();
    return (
        <div
            className={`transition-all duration-300 ${
            isOpen ? "ml-64" : "ml-0 lg:ml-16"
            } flex-grow bg-gray-100`}
        >
            <TopBar />
            <main className="p-4">{children}</main>
        </div>
    );
  };
  
