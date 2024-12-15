import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { SideMenuListProps } from "../type";

export function SideMenuList(props: SideMenuListProps) {
  const { href, children, icon, iconClassName, isExpanded } = props;

  return (
    <li className="w-full hover:bg-green-600 hover:rounded hover:rounded-full">
      <Link
        href={href}
        className={twMerge(
          "flex items-center p-2 w-full gap-4",
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
