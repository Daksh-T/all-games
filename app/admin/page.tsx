import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { AdminDashboard } from "@/components/admin/AdminDashboard";
import { isAdminFromCookieHeader } from "@/lib/admin-auth";

export default async function AdminPage() {
  const headerStore = await headers();
  const authorized = isAdminFromCookieHeader(headerStore.get("cookie"));

  if (!authorized) {
    redirect("/admin/login");
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-4 px-4 py-5">
      <header className="rounded-2xl bg-white p-4 shadow-sm">
        <p className="text-xs font-black uppercase tracking-wide text-sky-600">Admin</p>
        <h1 className="font-title text-2xl font-black text-slate-900">Chapter and Game CMS</h1>
      </header>
      <AdminDashboard initialBook="1l" />
    </main>
  );
}
