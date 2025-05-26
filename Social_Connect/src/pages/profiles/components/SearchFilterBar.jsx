import React from "react";
import { Building, MapPin, Settings, BadgeCheck, Search } from "lucide-react";

export default function SearchFilterBar() {
  return (
    <div className="bg-white p-4 w-full">
      <div className="flex flex-wrap gap-4 items-center justify-start">

        <div className="flex items-center gap-2 flex-grow max-w-[750px] bg-gray-50 border border-gray-200 rounded-md px-3 py-2 transition hover:bg-gray-100 focus-within:bg-white focus-within:border-blue-400 focus-within:shadow-md">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search Employees..."
            className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500"
          />
        </div>

        <button className="flex items-center gap-2 px-4 py-2 border border-blue-200 bg-blue-50 text-blue-700 rounded-md whitespace-nowrap hover:bg-blue-100 hover:shadow-sm transition">
          <Building className="w-4 h-4 text-blue-500" />
          Department
        </button>

        <button className="flex items-center gap-2 px-4 py-2 border border-green-200 bg-green-50 text-green-700 rounded-md whitespace-nowrap hover:bg-green-100 hover:shadow-sm transition">
          <MapPin className="w-4 h-4 text-green-500" />
          Location
        </button>

        <button className="flex items-center gap-2 px-4 py-2 border border-yellow-200 bg-yellow-50 text-yellow-800 rounded-md whitespace-nowrap hover:bg-yellow-100 hover:shadow-sm transition">
          <Settings className="w-4 h-4 text-yellow-600" />
          Skills
        </button>

        <button className="flex items-center gap-2 px-4 py-2 border border-purple-200 bg-purple-50 text-purple-700 rounded-md whitespace-nowrap hover:bg-purple-100 hover:shadow-sm transition">
          <BadgeCheck className="w-4 h-4 text-purple-600" />
          Status
        </button>
      </div>
    </div>
  );
}
