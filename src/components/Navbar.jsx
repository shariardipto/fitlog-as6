"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWorkout } from "@/context/WorkoutContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = useWorkout();

  const workoutActive =
    pathname === "/" || pathname.startsWith("/workout/");

  const planActive = pathname === "/my-plan";

  return (
    <header className="border-b border-[#1e2127] bg-[#090b0e]">
      <div className="mx-auto flex h-[70px] max-w-[1440px] items-center justify-between px-5 sm:px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="FitLog"
            width={110}
            height={40}
            priority
            className="h-[32px] w-auto object-contain"
          />
        <span
            className="text-[18px] font-bold uppercase tracking-[0.03em] text-white"
            style={{ fontFamily: "var(--font-oswald)" }}
        >
            FITLOG
        </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          <Link
            href="/"
            className={`rounded-full px-4 py-2 text-[12px] font-semibold ${
              workoutActive
                ? "bg-[#17220b] text-[#caff00]"
                : "text-[#9a9ca3] hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-4 py-2 text-[12px] font-semibold ${
              planActive
                ? "bg-[#17220b] text-[#caff00]"
                : "text-[#9a9ca3] hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        {/* Counters */}
        <div className="flex items-center gap-6 text-[11px]">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-[#d8d8d8]"
          >
            <span>Plan</span>

            <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#caff00] px-1 text-[10px] font-bold text-black">
              {plan.length}
            </span>
          </Link>

          <Link
            href="/saved"
            className="flex items-center gap-2 text-[#9a9ca3]"
          >
            <span>Saved</span>

            <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full border border-[#4a4d55] px-1 text-[10px] font-bold text-[#b8bac0]">
              {saved.length}
            </span>
          </Link>
        </div>

      </div>
    </header>
  );
}