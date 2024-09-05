import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="grid grid-cols-[1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <aside className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></aside>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
      </section>
    </div>
  );
}
