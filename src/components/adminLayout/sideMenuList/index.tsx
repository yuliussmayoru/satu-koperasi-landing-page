import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { SideMenuListProps } from "../type";

export function SideMenuList(props: SideMenuListProps) {
  const { href, children, icon, iconClassName, isExpanded } = props;

  return (
    <li>
      <Link
        href={href}
        className={twMerge(
          "flex items-center p-2 w-full text-white hover:bg-green-600",
          isExpanded ? "pl-8" : "justify-center"
        )}
      >
        {icon && (
          <span className={twMerge("w-6 h-6 flex items-center justify-center", iconClassName)}>
            {icon}
          </span>
        )}
        {isExpanded && <span>{children}</span>}
      </Link>
    </li>
  );
}
