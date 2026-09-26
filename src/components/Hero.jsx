import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="overflow-hidden border-b border-[#252525]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:min-h-[620px] lg:grid-cols-2">

        {/* Left Side */}
        <div className="flex flex-col justify-center px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

          <div className="mb-5 flex items-center gap-3">
            <div className="h-[2px] w-8 bg-[#ccff00]" />

            <p className="text-xs font-bold tracking-[0.25em] text-[#ccff00]">
              WORKOUT LIBRARY
            </p>
          </div>

          <h1
            className="text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Train With Intent. Log
            <br />

            <span className="text-[#ccff00]">
            Every Set.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-neutral-400 sm:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today&apos;s plan, and watch the week&apos;s
            work add up.
          </p>

          <div className="mt-9">
            <a
              href="#library"
              className="inline-flex items-center gap-3 bg-[#ccff00] px-6 py-4 text-sm font-extrabold uppercase tracking-wide text-black hover:bg-white"
            >
              Browse Workouts

              <ArrowDown size={18} />
            </a>
          </div>

        </div>

{/* Right Side */}
        <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden lg:min-h-[560px]">

        <Image
            src="/banner.png"
            alt="FitLog workout"
            width={600}
            height={600}
            priority
            className="h-auto w-[65%] max-w-[430px] object-contain"
        />

        <div className="absolute bottom-6 right-6 border border-white/20 bg-black/70 px-4 py-3">
            <p className="text-xs font-bold tracking-[0.2em] text-[#ccff00]">
            TRAIN • TRACK • REPEAT
            </p>
        </div>

</div>

      </div>
    </section>
  );
}