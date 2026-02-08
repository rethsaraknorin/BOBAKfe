import Link from "next/link";

export default function SignUpPage() {
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
            Create your account
          </h1>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Already have an account?{" "}
            <Link href="/sign-in" className="font-semibold text-[var(--accent)]">
              Sign in
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
              Username
              <input
                type="text"
                placeholder="Create a username"
                className="rounded-2xl border border-[var(--ring)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--ink)] focus:border-[var(--accent)] focus:outline-none"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-[var(--muted)]">
              Password
              <input
                type="password"
                placeholder="Create a password"
                className="rounded-2xl border border-[var(--ring)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--ink)] focus:border-[var(--accent)] focus:outline-none"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-[var(--muted)]">
              Confirm password
              <input
                type="password"
                placeholder="Confirm password"
                className="rounded-2xl border border-[var(--ring)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--ink)] focus:border-[var(--accent)] focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="rounded-full bg-[var(--accent-strong)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Create account
            </button>
          </form>
        </section>

        <section className="relative overflow-hidden rounded-[32px] bg-[var(--accent-strong)] p-10 text-white">
          <div className="absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="flex items-center justify-end text-xs text-white/80">
            Call us: +855 95 778 324
          </div>
          <div className="mt-10 space-y-6">
            <h2 className="text-3xl font-semibold">Join BOBAKfe today</h2>
            <p className="text-sm text-white/80">
              Collect points, unlock tastings, and personalize your favorites.
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                What you get
              </p>
              <ul className="mt-4 grid gap-3 text-sm text-white/80">
                <li>8th drink on us, every time</li>
                <li>Member-only seasonal flights</li>
                <li>Save your favorite recipes</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
