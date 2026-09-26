import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[75vh] items-center justify-center bg-[#090b0e] px-5">
      <div className="text-center">
        <p
          className="text-[100px] font-bold leading-none text-[#caff00] sm:text-[150px]"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          404
        </p>

        <h1
          className="mt-5 text-[36px] font-bold uppercase text-white sm:text-[48px]"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          Workout Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#9699a2]">
          The page or workout you&apos;re looking for doesn&apos;t exist.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex h-[44px] items-center gap-3 rounded-[4px] bg-[#caff00] px-6 text-[11px] font-extrabold uppercase text-black hover:bg-white"
        >
          <ArrowLeft size={15} />
          Back to Workouts
        </Link>
      </div>
    </section>
  );
}