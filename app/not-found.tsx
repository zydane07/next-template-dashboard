import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid h-screen place-content-center bg-white px-4 dark:bg-black-400">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-500 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mb-4 mt-4 text-gray-500">We cant find that page.</p>

        <Button color="primary">
          <Link href="/">Go back home</Link>
        </Button>
      </div>
    </div>
  );
}
