import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-14">
      <section className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            About us
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[var(--ink)] sm:text-5xl">
            A modern cafe with nostalgic roots.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
            BOBAKfe began as a dream to blend the ritual of coffee with the joy
            of bubble tea. We craft every drink with balance in mind: floral
            notes, creamy textures, and the kind of sweetness that lingers just
            enough.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
            Our space is designed to feel like a warm pause in the day. We host
            community tastings, collaborate with local bakers, and keep our
            playlist full of mellow, bright sounds.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { label: "Founded", value: "2019" },
              { label: "House-made syrups", value: "12" },
              { label: "Boba batches", value: "Daily" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-black/5 bg-white p-4"
              >
                <div className="text-2xl font-semibold text-[var(--accent-strong)]">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-8 top-10 hidden h-32 w-32 rounded-full bg-[var(--accent)]/15 blur-3xl lg:block" />
          <div className="overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-lg">
            <Image
              src="/img/aboutimg.webp"
              alt="BOBAKfe interior"
              width={640}
              height={640}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-2">
        {[
          {
            title: "Crafted with intention",
            copy: "We steep tea in small batches and whisk in fresh milk for a clean, smooth finish.",
          },
          {
            title: "Community-first",
            copy: "Local makers bring pastries, art pop-ups, and weekend playlists to our tables.",
          },
          {
            title: "Seasonal storytelling",
            copy: "Every season has a flavor story, inspired by markets, gardens, and travel.",
          },
          {
            title: "Sustainable sips",
            copy: "Reusable cups, compostable packaging, and sourcing with long-term partners.",
          },
        ].map((value) => (
          <div
            key={value.title}
            className="rounded-[28px] border border-black/5 bg-white p-8 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-[var(--ink)]">
              {value.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              {value.copy}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
