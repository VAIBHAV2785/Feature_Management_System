import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="flex bg-slate-100">

      <Sidebar />

      <div className="flex-1 flex flex-col min-h-screen">

        <Navbar />

        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>

      </div>

    </div>
  );
}