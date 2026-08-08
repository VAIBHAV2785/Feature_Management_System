import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Flag,
  Globe,
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

    </aside>
  );
}