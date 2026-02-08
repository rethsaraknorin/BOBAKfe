import Link from "next/link";

const socialLinks = [
  { href: "https://web.facebook.com/bobaaa13", label: "Facebook" },
  { href: "https://www.instagram.com/_tulip_sunset_/", label: "Instagram" },
  { href: "https://x.com/gnehc_13", label: "X" },
  { href: "https://open.spotify.com/user/qiep1p6577qf9vlo2l54wryor", label: "Spotify" },
];

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-black/5 bg-[#121b18] text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-12">
        <div className="flex flex-wrap gap-12">
          <div className="min-w-[220px] flex-1">
            <Link href="/" className="text-3xl font-semibold tracking-tight">
              BOBAKfe
            </Link>
            <p className="mt-4 text-sm text-white/70">
              Crafted daily with slow pours, creamy boba, and a cozy corner made
              for your best moments.
            </p>
          </div>
          <div className="grid flex-[1.5] grid-cols-2 gap-8 md:grid-cols-3">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-white/70">
                About
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li>
                  <Link href="/about" className="hover:text-white">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/menu" className="hover:text-white">
                    Stories & News
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-white/70">
                Careers
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li>
                  <a href="#" className="hover:text-white">
                    Culture & Values
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Achievement Plan
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-white/70">
                Order
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li>
                  <a href="#" className="hover:text-white">
                    Order on the App
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Order on the Web
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Delivery
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
          <div className="flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-white/60">
          <div className="flex items-center gap-4">
            {socialLinks.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-white">
              Privacy Notice
            </a>
            <a href="#" className="hover:text-white">
              Consumer Health Privacy Notice
            </a>
            <a href="#" className="hover:text-white">
              Terms of Use
            </a>
          </div>
          <div className="text-white/40">
            (c) 2025 BOBAKfe Company. Design by Norin.
          </div>
        </div>
      </div>
    </footer>
  );
}
