import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-12">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="rounded-[32px] border border-black/5 bg-white p-10 shadow-sm">
          <Link
            href="/"
            className="text-2xl font-semibold text-[var(--accent-strong)]"
          >
            BOBAKfe
          </Link>
          <h1 className="mt-10 text-3xl font-semibold text-[var(--ink)]">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-[var(--muted)]">
            New here?{" "}
            <Link href="/sign-up" className="font-semibold text-[var(--accent)]">
              Create an account
            </Link>
            .
          </p>
          <form className="mt-8 grid gap-6">
            <label className="grid gap-2 text-sm font-semibold text-[var(--muted)]">
              Email
              <input
                type="email"
                placeholder="you@bobakfe.com"
                className="rounded-2xl border border-[var(--ring)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--ink)] focus:border-[var(--accent)] focus:outline-none"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-[var(--muted)]">
              Password
              <input
                type="password"
                placeholder="Enter your password"
                className="rounded-2xl border border-[var(--ring)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--ink)] focus:border-[var(--accent)] focus:outline-none"
              />
            </label>
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[var(--muted)]">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                Remember me
              </label>
              <button type="button" className="font-semibold text-[var(--accent)]">
                Forgot password?
              </button>
            </div>
            <button
              type="submit"
              className="rounded-full bg-[var(--accent-strong)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Sign in
            </button>
          </form>
          <div className="mt-8 text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            or continue with
          </div>
          <div className="mt-4 flex gap-3">
            {["Facebook", "Instagram", "X"].map((item) => (
              <button
                key={item}
                type="button"
                className="rounded-full border border-[var(--ring)] px-4 py-2 text-xs font-semibold text-[var(--muted)]"
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[32px] bg-[var(--accent-strong)] p-10 text-white">
          <div className="absolute -left-20 top-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="flex items-center justify-end text-xs text-white/80">
            Call us: +855 95 778 324
          </div>
          <div className="mt-10 space-y-6">
            <h2 className="text-3xl font-semibold">Sign in with BOBAKfe</h2>
            <p className="text-sm text-white/80">
              Save your favorites, collect sweet perks, and get first access to
              seasonal drops.
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Member perks
              </p>
              <ul className="mt-4 grid gap-3 text-sm text-white/80">
                <li>Free upgrades on your birthday week</li>
                <li>Early access to limited boba blends</li>
                <li>Priority invites to tasting events</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
