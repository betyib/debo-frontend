import {
  Bell,
  Search,
} from "lucide-react";

function Topbar({ user, onEditProfile, search,
  setSearch,}) {
  return (
    <div className="bg-white shadow px-8 py-4 flex justify-between items-center rounded-2xl">
      {/* SEARCH */}
      <div className="flex items-center gap-3 bg-blue-50 px-4 py-2 rounded-xl w-80">
        <Search size={18} />

        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) =>
          setSearch(e.target.value)
         }
         className="bg-transparent outline-none w-full"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">
        <button className="relative">
          <Bell size={22} />

          <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full"></span>
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
            {user?.user?.name?.charAt(0)}
          </div>

          <div>
            <p className="font-semibold">
              {user?.user?.name}
            </p>

            <p className="text-sm text-gray-500">
             
              <button
  onClick={onEditProfile}
  className="text-sm text-blue-500"
>
  Edit Profile
</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;