import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Layout({
  children,
  blog,
}: {
  children: React.ReactNode;
  blog: React.ReactNode;
}) {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            <MenuIcon />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/dashboard/blog">Blog</Link>
            </li>
            <li>
              <Link href="/dashboard/project">Project</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>{children}</div>
      <div>{blog}</div>
    </div>
  );
}
