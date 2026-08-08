<<<<<<< HEAD
import { NavLink } from "react-router-dom";

=======
>>>>>>> bcd60838 (MILESTONE 2)
import {
  LayoutDashboard,
  Flag,
  Globe,
<<<<<<< HEAD
  Layers,
  Activity,
  Users,
  UsersRound,
  Target,
  ScrollText,
  Package,
} from "lucide-react";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-title">
        MAIN MENU
      </div>

      <NavLink to="/" end>
        <LayoutDashboard size={20} />
        <span>Dashboard</span>
      </NavLink>

      <NavLink to="/flags">
        <Flag size={20} />
        <span>Feature Flags</span>
      </NavLink>

      <NavLink to="/environment">
        <Globe size={20} />
        <span>Environments</span>
      </NavLink>

      <NavLink to="/environment-overrides">
        <Layers size={20} />
        <span>Overrides</span>
      </NavLink>

      <NavLink to="/evaluation">
        <Activity size={20} />
        <span>Evaluation</span>
      </NavLink>

      <div className="sidebar-title">
        MANAGEMENT
      </div>

      <NavLink to="/users">
        <Users size={20} />
        <span>Users</span>
      </NavLink>

      <NavLink to="/groups">
        <UsersRound size={20} />
        <span>Groups</span>
      </NavLink>

      <NavLink to="/group-members">
        <Users size={20} />
        <span>Group Members</span>
      </NavLink>

      <NavLink to="/targeting-rules">
        <Target size={20} />
        <span>Targeting Rules</span>
      </NavLink>

      <div className="sidebar-title">
        SYSTEM
      </div>

      <NavLink to="/audit-logs">
        <ScrollText size={20} />
        <span>Audit Logs</span>
      </NavLink>

      <NavLink to="/sdk">
        <Package size={20} />
        <span>SDK Docs</span>
      </NavLink>

=======
  Zap,
  SearchCheck,
  Users,
  UserCog,
  Target,
  LogOut,
  ChevronRight,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const menus = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Feature Flags",
    path: "/feature-flags",
    icon: Flag,
  },
  {
    name: "Environments",
    path: "/environments",
    icon: Globe,
  },
  {
    name: "Overrides",
    path: "/overrides",
    icon: Zap,
  },
  {
    name: "Evaluation",
    path: "/evaluation",
    icon: SearchCheck,
  },
  {
    name: "Groups",
    path: "/groups",
    icon: Users,
  },
  {
    name: "Group Members",
    path: "/group-members",
    icon: UserCog,
  },
  {
    name: "Targeting Rules",
    path: "/targeting-rules",
    icon: Target,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-r border-slate-800 flex flex-col">

      {/* Logo */}

      <div className="p-8 border-b border-slate-800">

        <div className="flex items-center gap-4">

          <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-3xl shadow-xl">
            🚀
          </div>

          <div>

            <h1 className="text-white text-2xl font-extrabold">
              FMS
            </h1>

            <p className="text-slate-400 text-sm">
              Enterprise Platform
            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <div className="flex-1 p-5 space-y-2">

        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <NavLink key={menu.path} to={menu.path}>
              {({ isActive }) => (
                <motion.div
                  whileHover={{
                    x: 6,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className={`group flex items-center justify-between rounded-2xl px-5 py-4 transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl"
                      : "text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-4">

                    <Icon size={21} />

                    <span className="font-medium">
                      {menu.name}
                    </span>

                  </div>

                  <ChevronRight
                    size={18}
                    className={`transition ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  />

                </motion.div>
              )}
            </NavLink>
          );
        })}

      </div>

      {/* User */}

      <div className="border-t border-slate-800 p-5">

        <div className="rounded-2xl bg-slate-800 p-4">

          <div className="flex items-center gap-3">

            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
              V
            </div>

            <div className="flex-1">

              <h3 className="text-white font-semibold">
                Vaibhav
              </h3>

              <p className="text-slate-400 text-sm">
                Administrator
              </p>

            </div>

          </div>

          <button className="mt-5 w-full rounded-xl bg-red-500/10 py-3 text-red-400 hover:bg-red-500 hover:text-white transition-all flex justify-center items-center gap-2">

            <LogOut size={18} />

            Logout

          </button>

        </div>

      </div>

>>>>>>> bcd60838 (MILESTONE 2)
    </aside>
  );
}