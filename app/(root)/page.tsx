import Image from "next/image";
import Link from "next/link";
import Collections from "@/components/Collections";

export default function Home() {
  return (
    <>
      <section className="h-[100vh] flex flex-col justify-center items-center bg-[#fff] ">
        <div className="h-[80%] w-[100%] pt-40 pb-20 mx-[0rem] bg-noir-1 bg-grid-small-black/[0.9] hover:bg-grid-small-white/[0.3]   transition-all duration-1000 ease-in-out ">
          <div className="h-full flex flex-col gap-12 justify-center items-center rounded-sm ">
            <div className="h-auto w-[60%] md:w-[25rem] flex items-center justify-center ">
              <Image
                className="w-auto h-auto object-contain mx-auto lg:w-[30rem] lg:h-auto"
                src="/images/Logos/bnFullWhiteLogo.png"
                width={500}
                height={500}
                alt="Logo de la marque Belle Nippe"
              />
            </div>
          </div>
        </div>
        <Link
          href="/shop"
          className="py-10 px-4 md:px-28 w-full flex bg-white bg-grid-small-black/[0.4] hover:bg-grid-black/[0.1] font-figtree font-bold md:tracking-widest text-[1.5rem] md:text-[2rem] text-noir-1 uppercase hover:text-[#232323] transition-all duration-500 ease-in-out"
        >
          Belle Nippe Collections - SHOP
        </Link>
        <Link
          href="/editorial"
          className="py-10 px-4 md:px-28 w-full flex justify-end text-end bg-grey-2 font-figtree font-bold md:tracking-widest text-[1.5rem] md:text-[2rem] text-white uppercase hover:bg-grey-3 hover:text-[#232323] bg-grid-small-black/[0.4] hover:bg-grid-black/[0.1]  transition-all duration-500 ease-in-out"
        >
          BOOK - Belle Nippe Collections
        </Link>
      </section>

      <section className="mt-10">
        <Collections />
      </section>

      <Link
        href="/shop"
        className="py-10 px-4 md:px-28 w-full flex justify-between md:justify-start text-[1.5rem] md:text-[2rem] text-white font-figtree font-bold md:tracking-widest uppercase bg-grey-2 bg-grid-small-black/[0.4] hover:bg-grid-black/[0.1] transition-all duration-500 ease-in-out"
      >
        vêtements
        <Image
          className="object-cover h-10 w-10 md:hidden"
          src="/images/Logos/bnFullWhiteIcon.png"
          width={300}
          height={300}
          alt="Logo de la marque Belle Nippe"
        />
      </Link>
      <Link
        href="/shop"
        className="py-10 px-4 md:px-28 w-full flex justify-between md:justify-end text-end text-white text-[1.5rem] md:text-[2rem] font-figtree font-bold  md:tracking-widest uppercase bg-grey-4 bg-grid-small-black/[0.4] hover:bg-grid-black/[0.1] transition-all duration-500 ease-in-out"
      >
        <Image
          className="object-cover h-10 w-10 md:hidden"
          src="/images/Logos/bnFullWhiteIcon.png"
          width={300}
          height={300}
          alt="Logo de la marque Belle Nippe"
        />
        Accessoires
      </Link>

      <section className="bg-white bg-grid-small-black/[0.1] px-4 lg:px-28 mt-10">
        <div>
          <p className="p-10 text-center text-[1.5rem] md:text-[2rem] text-[#c3c3c3] font-weirdWords uppercase tracking-widest">
            BELLE NIPPE, MAISON DE COUTURE
          </p>
          <h3 className="py-10 mt-[-8rem] md:mt-[-8rem] text-center text-[1.5rem] md:text-[2.5rem] text-noir-1 font-figtree font-bold uppercase tracking-widest">
            BELLE NIPPE, MAISON DE COUTURE
          </h3>
        </div>

        <Image
          className="object-cover h-[25rem] w-full"
          src="/images/photos/jeans.jpg"
          width={1920}
          height={1080}
          alt="Logo de la marque Belle Nippe"
        />
        <p className="text-noir-1 text-justify font-figtree tracking-widest mt-8 pb-10">
          Un style unique, une mode éthique et responsable. Belle Nippe est une
          maison de couture qui propose des vêtements et accessoires pour femmes
          et hommes. Nos collections sont conçues et fabriquées en France, dans
          notre atelier situé à Orléans. Nous utilisons des matières premières
          de qualité, respectueuses de l'environnement et des conditions de
          travail des ouvriers. Notre objectif est de proposer des vêtements et
          accessoires qui allient style, confort et durabilité. Découvrez nos
          collections et laissez-vous séduire par l'univers Belle Nippe.
        </p>
      </section>

      <section></section>
    </>
  );
}

export const dynamic = "force-dynamic";
