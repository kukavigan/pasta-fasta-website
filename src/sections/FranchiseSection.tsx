import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function FranchiseSection() {
  const rootRef = useRef<HTMLElement | null>(null)
  const leftRef = useRef<HTMLDivElement | null>(null)
  const rightRef = useRef<HTMLDivElement | null>(null)
  const itemRefs = useRef<HTMLDivElement[]>([])

  useGSAP(
    () => {
      if (leftRef.current) {
        gsap.set(leftRef.current, {
          opacity: 0,
          x: -50,
        })
      }

      if (rightRef.current) {
        gsap.set(rightRef.current, {
          opacity: 0,
          x: 50,
        })
      }

      gsap.set(itemRefs.current, {
        opacity: 0,
        y: 30,
      })

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

      if (leftRef.current) {
        tl.to(leftRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.9,
        })
      }

      if (rightRef.current) {
        tl.to(
          rightRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
          },
          '-=0.65'
        )
      }

      tl.to(
        itemRefs.current,
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.6,
        },
        '-=0.5'
      )
    },
    { scope: rootRef }
  )

  const setItemRef = (el: HTMLDivElement | null) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el)
    }
  }

  return (
    <section
      ref={rootRef}
      id="franchise"
      className="bg-white px-4 py-16 md:px-6 md:py-24"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid lg:grid-cols-2">
          <div
            ref={leftRef}
            className="flex items-end border-b border-black/10 px-2 py-12 md:px-4 md:py-20 lg:min-h-[620px] lg:border-b-0 lg:border-r lg:py-12"
          >
            <div className="max-w-3xl">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-black/45 md:text-sm">
                Franchise
              </p>

              <h2 className="text-4xl font-medium leading-[1.02] tracking-[-0.05em] text-black sm:text-5xl md:text-6xl lg:text-[3.5rem]">
                Pasta Fasta is opening{' '}
                <span className="bg-[#fab838] px-3 py-0.1 leading-tight text-white">
                    opportunities for partners
                </span>{' '}
                 who want to grow with a premium, modern, and memorable pasta brand.
              </h2>

              
            </div>
          </div>

          <div ref={rightRef} className="grid">
            <div
              ref={setItemRef}
              className="border-b border-black/10 px-2 py-10 md:px-4 md:py-12"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-black/45">
                Model
              </p>

              <div className="text-5xl font-medium tracking-[-0.05em] text-black md:text-6xl">
                01
              </div>

              <p className="mt-3 max-w-xl text-base leading-8 text-black/75 md:text-lg">
                A strong business concept with a clear brand identity and scalable
                visual presence.
              </p>
            </div>

            <div
              ref={setItemRef}
              className="border-b border-black/10 px-2 py-10 md:px-4 md:py-12"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-black/45">
                Opportunity
              </p>

              <div className="text-5xl font-medium tracking-[-0.05em] text-black md:text-6xl">
                02
              </div>

              <p className="mt-3 max-w-xl text-base leading-8 text-black/75 md:text-lg">
                Pasta Fasta is designed for expansion through franchise partners who
                want to open and grow new locations.
              </p>
            </div>

            <div
              ref={setItemRef}
              className="px-2 py-10 md:px-4 md:py-12"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-black/45">
                Guide
              </p>

              <div className="text-5xl font-medium tracking-[-0.05em] text-black md:text-6xl">
                03
              </div>

              <p className="mt-3 max-w-xl text-base leading-8 text-black/75 md:text-lg">
                A downloadable PDF guide will include rules, requirements, and the
                main structure for future franchise partners.
              </p>

              <button className="mt-8 rounded-full bg-black px-7 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:scale-[1.03] hover:bg-[#111111]">
                Franchise PDF Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}