"use client";

import { HomeIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useAdminPanel } from "@/context/adminPanelContext";
import { SideMenuList } from "../sideMenuList";

export function SideMenu() {
  const { isOpen, toggleMenu } = useAdminPanel();

  return (
    <>
      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-green-500 text-white transition-all duration-300 z-50 ${
          isOpen ? "w-64" : "w-0 lg:w-16"
        } overflow-hidden flex flex-col`}
      >
        {/* Logo and Close Button */}
        <div
          className={`flex items-center justify-between p-4 bg-green-600 transition-opacity duration-300 ${
            isOpen || "lg:justify-center"
          }`}
        >
          <h1
            className={`text-lg font-bold transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "-translate-x-10 lg:hidden"
            }`}
          >
            Logo
          </h1>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-green-700 transition"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Side Menu Items */}
        <ul
          className={`flex flex-col mt-4 ${
            isOpen ? "items-start px-4" : "items-center"
          }`}
        >
          <SideMenuList
            href="/"
            icon={<HomeIcon />}
            iconClassName="text-yellow-300"
            isExpanded={isOpen}
          >
            Dashboard
          </SideMenuList>
          {/* Add more items here */}
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMenu} // Close the side menu when the overlay is clicked
        ></div>
      )}

      {/* Disable Scrolling */}
      {isOpen && (
        <style>
          {`
            body {
              overflow: hidden;
            }
          `}
        </style>
      )}
    </>
  );
}
