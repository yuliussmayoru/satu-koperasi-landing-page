import { HTMLAttributes } from "react";

export type SideMenuListProps = HTMLAttributes<HTMLUListElement> & {
    href: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
    iconClassName?: string;
    role?: string;
    isExpanded?: boolean;
};