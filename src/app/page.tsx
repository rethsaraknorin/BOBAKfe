import Image from "next/image";
import Link from "next/link";
import DrinkCard from "../components/DrinkCard";
import { drinks } from "../data/drinks";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-14">
      <section className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center rounded-full bg-[var(--accent-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
            Slow brew. Bright mood.
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
            Start your day with handcrafted boba, coffee, and calm.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
            BOBAKfe is your cozy corner for creamy lattes, floral blends, and
            small-batch treats. Every cup is crafted with thoughtful flavors and
            a warm welcome.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/menu"
              className="rounded-full bg-[var(--accent-strong)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Explore the menu
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-[var(--ring)] px-6 py-3 text-sm font-semibold text-[var(--accent-strong)] transition hover:bg-white"
            >
              Our story
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 text-left sm:grid-cols-3">
            {[
              { label: "Locations", value: "3" },
              { label: "Signature drinks", value: "18+" },
              { label: "Community events", value: "Weekly" },
            ].map((stat) => (
              <div key={stat.label}>
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
          <div className="absolute -right-6 top-6 hidden h-32 w-32 rounded-full bg-[var(--gold)]/25 blur-3xl lg:block" />
          <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white shadow-lg">
            <Image
              src="/img/heroSection.webp"
              alt="BOBAKfe signature drink"
              width={720}
              height={720}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-4 py-3 text-sm shadow-md">
            <p className="font-semibold text-[var(--accent-strong)]">Open daily</p>
            <p className="text-xs text-[var(--muted)]">7:00 AM - 9:00 PM</p>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
              Best drink sellers
            </h2>
            <p className="mt-3 max-w-xl text-base text-[var(--muted)]">
              Loved by our community for their balance of floral, creamy, and
              refreshing notes.
            </p>
          </div>
          <Link
            href="/menu"
            className="rounded-full border border-[var(--ring)] px-5 py-2 text-sm font-semibold text-[var(--accent-strong)] transition hover:bg-white"
          >
            See full menu
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {drinks.slice(0, 3).map((drink) => (
            <DrinkCard
              key={drink.name}
              name={drink.name}
              image={drink.image}
              price={drink.price}
            />
          ))}
        </div>
      </section>

      <section className="mt-24 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] border border-black/5 bg-white p-10 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Our story
          </p>
          <h3 className="mt-4 text-3xl font-semibold text-[var(--ink)]">
            Crafted to slow down the day.
          </h3>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
            From Phnom Penh to your neighborhood, BOBAKfe blends modern cafe
            culture with the nostalgia of bubble tea. We obsess over texture,
            pairing, and the kind of ambience that makes time feel unhurried.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Small-batch syrups",
              "Hand-shaken boba",
              "Seasonal tea flights",
              "Local pastry partners",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-[var(--accent-soft)] px-4 py-2 text-xs font-semibold text-[var(--accent-strong)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div
          id="member-card"
          className="relative overflow-hidden rounded-[32px] border border-black/5 bg-[var(--accent-strong)] p-10 text-white shadow-sm"
        >
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            Member card
          </p>
          <h3 className="mt-4 text-3xl font-semibold">
            Sips, perks, and every 8th drink on us.
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            Earn points, unlock seasonal tastings, and get early access to
            limited boba releases. Your card lives in our app or on a classic
            stamp passport.
          </p>
          <Link
            href="/sign-up"
            className="mt-6 inline-flex w-fit items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-[var(--accent-strong)]"
          >
            Join the club
          </Link>
        </div>
      </section>
    </main>
  );
}
