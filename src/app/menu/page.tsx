import DrinkCard from "../../components/DrinkCard";
import { drinks } from "../../data/drinks";

const categories = ["Classics", "Iced", "Seasonal", "Tea Fusion", "Sparkling"];

export default function MenuPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-14">
      <section className="rounded-[32px] border border-black/5 bg-white p-10 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Menu
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-[var(--ink)] sm:text-5xl">
          Crafted drinks for every mood.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-[var(--muted)]">
          From lavender lattes to shaken espresso, each recipe balances
          sweetness, texture, and aroma. Ask our baristas for pairing tips.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <span
              key={cat}
              className="rounded-full border border-[var(--ring)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {drinks.map((drink) => (
          <DrinkCard
            key={drink.name}
            name={drink.name}
            image={drink.image}
            price={drink.price}
          />
        ))}
      </section>

      <section className="mt-16 rounded-[32px] border border-black/5 bg-[var(--accent-soft)] p-10">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--accent-strong)]">
              Need help choosing?
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Tell us your vibe and we will build your perfect flight.
            </p>
          </div>
          <button
            type="button"
            className="rounded-full bg-[var(--accent-strong)] px-5 py-2 text-sm font-semibold text-white"
          >
            Ask a barista
          </button>
        </div>
      </section>
    </main>
  );
}
