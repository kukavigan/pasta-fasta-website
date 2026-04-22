import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import contactBg from '../assets/pasta-contactus.png'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function ContactSection() {
  const rootRef = useRef<HTMLElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const detailsRef = useRef<HTMLDivElement | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)

  useGSAP(
    () => {
      if (titleRef.current) {
        gsap.set(titleRef.current, {
          opacity: 0,
          y: 40,
        })
      }

      if (detailsRef.current) {
        gsap.set(detailsRef.current, {
          opacity: 0,
          y: 24,
        })
      }

      if (formRef.current) {
        gsap.set(formRef.current, {
          opacity: 0,
          y: 40,
        })
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
        defaults: {
          ease: 'power4.out',
        },
      })

      if (titleRef.current) {
        tl.to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
        })
      }

      if (detailsRef.current) {
        tl.to(
          detailsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          '-=0.45'
        )
      }

      if (formRef.current) {
        tl.to(
          formRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
          },
          '-=0.35'
        )
      }
    },
    { scope: rootRef }
  )

  return (
    <section
      ref={rootRef}
      id="contact"
      className="relative min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden bg-[#1d2412]">
        <img
          src={contactBg}
          alt="Contact background"
          className="h-full w-full object-contain object-center blur-[2px] scale-125"
        />
      </div>

      <div className="absolute inset-0 bg-black/28" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.22),rgba(0,0,0,0.12),rgba(0,0,0,0.28))]" />

      <div className="relative z-10 min-h-screen px-4 py-6 text-white md:px-8 md:py-8 lg:px-12 lg:py-10">
        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col justify-start">
            <h2
              ref={titleRef}
              className="text-6xl font-light leading-[0.92] tracking-[-0.05em] text-white sm:text-7xl md:text-8xl lg:text-[6.5rem]"
            >
              Contact us
            </h2>

            <div
              ref={detailsRef}
              className="mt-10 grid gap-8 text-sm uppercase tracking-[0.08em] text-white/90 md:grid-cols-2 md:text-base"
            >
              <div>
                <p className="text-white/70">Email</p>
                <p className="mt-2 font-medium">info@pastafasta.com</p>
              </div>

              <div>
                <p className="text-white/70">Phone</p>
                <p className="mt-2 font-medium">+383 44 000 000</p>
              </div>

              <div className="md:col-span-2">
                <p className="text-white/70">Address</p>
                <p className="mt-2 font-medium">Prishtinë, Kosovo</p>
              </div>
            </div>
          </div>

          <div className="flex items-end justify-center lg:justify-end">
            <form
              ref={formRef}
              className="mb-8 w-full max-w-3xl space-y-10 lg:mb-16"
            >
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label className="mb-3 block text-sm uppercase tracking-[0.18em] text-white/80">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full border-0 border-b border-white/35 bg-transparent px-0 py-3 text-white outline-none placeholder:text-white/40 focus:border-white"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm uppercase tracking-[0.18em] text-white/80">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full border-0 border-b border-white/35 bg-transparent px-0 py-3 text-white outline-none placeholder:text-white/40 focus:border-white"
                  />
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm uppercase tracking-[0.18em] text-white/80">
                  E-mail
                </label>
                <input
                  type="email"
                  className="w-full border-0 border-b border-white/35 bg-transparent px-0 py-3 text-white outline-none placeholder:text-white/40 focus:border-white"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm uppercase tracking-[0.18em] text-white/80">
                  How we can help
                </label>
                <textarea
                  rows={3}
                  className="w-full resize-none border-0 border-b border-white/35 bg-transparent px-0 py-3 text-white outline-none placeholder:text-white/40 focus:border-white"
                />
              </div>

              <button
                type="submit"
                className="rounded-sm bg-white px-6 py-3 text-sm font-medium uppercase tracking-[0.16em] text-black transition hover:bg-[#fab838]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}