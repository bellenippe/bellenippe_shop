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
      <div className="py-[3rem] flex justify-center"></div>
    </section>
  );
}
