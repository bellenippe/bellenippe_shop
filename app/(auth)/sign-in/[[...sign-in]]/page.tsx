import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <div className="h-screen flex flex-col gap-8 justify-center items-center bg-noir-1 bg-grid-small-white/[0.4] ">
      <SignIn path="/sign-in" />
      <Link
        href="/"
        className="w-[90%] md:w-[40%] px-8 py-4 text-noir-1 font-figtree font-bold tracking-widest uppercase text-center bg-white hover:bg-grey-4 hover:text-noir-1 transition-all ease-in-out"
      >
        Revenir à l'accueil
      </Link>
    </div>
  );
}
