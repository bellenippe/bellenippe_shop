import EditorialCollection from "@/components/EditorialCollection";

export default function EditorialPage() {
  return (
    <section>
      <h1 className="pt-[5rem] pb-4 text-center text-[3rem] text-white font-bold uppercase bg-noir-1 bg-grid-small-white/[0.3]">
        éditorial
      </h1>
      <div className="py-12">
        <EditorialCollection />
      </div>
    </section>
  );
}
