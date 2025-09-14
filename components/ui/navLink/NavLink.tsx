"use client";

import Link from "next/link";
import React from "react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  text: string;
  iconName?: string;
  iconSize?: number;
  iconClassName?: string;
}

function NavLink({ href, text, iconName, iconSize = 16, iconClassName }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const linkClassName = `${isActive ? "text-white" : "hover:text-white"} text-lg inline-flex items-center gap-2 md:mx-4`;
  const IconComponent = iconName
    ? (Icons[iconName as keyof typeof Icons] as unknown as LucideIcon | undefined)
    : undefined;

  return (
    <Link className={linkClassName} href={href} aria-current={isActive ? "page" : undefined}>
      {IconComponent ? <IconComponent size={iconSize} className={iconClassName} /> : null}
      <span>{text}</span>
    </Link>
  );
}

export default NavLink;
