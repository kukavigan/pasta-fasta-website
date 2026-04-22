import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import locationsImage from '../assets/locations-pasta.jpg'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function LocationsSection() {
  const rootRef = useRef<HTMLElement | null>(null)
  const labelRef = useRef<HTMLParagraphElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const textRef = useRef<HTMLParagraphElement | null>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)

  useGSAP(
    () => {
      const textItems = [
        labelRef.current,
        titleRef.current,
        textRef.current,
      ].filter(Boolean) as HTMLElement[]

      gsap.set(textItems, {
        opacity: 0,
        y: 40,
      })

      if (imageRef.current) {
        gsap.set(imageRef.current, {
          scale: 1.06,
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

      tl.to(labelRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
      })
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          '-=0.2'
        )
        .to(
          textRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          '-=0.45'
        )

      if (imageRef.current) {
        gsap.to(imageRef.current, {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      }
    },
    { scope: rootRef }
  )

  return (
    <section
      ref={rootRef}
      id="locations"
      className="relative mt-10 min-h-screen overflow-hidden bg-white"
    >
      <div className="absolute inset-0">
        <img
          ref={imageRef}
          src={locationsImage}
          alt="Pasta Fasta locations"
          className="h-full w-full object-contain object-center"
        />
      </div>

      <div className="absolute inset-0 bg-white/18" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.18),rgba(255,255,255,0.08),rgba(255,255,255,0.18))]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center md:px-10 lg:px-16">
        <div className="max-w-5xl">
          <p
            ref={labelRef}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#fffff] md:text-sm"
          >
            Locations
          </p>

          <h2
            ref={titleRef}
            className="text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-black sm:text-5xl md:text-6xl lg:text-[4.5rem]"
          >
            Find Pasta Fasta
          </h2>

          <p
            ref={textRef}
            className="mt-6 mx-auto max-w-2xl text-base leading-8 text-black/72 md:text-lg md:leading-9"
          >
            Pasta Fasta continues to grow across Kosovo.
          </p>
        </div>
      </div>
    </section>
  )
}