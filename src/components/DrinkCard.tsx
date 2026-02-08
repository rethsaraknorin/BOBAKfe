import Image from "next/image";

type DrinkCardProps = {
  name: string;
  image: string;
  price: number;
};

export default function DrinkCard({ name, image, price }: DrinkCardProps) {
  return (
    <div className="group rounded-3xl border border-black/5 bg-[var(--card)] p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-[var(--ink)]">{name}</h3>
          <p className="text-sm text-[var(--muted)]">Signature favorite</p>
        </div>
        <div className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-sm font-semibold text-[var(--accent-strong)]">
          ${price.toFixed(2)}
        </div>
      </div>
    </div>
  );
}
