import React from "react";
import SideContent from "./components/sideContent";
import MobileSideContent from "./components/mobileSideContent";
import LoginForm from "./components/loginForm";

type Props = {};

export default function Page({}: Props) {
  return (
    <section className="bg-default-50 dark:bg-black-300">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <SideContent />
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12">
          <div className="w-3/4 max-w-xl lg:max-w-3xl">
            <MobileSideContent />
            <LoginForm />
          </div>
        </main>
      </div>
    </section>
  );
}
