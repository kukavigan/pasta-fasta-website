import { useRef } from 'react'
import { X } from 'lucide-react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import offerImage from '../assets/oferte-pasta.jpg'

gsap.registerPlugin(useGSAP)

type OfferPopupProps = {
  isOpen: boolean
  onClose: () => void
}

export default function OfferPopup({ isOpen, onClose }: OfferPopupProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const cardRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  useGSAP(
    () => {
      if (!isOpen) return

      if (overlayRef.current) {
        gsap.set(overlayRef.current, { opacity: 0 })
      }

      if (cardRef.current) {
        gsap.set(cardRef.current, {
          opacity: 0,
          y: 40,
          scale: 0.92,
        })
      }

      if (imageRef.current) {
        gsap.set(imageRef.current, {
          scale: 1.08,
        })
      }

      if (buttonRef.current) {
        gsap.set(buttonRef.current, {
          opacity: 0,
          y: 20,
        })
      }

      const tl = gsap.timeline({
        defaults: { ease: 'power4.out' },
      })

      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
      })
        .to(
          cardRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
          },
          '-=0.1'
        )
        .to(
          imageRef.current,
          {
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.45'
        )
        .to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
          },
          '-=0.35'
        )
    },
    { dependencies: [isOpen] }
  )

  if (!isOpen) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 px-4"
    >
      <div
        ref={cardRef}
        className="relative w-full max-w-2xl overflow-hidden rounded-[28px] bg-black shadow-[0_25px_80px_rgba(0,0,0,0.35)]"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
          aria-label="Close popup"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative">
          <img
            ref={imageRef}
            src={offerImage}
            alt="Pasta Fasta offer"
            className="w-full object-cover"
          />

          <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center bg-[linear-gradient(to_top,rgba(0,0,0,0.72),transparent)] px-6 pb-6 pt-16">
            <button
              ref={buttonRef}
              onClick={onClose}
              className="rounded-full bg-[#fab838] px-7 py-3 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:scale-[1.03] hover:bg-[#f3b12c]"
            >
              View Offer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}