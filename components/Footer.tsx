import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="lg:h-[90vh]">
      <section className="h-[25%] mb-12 md:mb-8 flex flex-col gap-8 justify-center items-center bg-grid-small-white/[0.2]">
        <div className="h-[0.1rem] bg-noir-1 w-1/2"></div>
        <h2 className="text-center text-[1rem] font-figtree text-noir-1 font-bold uppercase">
          suivez Belle nippe
        </h2>
        <div className="flex gap-12">
          <Link
            href="https://www.instagram.com/bellenippeshop/?igsh=MWowMTk4Y2t6bzc1bA%3D%3D"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              className="w-6 h-6 text-noir-1 hover:text-grey-3 transition-all duration-200 ease-in-out"
            />
          </Link>
          <Link
            href="https://www.instagram.com/bellenippeshop/?igsh=MWowMTk4Y2t6bzc1bA%3D%3D"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faTiktok}
              size="2x"
              className="w-6 h-6 text-noir-1 hover:text-grey-3 transition-all duration-200 ease-in-out"
            />
          </Link>
          <Link
            href="https://www.instagram.com/bellenippeshop/?igsh=MWowMTk4Y2t6bzc1bA%3D%3D"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              size="2x"
              className="w-6 h-6 text-noir-1 hover:text-grey-3 transition-all duration-200 ease-in-out"
            />
          </Link>
        </div>
      </section>
      <section className="lg:h-[75%] flex flex-col justify-center pt-8 pb-2 items-center gap-8 bg-noir-1 bg-grid-small-white/[0.23]">
        <Image
          className="h-20 w-20"
          src="/images/Logos/bnFullWhiteIcon.png"
          width={300}
          height={300}
          alt="Logo de la marque Belle Nippe"
        />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="text-[1rem] font-figtree text-white font-bold uppercase ">
              Page du site
            </h2>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-center items-center text-white text-sm">
              <Link
                href="/"
                className="hover:text-grey-3 transition-all ease-in-out"
              >
                Accueil
              </Link>
              <Link
                href="/shop"
                className="hover:text-grey-3 transition-all ease-in-out"
              >
                Shop
              </Link>
              <Link
                href="/editorial"
                className="hover:text-grey-3 transition-all ease-in-out"
              >
                Editorial
              </Link>
              <Link
                href="/a-propos"
                className="hover:text-grey-3 transition-all ease-in-out"
              >
                A Propos
              </Link>
              <Link
                href="/mon-panier"
                className="hover:text-grey-3 transition-all ease-in-out"
              >
                Mon Panier
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="text-center text-[1rem] font-figtree text-white font-bold uppercase ">
              Service Client
            </h2>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-center items-center text-white text-sm">
              <Link
                href="/contact"
                className="hover:text-grey-3 transition-all ease-in-out"
              >
                Contactez-nous
              </Link>
              <Link
                href="/livraison-retours"
                className="hover:text-grey-3 transition-all ease-in-out"
              >
                Livraisons & Retours
              </Link>
              <Link
                href="/mentions-legales"
                className="hover:text-grey-3 transition-all ease-in-out"
              >
                Mentions Légales
              </Link>
              <Link
                href="/politique-de-confidentialite"
                className="hover:text-grey-3 transition-all ease-in-out"
              >
                Politique de Confidentialité
              </Link>
              <Link
                href="/cgv"
                className="hover:text-grey-3 transition-all ease-in-out"
              >
                CGV
              </Link>
              <Link
                href="https://www.inthegleam.com/"
                target="_blank"
                className="hover:text-grey-3 transition-all ease-in-out"
              >
                Website by : intheGleam
              </Link>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs font-figtree text-white">
            Copyright © 2024 - Belle Nippe, Orléans - All Rights Reserved
          </p>
        </div>
      </section>
    </footer>
  );
}
