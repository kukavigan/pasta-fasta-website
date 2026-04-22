import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import logo from '../assets/pastafasta-logo.jpg'

gsap.registerPlugin(useGSAP)

const pastaPieces = Array.from({ length: 26 }, (_, i) => ({
  id: i,
  type: ['penne', 'rigatoni', 'fusilli', 'farfalle', 'macaroni'][i % 5],
  left: Math.random() * 100,
  delay: Math.random() * 1.8,
  duration: 1.8 + Math.random() * 2,
  rotate: Math.random() * 360,
  scale: 0.7 + Math.random() * 0.9,
}))

const topLetters = 'PASTA'.split('')
const bottomLetters = 'FASTA'.split('')

function PastaShape({ type }: { type: string }) {
  if (type === 'penne') {
    return <div className="h-12 w-4 rounded-sm bg-[#fab838]" />
  }

  if (type === 'rigatoni') {
    return (
      <div className="h-10 w-6 rounded-md border-[3px] border-[#fab838] bg-transparent" />
    )
  }

  if (type === 'macaroni') {
    return (
      <div className="h-8 w-8 rounded-full border-[6px] border-[#fab838] border-r-transparent border-b-transparent rotate-45" />
    )
  }

  if (type === 'fusilli') {
    return (
      <div className="relative h-12 w-5">
        <div className="absolute inset-0 rounded-full bg-[#fab838]" />
        <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-black/15" />
        <div className="absolute inset-0 rotate-12 rounded-full border-y-2 border-black/10" />
        <div className="absolute inset-0 -rotate-12 rounded-full border-y-2 border-black/10" />
      </div>
    )
  }

  return (
    <div className="relative h-10 w-10">
      <div className="absolute left-0 top-0 h-10 w-5 rounded-l-[999px] bg-[#fab838]" />
      <div className="absolute right-0 top-0 h-10 w-5 rounded-r-[999px] bg-[#fab838]" />
      <div className="absolute left-1/2 top-1/2 h-4 w-2 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-black/15" />
    </div>
  )
}

type LoaderProps = {
  onComplete: () => void
}

export default function Loader({ onComplete }: LoaderProps) {
  const root = useRef<HTMLDivElement | null>(null)
  const rainWrapRef = useRef<HTMLDivElement | null>(null)
  const piecesRef = useRef<HTMLDivElement[]>([])
  const logoWrapRef = useRef<HTMLDivElement | null>(null)
  const topLetterRefs = useRef<HTMLSpanElement[]>([])
  const bottomLetterRefs = useRef<HTMLSpanElement[]>([])
  const subtitleRef = useRef<HTMLParagraphElement | null>(null)
  const flashRef = useRef<HTMLDivElement | null>(null)

  useGSAP(
    () => {
      gsap.set(piecesRef.current, { y: -160, opacity: 0 })
      gsap.set(logoWrapRef.current, { opacity: 0, scale: 0.8, y: 40, rotate: -6 })
      gsap.set(topLetterRefs.current, { opacity: 0, y: 120, scale: 0.82, rotateX: 40 })
      gsap.set(bottomLetterRefs.current, { opacity: 0, y: 120, scale: 0.82, rotateX: 40 })
      gsap.set(subtitleRef.current, { opacity: 0, y: 24 })
      gsap.set(flashRef.current, { opacity: 0, scale: 0.8 })

      piecesRef.current.forEach((piece, index) => {
        const config = pastaPieces[index]

        gsap.to(piece, {
          y: '125vh',
          opacity: 1,
          rotation: config.rotate,
          duration: config.duration,
          delay: config.delay,
          repeat: -1,
          ease: 'none',
        })
      })

      const tl = gsap.timeline({
        defaults: { ease: 'power4.out' },
      })

      tl.from(rainWrapRef.current, {
        opacity: 0,
        duration: 0.4,
      })
        .to(
          logoWrapRef.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotate: 0,
            duration: 1,
          },
          0.3
        )
        .to({}, { duration: 0.8 })
        .to(logoWrapRef.current, {
          opacity: 0,
          scale: 1.8,
          y: -120,
          rotate: 10,
          duration: 0.9,
          ease: 'power4.in',
        })
        .to(
          flashRef.current,
          {
            opacity: 0.2,
            scale: 1.4,
            duration: 0.18,
            ease: 'power2.out',
          },
          '-=0.15'
        )
        .to(flashRef.current, {
          opacity: 0,
          duration: 0.22,
          ease: 'power2.out',
        })
        .to(
          topLetterRefs.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.85,
            stagger: 0.14,
            ease: 'power4.out',
          },
          '-=0.08'
        )
        .to(
          bottomLetterRefs.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.85,
            stagger: 0.14,
            ease: 'power4.out',
          },
          '-=0.3'
        )
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          '-=0.25'
        )
        .to({}, { duration: 0.5 })

        // exit into hero
        .to(
          [topLetterRefs.current, bottomLetterRefs.current],
          {
            y: -80,
            opacity: 0,
            stagger: 0.03,
            duration: 0.5,
            ease: 'power3.inOut',
          },
          'exit'
        )
        .to(
          subtitleRef.current,
          {
            y: -30,
            opacity: 0,
            duration: 0.4,
          },
          'exit'
        )
        .to(
          root.current,
          {
            yPercent: -100,
            opacity: 0.95,
            duration: 1,
            ease: 'power4.inOut',
            onComplete: onComplete,
          },
          'exit+=0.15'
        )
    },
    { scope: root }
  )

  const setPieceRef = (el: HTMLDivElement | null) => {
    if (el && !piecesRef.current.includes(el)) {
      piecesRef.current.push(el)
    }
  }

  const setTopLetterRef = (el: HTMLSpanElement | null) => {
    if (el && !topLetterRefs.current.includes(el)) {
      topLetterRefs.current.push(el)
    }
  }

  const setBottomLetterRef = (el: HTMLSpanElement | null) => {
    if (el && !bottomLetterRefs.current.includes(el)) {
      bottomLetterRefs.current.push(el)
    }
  }

  return (
    <div
      ref={root}
      className="fixed inset-0 z-50 overflow-hidden bg-black text-white"
      style={{ perspective: '1200px' }}
    >
      <div
        ref={rainWrapRef}
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {pastaPieces.map((piece) => (
          <div
            key={piece.id}
            ref={setPieceRef}
            className="absolute top-[-140px]"
            style={{
              left: `${piece.left}%`,
              transform: `scale(${piece.scale})`,
            }}
          >
            <PastaShape type={piece.type} />
          </div>
        ))}
      </div>

      <div
        ref={flashRef}
        className="pointer-events-none absolute inset-0 bg-[#fab838]"
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <div
          ref={logoWrapRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          <img
            src={logo}
            alt="Pasta Fasta logo"
            className="w-44 rounded-3xl md:w-56 lg:w-64"
          />
        </div>

        <div className="flex flex-col items-center leading-[0.88] tracking-[-0.08em] text-[#fab838]">
          <h1 className="text-5xl font-black sm:text-6xl md:text-8xl lg:text-[10rem]">
            {topLetters.map((letter, index) => (
              <span key={index} ref={setTopLetterRef} className="inline-block">
                {letter}
              </span>
            ))}
          </h1>

          <h1 className="text-5xl font-black sm:text-6xl md:text-8xl lg:text-[10rem]">
            {bottomLetters.map((letter, index) => (
              <span key={index} ref={setBottomLetterRef} className="inline-block">
                {letter}
              </span>
            ))}
          </h1>
        </div>
      </div>
    </div>
  )
}