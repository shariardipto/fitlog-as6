"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  const workoutActive =
    pathname === "/" || pathname.startsWith("/workout/");

  const planActive = pathname === "/my-plan";

  return (
    <header className="sticky top-0 z-50 border-b border-[#252525] bg-[#090909]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
        <Image
            src="/logo.png"
            alt="FitLog Logo"
            width={40}
            height={40}
            className="h-10 w-auto object-contain"
        />

        <span
            className="text-xl font-bold tracking-wider"
            style={{ fontFamily: "var(--font-oswald)" }}
        >
            FITLOG
        </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className={`text-sm font-semibold uppercase tracking-wider ${
              workoutActive
                ? "text-[#ccff00]"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`text-sm font-semibold uppercase tracking-wider ${
              planActive
                ? "text-[#ccff00]"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        {/* Counters */}
        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="rounded-full bg-[#ccff00] px-3 py-1.5 text-xs font-bold uppercase text-black"
          >
            Plan 0
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-neutral-600 px-3 py-1.5 text-xs font-bold uppercase text-white hover:border-[#ccff00]"
          >
            Saved 0
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="flex border-t border-[#202020] md:hidden">
        <Link
          href="/"
          className={`flex-1 py-3 text-center text-xs font-bold uppercase ${
            workoutActive
              ? "bg-[#ccff00] text-black"
              : "text-neutral-400"
          }`}
        >
          Workout
        </Link>

        <Link
          href="/my-plan"
          className={`flex-1 py-3 text-center text-xs font-bold uppercase ${
            planActive
              ? "bg-[#ccff00] text-black"
              : "text-neutral-400"
          }`}
        >
          My Plan
        </Link>
      </nav>
    </header>
  );
}