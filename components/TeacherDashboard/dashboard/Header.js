"use client"
export default function Header() {
  return (
    <header className="bg-white shadow-sm p-4 md:p-6">
      <div className="container mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Teacher's Dashboard</h1>
        <p className="text-slate-500 mt-1">Welcome back, Dr. Smith. Here's an overview of your campus.</p>
      </div>
    </header>
  );
}