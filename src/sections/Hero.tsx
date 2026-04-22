import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import leftImage from '../assets/hero-left.jpg'
import heroVideo from '../assets/hero-video.mp4'
import rightImage from '../assets/hero-right.jpg'

gsap.registerPlugin(useGSAP)

export default function Hero() {
  const rootRef = useRef<HTMLElement | null>(null)

  const leftRef = useRef<HTMLDivElement | null>(null)
  const middleRef = useRef<HTMLDivElement | null>(null)
  const rightRef = useRef<HTMLDivElement | null>(null)

  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  useGSAP(
    () => {
      if (leftRef.current) {
        gsap.set(leftRef.current, {
          opacity: 0,
          x: -80,
          scale: 1.04,
        })
      }

      if (middleRef.current) {
        gsap.set(middleRef.current, {
          opacity: 0,
          y: 70,
          scale: 0.96,
        })
      }

      if (rightRef.current) {
        gsap.set(rightRef.current, {
          opacity: 0,
          x: 80,
          scale: 1.04,
        })
      }

      const middleTextItems = [titleRef.current, buttonRef.current].filter(
        Boolean
      ) as HTMLElement[]

      gsap.set(middleTextItems, {
        opacity: 0,
        y: 26,
      })

      const tl = gsap.timeline({
        defaults: { ease: 'power4.out' },
      })

      if (leftRef.current) {
        tl.to(leftRef.current, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
        })
      }

      if (middleRef.current) {
        tl.to(
          middleRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
          },
          '-=0.72'
        )
      }

      if (rightRef.current) {
        tl.to(
          rightRef.current,
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
          },
          '-=0.72'
        )
      }

      if (titleRef.current) {
        tl.to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          '-=0.3'
        )
      }

      if (buttonRef.current) {
        tl.to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
          },
          '-=0.45'
        )
      }

      if (leftRef.current) {
        gsap.to(leftRef.current, {
          y: -10,
          duration: 3.4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }

      if (rightRef.current) {
        gsap.to(rightRef.current, {
          y: -10,
          duration: 3.6,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
    },
    { scope: rootRef }
  )

  return (
    <section
      ref={rootRef}
      id="home"
      className="bg-[#f7f4ee] px-4 pb-4 pt-4 md:px-6 md:pb-6"
    >
      <div className="grid h-[calc(100vh-105px)] grid-cols-1 gap-3 md:grid-cols-[0.9fr_1.2fr_0.9fr]">
        <div
          ref={leftRef}
          className="relative overflow-hidden rounded-[24px] bg-white"
        >
          <img
            src={leftImage}
            alt="Pasta Fasta left visual"
            className="h-full w-full object-cover"
          />
        </div>

        <div
          ref={middleRef}
          className="relative overflow-hidden rounded-[24px] bg-black"
        >
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/28" />

          <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white md:p-8 lg:p-10">
            <h1
              ref={titleRef}
              className="text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-5xl md:text-6xl lg:text-[5.5rem]"
            >
              PASTA
              <br />
              FASTA
            </h1>

            <button
              ref={buttonRef}
              className="mt-6 rounded-full bg-[#fab838] px-7 py-3 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:scale-[1.03] hover:bg-[#f3b12c]"
            >
              Explore Products
            </button>
          </div>
        </div>

        <div
          ref={rightRef}
          className="relative overflow-hidden rounded-[24px] bg-white"
        >
          <img
            src={rightImage}
            alt="Pasta Fasta right visual"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}