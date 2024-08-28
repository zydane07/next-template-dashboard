'use client';
import { Button, Tooltip } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { IoIosMoon, IoIosSunny } from 'react-icons/io';
type Props = {
  theme: string;
  setTheme: (theme: string) => void;
};

export default function ThemeMode({ theme, setTheme }: Props) {
  // handle dark mode
  const modeText = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
  const [isFirtsRender, setIsFirtsRender] = useState(true);

  //   handle dark mode
  useEffect(() => {
    if (isFirtsRender == true) {
      setIsFirtsRender(false);
      return;
    }
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme, isFirtsRender]);

  const handleThemeSwitch = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };
  //   handle dark mode
  return (
    <Tooltip content={modeText} key="primary" color="primary">
      <Button variant="light" className="text-2xl min-w-8" color="primary">
        {theme === 'dark' ? (
          <IoIosSunny className="mx-0 px-0" onClick={handleThemeSwitch} />
        ) : (
          <IoIosMoon className="mx-0 px-0" onClick={handleThemeSwitch} />
        )}
      </Button>
    </Tooltip>
  );
}
