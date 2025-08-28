import NavLink from "@/components/ui/navLink/NavLink";
import React from "react";

function Header() {
  return (
    <div className="bg-gray-600/25 p-4 border-b-1 border-gray-600">
      <nav className="flex gap-5 justify-center text-gray-400">
        <NavLink iconName="House" href="/" text="Home"></NavLink>
        <NavLink iconName="BookUser" href="/about" text="About"></NavLink>
        <NavLink
          iconName="FolderGit2"
          href="/projects"
          text="Projects"
        ></NavLink>
        <NavLink
          iconName="ContactRound"
          href="/contact"
          text="Contact"
        ></NavLink>
      </nav>
    </div>
  );
}

export default Header;
