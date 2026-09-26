import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#252525] bg-[#060606]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-8 sm:px-6 md:flex-row lg:px-8">

        <div className="flex items-center gap-2">

        <Image
        src="/logo.png"
        alt="FitLog Logo"
        width={36}
        height={36}
        className="h-9 w-auto object-contain"
        />

          <span
            className="text-lg font-bold tracking-wide"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            FITLOG
          </span>

        </div>

        <p className="text-center text-xs text-neutral-500 md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
}