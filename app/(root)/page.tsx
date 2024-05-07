import Collections from "@/components/Collections";
import ProductsList from "@/components/ProductsList";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="h-[80vh] flex justify-center items-center bg-slate-600">
        <div className="h-full flex flex-col gap-12 justify-center items-center">
          <div className="h-auto w-[60%] md:w-[25rem] flex items-center justify-center ">
            <Image
              className="w-auto h-auto object-contain mx-auto lg:w-[30rem] lg:h-auto"
              src="/images/Logos/bnFullWhiteLogo.png"
              width={500}
              height={500}
              alt="Logo de la marque Belle Nippe"
            />
          </div>
          <div className="w-[60%] md:w-[25rem] flex items-center justify-center">
            <Link
              href="/shop"
              className="w-full text-center bg-white rounded-lg"
            >
              <button className="py-4 text-[1rem] md:text-[1.5rem] text-black uppercase tracking-widest">
                Explorez le shop
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="px-[1rem]">
        <Collections />
      </section>
    </>
  );
}
