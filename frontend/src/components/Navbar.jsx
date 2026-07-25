import {
  Bell,
  Search,
  Moon,
  Settings,
} from "lucide-react";

export default function Navbar() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl shadow-sm">

      <div className="flex items-center justify-between px-8 py-4">

        {/* Left */}

        <div>

          <h1 className="text-2xl font-bold text-slate-800">
            Welcome Back 👋
          </h1>

          <p className="text-slate-500 text-sm">
            {today}
          </p>

        </div>

        {/* Search */}

        <div className="hidden lg:flex items-center bg-slate-100 rounded-2xl px-4 py-3 w-[420px]">

          <Search
            size={18}
            className="text-slate-500"
          />

          <input
            type="text"
            placeholder="Search anything..."
            className="bg-transparent outline-none ml-3 w-full"
          />

        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          <button className="h-11 w-11 rounded-xl bg-slate-100 hover:bg-blue-100 transition flex items-center justify-center">
            <Moon size={20} />
          </button>

          <button className="relative h-11 w-11 rounded-xl bg-slate-100 hover:bg-blue-100 transition flex items-center justify-center">

            <Bell size={20} />

            <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>

          </button>

          <button className="h-11 w-11 rounded-xl bg-slate-100 hover:bg-blue-100 transition flex items-center justify-center">
            <Settings size={20} />
          </button>

          <div className="flex items-center gap-3 rounded-2xl bg-slate-100 px-3 py-2">

            <div className="h-11 w-11 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
              V
            </div>

            <div className="hidden md:block">

              <h3 className="font-semibold text-slate-800">
                Vaibhav
              </h3>

              <p className="text-xs text-slate-500">
                Administrator
              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}