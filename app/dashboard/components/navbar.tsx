import { Avatar, Button } from "@nextui-org/react";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import ThemeMode from "./themeMode";
import userIcon from "@/public/user_icon.png";
import Sidebar from "./sidebar";

type Props = {
  theme: string;
  setTheme: (theme: string) => void;
  toggleSidebar: () => void;
};

export default function Navbar({ theme, setTheme, toggleSidebar }: Props) {
  const name = "Muhammad Zydane";
  const userIconSrc = userIcon.src;

  return (
    <>
      <div className="flex flex-col items-center justify-between gap-4 border-b-2 py-2 dark:border-black-200 sm:h-20 sm:flex-row sm:px-8 sm:py-0">
        <div className="flex items-center gap-4">
          <Button isIconOnly variant="bordered" onClick={toggleSidebar}>
            <RxHamburgerMenu className="text-xl" />
          </Button>
          <h2 className="text-lg font-light capitalize">Inventory Dashboard</h2>
        </div>
        <div className="flex items-center gap-4">
          <ThemeMode theme={theme} setTheme={setTheme} />
          <div className="flex items-center gap-2">
            <Avatar src={userIconSrc} size="md" />
            <h1>{name}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
