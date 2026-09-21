// components/Navbar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="*:border-none relative z-100">

    <nav className="w-full bg-white/50 backdrop-blur-md border-b shadow-md fixed">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="navbar items-center h-16">
          {/* LOGO */}
          <div className="flex items-center space-x-2 navbar-start">
            <div className="relative h-6 w-6 flex items-center justify-center">
              <Image src={Logo} alt="Logo" className="w-40" />
            </div>
            {/* Hero Text */}
            <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              HERO.IO
            </span>
          </div>

          {/* Middle Links */}
          <div className="hidden md:flex gap-8 navbar-center">
            <Link
              href="/"
              className="font-bold text-black hover:text-gray-700 transition"
            >
              Home
            </Link>
            {/* BLACK TEXT */}
            <Link
              href="/apps"
              className="font-bold text-black hover:text-gray-700 transition"
            >
              Apps
            </Link>
            <Link
              href="/installation"
              className="font-bold text-black hover:text-gray-700 transition"
            >
              Installation
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4 navbar-end">
            <a
              href="#"
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-md hover:opacity-90 transition"
            >
              <span className="font-semibold">Contribute</span>
            </a>
            {/* mobile menu*/}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-100 mt-3 w-52 p-2 shadow-md bg-violet-600 backdrop-blur-sm"
              >
                <li>
                  <Link
                    href="/"
                    className="font-bold text-white transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/apps"
                    className="font-bold text-white transition"
                  >
                    Apps
                  </Link>
                </li>
                <li>
                  <Link
                    href="/installation"
                    className="font-bold text-white transition"
                  >
                    Installation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div className="h-16  border-none">

    </div>
    </div>
  );
}
