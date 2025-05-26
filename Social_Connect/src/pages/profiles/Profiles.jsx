import React from "react";
import SearchFilterBar from "./components/SearchFilterBar";
import ProfileCard from "./components/ProfileCard";

export default function Profiles() {
  return (
    <div className="p-4 space-y-6">
      <SearchFilterBar />

      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </div>
  );
}
