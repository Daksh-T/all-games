import Link from "next/link";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";

export default function AdminLoginPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center px-4 py-10">
      <div className="space-y-5 rounded-3xl bg-white p-6 shadow-sm">
        <Link href="/" className="text-xs font-black uppercase tracking-wide text-slate-500">
          Back
        </Link>
        <div>
          <p className="text-xs font-black uppercase tracking-wide text-sky-600">Admin</p>
          <h1 className="font-title text-2xl font-black text-slate-900">Content Dashboard Login</h1>
        </div>
        <AdminLoginForm />
      </div>
    </main>
  );
}
