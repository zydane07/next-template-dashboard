"use client";

import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Si1Password } from "react-icons/si";

type Props = {};

export default function LoginForm({}: Props) {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <>
      <form className="mt-8 flex w-full flex-col gap-4 lg:mt-0">
        <Input
          type="email"
          label="Email"
          placeholder="you@example.com"
          variant="bordered"
          size="lg"
          labelPlacement="outside"
          startContent={
            <IoMail className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
          }
        />
        <Input
          label="Password"
          placeholder="Enter your password"
          variant="bordered"
          size="lg"
          labelPlacement="outside"
          startContent={
            <Si1Password className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
          }
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <FaEyeSlash className="pointer-events-none text-2xl text-default-400" />
              ) : (
                <FaEye className="pointer-events-none text-2xl text-default-400" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
        />
        <div className="mt-4 w-full">
          <Button className="w-full" variant="shadow" color="primary" size="lg">
            <Link href="/dashboard">Login</Link>
          </Button>
        </div>
      </form>
    </>
  );
}
