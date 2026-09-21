import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import Logo from '@/assets/logo.png'


const Footer = () => {
  return (
    <footer className="bg-[#001b2e] text-white">
      <div className="container mx-auto px-6 sm:px-8">

        {/* Main Footer */}
        <div className="flex flex-col gap-6 py-6 sm:flex-row sm:items-center sm:justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex w-fit items-center gap-2 transition-opacity hover:opacity-80"
          >
            <Image
              src={Logo}
              alt="Hero.io"
              width={28}
              height={28}
              className="object-contain"
            />

            <span className="text-sm font-semibold tracking-wide">
              HERO.IO
            </span>
          </Link>

          {/* Social Links */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold text-white">
              Social Links
            </span>

            <div className="flex items-center gap-3">

              <Link
                href="#"
                aria-label="X"
                className="flex h-5 w-5 items-center justify-center rounded-full text-gray-300 transition hover:text-white"
              >
                <FaX size={14} strokeWidth={2.5} />
              </Link>

              <Link
                href="#"
                aria-label="LinkedIn"
                className="flex h-5 w-5 items-center justify-center rounded-full text-gray-300 transition hover:text-white"
              >
                <FaLinkedin size={14} strokeWidth={2.5} />
              </Link>

              <Link
                href="#"
                aria-label="Facebook"
                className="flex h-5 w-5 items-center justify-center rounded-full text-gray-300 transition hover:text-white"
              >
                <FaFacebook size={14} strokeWidth={2.5} />
              </Link>

            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10" />

        {/* Copyright */}
        <div className="flex items-center justify-center py-5">
          <p className="text-center text-xs text-gray-300">
            Copyright © 2026 - All right reserved
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;