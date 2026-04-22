import { useState } from 'react'
import { X, Menu } from 'lucide-react'
import logo from '../assets/pastafasta-logo.jpg'
import heroPasta from '../assets/hero-pasta.jpg'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Franchise', href: '#franchise' },
  { label: 'Locations', href: '#locations' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-[60] w-full border-b border-white/10 bg-black/92 text-white backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-6 py-4 md:px-10 lg:px-16">
          <div />

          <div className="flex justify-center">
            <a href="#home">
              <img
                src={logo}
                alt="Pasta Fasta logo"
                className="w-14 rounded-xl md:w-16"
              />
            </a>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white transition hover:text-[#fab838] md:text-[12px]"
            >
              <span>Menu</span>
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 ${
          isOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="grid h-full grid-cols-1 md:grid-cols-[1.05fr_0.95fr]">
          <div className="relative hidden overflow-hidden bg-black md:block">
            <img
              src={heroPasta}
              alt="Pasta Fasta visual"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-center text-7xl font-black uppercase leading-[0.9] tracking-[-0.08em] text-white/90 lg:text-[8rem]">
              </h2>
            </div>

            <div className="absolute bottom-8 left-8">
              <img
                src={logo}
                alt="Pasta Fasta logo"
                className="w-20 rounded-2xl"
              />
            </div>
          </div>

          <div className="relative flex min-h-screen flex-col bg-[#f7f4ee] px-8 py-8 text-black md:px-16 lg:px-24">
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="text-black transition hover:text-[#fab838]"
                aria-label="Close menu"
              >
                <X className="h-10 w-10" />
              </button>
            </div>

            <div className="flex flex-1 items-center justify-start md:justify-center">
              <div className="w-full max-w-md">
                <nav className="flex flex-col gap-3 md:gap-4">
                  {links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl font-black leading-none tracking-[-0.04em] text-[#fab838] transition hover:translate-x-1 hover:text-black md:text-5xl lg:text-6xl"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                <div className="mt-14">
                  <a
                    href="#instagram"
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-bold uppercase tracking-[0.22em] text-[#fab838] transition hover:text-black"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 block md:hidden">
              <img
                src={logo}
                alt="Pasta Fasta logo"
                className="w-20 rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}