import Link from "next/link";
import { BookBrowser } from "@/components/BookBrowser";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col gap-6 px-4 pb-10 pt-6">
      <header className="rounded-3xl bg-hero-gradient p-5 text-white shadow-lg">
        <p className="text-xs font-black uppercase tracking-[0.18em] opacity-90">ESL Playbook</p>
        <h1 className="mt-2 font-title text-3xl font-black leading-tight">Fun chapter games for quick daily practice</h1>
        <p className="mt-3 text-sm font-semibold text-sky-50/90">
          Choose your book, play short rounds, and build real-life English confidence.
        </p>
        <Link
          href="/admin/login"
          className="mt-4 inline-flex rounded-full border border-white/60 px-3 py-1 text-xs font-black uppercase tracking-wide"
        >
          Admin
        </Link>
      </header>

      <BookBrowser />
    </main>
  );
}
