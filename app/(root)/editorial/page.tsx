import EditorialCollection from "@/components/EditorialCollection";

export default function EditorialPage() {
  return (
    <section className="pt-[7rem] px-[5rem] bg-slate-600">
      <h1 className="text-center text-[3rem]">Editorial</h1>
      <div>
        <EditorialCollection />
      </div>
    </section>
  );
}
