import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="font-title text-3xl font-black text-slate-900">Page not found</h1>
      <p className="text-sm text-slate-600">The chapter or book link may be unavailable.</p>
      <Link href="/" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-bold text-white">
        Go Home
      </Link>
    </main>
  );
}
