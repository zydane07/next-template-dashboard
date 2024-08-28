import Image from "next/image";
import React from "react";
import background from "@/public/background.jpg";
import logoDefault from "@/public/infomedia_putih.png";
import welcomingHeader from "./greeting";
type Props = {};

export default function SideContent({}: Props) {
  const backgroundSrc = background.src;
  const logoSrc = logoDefault.src;

  return (
    <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full">
      <Image
        alt="Background Image"
        src={backgroundSrc}
        className="absolute inset-0 h-full w-full object-cover opacity-80"
        width={500}
        height={500}
        priority
      />

      <div className="hidden lg:relative lg:block lg:p-12">
        <div className="block text-white">
          <Image
            className="h-auto w-36"
            alt="Logo"
            src={logoSrc}
            width={150}
            height={150}
            priority
          />
        </div>

        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          {welcomingHeader[0]}
        </h2>

        <p className="mt-4 leading-relaxed text-white/90">
          <span className="font-bold">Ivenna (Inventory Infomedia)</span>{" "}
          {welcomingHeader[1]}
        </p>
      </div>
    </section>
  );
}
