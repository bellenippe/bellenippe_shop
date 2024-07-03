import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import RevealLogo from "@/components/RevealLogo";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col gap-4 justify-center items-center bg-noir-1 bg-grid-small-white/[0.4] ">
      <div>
        <RevealLogo />
      </div>
      <p className=" text-center text-[1.5rem] md:text-[2rem] text-white font-figtree font-bold uppercase">
        404 - Cette page est introuvable
      </p>
      <Link
        href="/"
        className="w-[90%] md:w-[40%] px-8 py-4 text-noir-1 font-figtree font-bold tracking-widest uppercase text-center bg-white hover:bg-grey-4 hover:text-noir-1 transition-all ease-in-out"
      >
        Revenir à l'accueil
      </Link>
    </div>
  );
}
