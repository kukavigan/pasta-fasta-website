import logo from '../assets/pastafasta-logo.jpg'

export default function Footer() {
  return (
    <footer className="bg-black px-6 py-8 text-white md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-6 md:grid-cols-3">
        <div className="flex items-center justify-center gap-4 md:justify-start">
          <img
            src={logo}
            alt="Pasta Fasta logo"
            className="w-12 rounded-xl"
          />
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em]">
              Pasta Fasta
            </p>
          </div>
        </div>

        <div className="text-center text-xs uppercase tracking-[0.22em] text-white/55">
          © 2026 Pasta Fasta
        </div>

        <div className="flex justify-center md:justify-end">
          <a
            href="https://www.instagram.com/pastafastakosova?igsh=Z2EydGppY2kwYjY="
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/70 transition hover:text-[#fab838]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  )
}