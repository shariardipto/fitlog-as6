import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#090b0e] px-5 pb-10 pt-[42px] sm:px-6">
      <div className="mx-auto max-w-[1440px]">

        <div className="relative overflow-hidden rounded-[16px] border border-[#252932] bg-[#16191f]">

          <div className="grid min-h-[388px] grid-cols-1 lg:grid-cols-[1.35fr_0.65fr]">

            {/* LEFT */}
            <div className="flex flex-col justify-center px-8 py-12 sm:px-12 lg:px-[50px]">

              {/* Eyebrow */}
              <p className="mb-[22px] text-[11px] font-bold uppercase tracking-[0.06em] text-[#caff00]">
                WORKOUT LIBRARY
              </p>

              {/* Heading */}
              <h1
                className="max-w-[570px] text-[48px] font-bold uppercase leading-[0.94] tracking-[-0.02em] text-white sm:text-[54px] lg:text-[58px]"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                TRAIN WITH INTENT. LOG
                <br />
                EVERY SET.
              </h1>

              {/* Subtitle */}
              <p className="mt-[18px] max-w-[470px] text-[15px] leading-[1.45] text-[#9b9da5]">
                FitLog is a dark, no-nonsense gym companion: pick a lift,
                lock it into today&apos;s plan, and watch the week&apos;s work
                add up.
              </p>

              {/* CTA */}
              <div className="mt-[24px]">
                <a
                  href="#library"
                  className="inline-flex h-[36px] items-center gap-4 rounded-[4px] bg-[#caff00] px-[20px] text-[11px] font-extrabold uppercase text-black hover:bg-white"
                >
                  Browse Workouts

                  <ArrowDown size={15} strokeWidth={2.5} />
                </a>
              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex min-h-[330px] items-center justify-center lg:min-h-[388px]">

              <Image
                src="/banner.png"
                alt="FitLog workout"
                width={430}
                height={430}
                priority
                className="h-auto w-[72%] max-w-[300px] object-contain lg:max-w-[320px]"
              />

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}