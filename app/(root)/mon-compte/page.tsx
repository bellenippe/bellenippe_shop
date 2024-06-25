import Orders from "@/components/Orders";
// import Wishlist from "@/components/Wishlist";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mon Compte | Belle Nippe",
  description:
    "Page de gestion de votre compte client sur le site de Belle Nippe.",
};

import { UserButton, useUser } from "@clerk/nextjs";

export default function MonComptePage() {
  return (
    <section>
      <h1 className="pt-[5rem] pb-4 text-center text-[2rem] text-white font-bold uppercase bg-noir-1 bg-grid-small-white/[0.3]">
        mon compte
      </h1>
      <div className="">
        {/* <article className=" bg-red-400">
          <h2>Wishlist</h2>
          <Wishlist />
        </article> */}
        <article className="px-4 lg:px-28 pt-8">
          <div className="flex justify-between flex-col gap-8 md:flex-row md:gap-0">
            <div
              className="md:hidden flex flex-row w-full justify-center items-center gap-2 bg-noir-1 p-2"
              aria-label="Gestion et déconnexion du compte utilisateur."
            >
              <UserButton afterSignOutUrl="/" />
              <p className="text-white font-figtree">
                Gérer mon compte | Se déconnecter
              </p>
            </div>
            <h3 className="font-figtree font-semibold text-[1.5rem]">
              Mes commandes :
            </h3>
            <div
              className="hidden md:block w-[21rem] items-center gap-2 bg-noir-1 p-2"
              aria-label="Gestion et déconnexion du compte utilisateur."
            >
              <div className="flex gap-4 justify-center items-center">
                <UserButton afterSignOutUrl="/" />
                <p className="text-white font-figtree">
                  Gérer mon compte | Se déconnecter
                </p>
              </div>
            </div>
          </div>
          <Orders />
        </article>
      </div>
      <div className="py-[3rem] flex justify-center"></div>
    </section>
  );
}

export const dynamic = "force-dynamic";
