import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Propos | Belle Nippe",
  description: "Ce qu'il faut savoir à propos de la marque Belle Nippe.",
};

export default function AproposPage() {
  return (
    <section className=" mb-20">
      <h1 className="pt-[5rem] pb-4 text-center text-[2rem] text-white font-bold uppercase bg-noir-1 bg-grid-small-white/[0.3]">
        à propos
      </h1>
      <div className="py-[3rem] flex justify-center px-4 lg:px-28 mt-4 md:my-16">
        <p className="mt-8 text-noir-1 text-justify font-figtree tracking-widest pb-10 text-[0.8rem] md:text-[1rem]">
          <span className="font-bold">Belle Nippe</span> est une marque de
          couture française qui prône l'artisanat et le savoir-faire. Dans une
          ère où le savoir-faire se perd, Belle Nippe essaye, à travers ses
          collections,{" "}
          <span className="font-bold">
            de mettre en avant la beauté du "fait main" en proposant des pièces
            de qualité en quantités limités.
          </span>{" "}
          C'est la raison pour laquelle nos prix ne peuvent se confondre avec
          ceux de l'industrie. Nous passons énormément de temps à réaliser nos
          créations et à vous proposer une pièce qui vous suivra plusieurs
          années. <br /> <br />{" "}
          <span className="font-bold">
            Notre démarche artistique consiste à ne pas s&apos;emettre de limite
            et surprendre notre clientèle à chaque collection. Chacune d'entre
            avec sa propre histoire.
          </span>{" "}
          <br /> <br /> L'équipe se compose d'un couturier, qui est seul dans la
          production des articles en vente sur le site/ Ici, vous trouverez nos
          collections de textiles et accessoires fait-main et tuot ce qui peut
          défendre le savoir faire. <br /> <br />{" "}
          <span className="font-bold">
            Pour finir, nous dirons que si vous souhaitez être bien nippé et
            porter des vêtements de qualités, bienvenue chez nous !
          </span>
        </p>
      </div>
    </section>
  );
}
