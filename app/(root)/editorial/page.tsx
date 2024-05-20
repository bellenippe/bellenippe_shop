import EditorialCollection from "@/components/EditorialCollection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial | Belle Nippe",
  description: "Présentation des différentes collections de Belle Nippe.",
};

export default function EditorialPage() {
  return (
    <section>
      <h1 className="pt-[5rem] pb-4 text-center text-[2rem] text-white font-bold uppercase bg-noir-1 bg-grid-small-white/[0.3]">
        éditorial
      </h1>
      <div className="py-12">
        <EditorialCollection />
      </div>
    </section>
  );
}

export const dynamic = "force-dynamic";
