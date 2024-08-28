import React from "react";
import logoDefault from "@/public/infomedia_logo.png";
import Image from "next/image";
import welcomingHeader from "./greeting";
type Props = {};

export default function MobileSideContent({}: Props) {
  const logoSrc = logoDefault.src;

  return (
    <div className="relative -mt-16 block lg:hidden">
      <div className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20">
        <Image alt="Logo" src={logoSrc} width={150} height={150} priority />
      </div>

      <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
        {welcomingHeader[0]}
      </h1>

      <p className="mt-4 text-justify leading-relaxed text-gray-500">
        <span className="font-bold">Ivenna (Inventory Infomedia) </span>
        {welcomingHeader[1]}
      </p>
    </div>
  );
}
