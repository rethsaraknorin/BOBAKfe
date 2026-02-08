import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/#member-card", label: "Member Card" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight text-[var(--accent-strong)]"
        >
          BOBAKfe
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--accent)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/sign-in"
            className="rounded-full border border-[var(--ring)] px-4 py-2 text-sm font-semibold text-[var(--accent-strong)] transition hover:border-[var(--accent-strong)] hover:bg-[var(--accent-soft)]"
          >
            Sign in
          </Link>
          <Link
            href="/sign-up"
            className="rounded-full bg-[var(--accent-strong)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Join now
          </Link>
        </div>
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-[var(--accent-strong)]">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 w-48 rounded-2xl border border-black/10 bg-white p-3 shadow-lg">
            <div className="flex flex-col gap-3 text-sm">
              {navLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link href="/sign-in" className="pt-2 text-[var(--accent)]">
                Sign in
              </Link>
              <Link href="/sign-up" className="text-[var(--accent)]">
                Join now
              </Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
