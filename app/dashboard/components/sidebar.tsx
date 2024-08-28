import React from "react";
import LogoDefault from "@/public/infomedia_logo.png";
import LogoDark from "@/public/infomedia_putih.png";
import { Image } from "@nextui-org/image";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  theme: string;
};
interface Menu {
  text: string;
  icon: JSX.Element;
  path?: string;
  onClick?: () => void;
}

export default function Sidebar({ theme }: Props) {
  const logoSrc = theme === "dark" ? LogoDark.src : LogoDefault.src;
  const pathName = usePathname();

  const menuLists: Menu[] = [
    {
      text: "Dashboard",
      icon: <FaHome />,
      path: "/dashboard",
    },
    {
      text: "Assets",
      icon: <FaHome />,
      path: "/dashboard/assets",
    },
    {
      text: "Collection",
      icon: <FaHome />,
      path: "/dashboard/collection",
    },
    {
      text: "User Management",
      icon: <FaHome />,
      path: "/dashboard/user-management",
    },
    {
      text: "Log Out",
      icon: <FaHome />,
      path: "/auth",
      // onClick: () => signOut({ callbackUrl: "/login" }),
    },
  ];
  return (
    <div className="min-h-screen border-r-2 bg-slate-200 dark:border-black-200 dark:bg-black-300">
      <div className="mx-4 flex h-10 items-center justify-center border-b-2 border-black-100 dark:border-black-200 sm:h-20">
        <Image src={logoSrc} alt="logo" className="w-28 sm:w-40" />
      </div>
      <div className="mx-8 my-4">
        <ul className="mb-4 flex flex-col gap-1">
          {menuLists.map((menu) => {
            if (menu.onClick) {
              return (
                <li
                  key={menu.text}
                  onClick={menu.onClick}
                  className={`link flex items-center gap-3 rounded-xl px-2 py-4 text-xs hover:bg-blue-300 hover:text-slate-50 md:text-sm ${
                    pathName === menu.path ? "bg-blue-500 text-slate-50" : ""
                  }`}
                >
                  <span className="hidden md:inline-block">{menu.icon}</span>
                  {menu.text}
                </li>
              );
            }

            return (
              <Link href={menu.path!} key={menu.text}>
                <li
                  className={`link flex items-center gap-3 rounded-xl px-2 py-4 text-xs hover:bg-blue-300 hover:text-slate-50 md:text-sm ${
                    pathName === menu.path ? "bg-blue-500 text-slate-50" : ""
                  }`}
                >
                  <span className="hidden md:inline-block">{menu.icon}</span>
                  {menu.text}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
