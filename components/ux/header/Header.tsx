import NavLink from "@/components/ui/navLink/NavLink";
import React from "react";

function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-600/25 p-4 border-b-1 border-gray-600 backdrop-blur-sm">
      <nav className="flex justify-around text-gray-400 w-5xl m-auto">
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
