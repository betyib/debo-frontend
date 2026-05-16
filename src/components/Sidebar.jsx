import {
  LayoutDashboard,
  FolderKanban,
  LogOut,
} from "lucide-react";

import { Link } from "react-router-dom";

function Sidebar({ logout }) {
  return (
    <div className="w-64 bg-white border-r border-blue-100 min-h-screen p-6 flex flex-col">
      {/* LOGO */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-blue-600">
          DEBO
        </h1>
      </div>
     <div>
      {/* NAVIGATION */}
      <nav className="flex flex-col gap-4">
        <Link
          to="/dashboard"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-100"
        >
          <LayoutDashboard size={20} />

          Dashboard
        </Link>

        <Link
          to="/dashboard"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-100"
        >
          <FolderKanban size={20} />

          Projects
        </Link>
      </nav>

      {/* LOGOUT */}
      <button
        onClick={logout}
        className="mt-auto flex items-center gap-3 p-3 rounded-xl text-red-500 hover:bg-red-50"
      >
        <LogOut size={20} />

        Logout
      </button>
      </div>
    </div>
  );
}

export default Sidebar;