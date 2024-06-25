import Footer from "@/components/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <p>404 | Cette page est introuvable.</p>
      <Link
        href="/"
        className="w-[90%] md:w-[40%] px-8 py-4 text-white font-figtree font-bold tracking-widest uppercase text-center bg-noir-1 hover:bg-grey-4 hover:text-noir-1 transition-all ease-in-out"
      >
        Revenir à l'accueil
      </Link>
    </div>
  );
}
