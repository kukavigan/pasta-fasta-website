import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import product1 from '../assets/product-1.jpg'
import product2 from '../assets/product-2.jpg'
import product3 from '../assets/product-3.jpg'
import product4 from '../assets/product-4.jpg'
import product5 from '../assets/product-5.jpg'
import product6 from '../assets/product-6.jpg'
import product7 from '../assets/product-7.jpg'
import product8 from '../assets/product-8.jpg'

gsap.registerPlugin(useGSAP)

const products = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
]

export default function ProductOrbitSection() {
  const orbitRef = useRef<HTMLDivElement | null>(null)
  const itemRefs = useRef<HTMLDivElement[]>([])
  const radius = 235

  useGSAP(() => {
    if (!orbitRef.current) return

    gsap.to(orbitRef.current, {
      rotate: 360,
      duration: 28,
      repeat: -1,
      ease: 'none',
      transformOrigin: '50% 50%',
    })

    itemRefs.current.forEach((item) => {
      gsap.to(item, {
        rotate: -360,
        duration: 28,
        repeat: -1,
        ease: 'none',
        transformOrigin: '50% 50%',
      })
    })
  }, [])

  const setItemRef = (el: HTMLDivElement | null) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el)
    }
  }

  return (
    <section className="overflow-hidden bg-white px-6 py-12 md:px-10 md:py-16 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.35em] text-[#d89a16] md:text-sm">
          Our Products
        </p>

        <h2 className="mx-auto max-w-4xl text-center text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-black sm:text-5xl md:text-6xl lg:text-[5.2rem]">
          Built to stand out
        </h2>

        <div className="relative mt-6 flex min-h-[660px] items-start justify-center">
          <div className="relative h-[620px] w-[620px] md:h-[650px] md:w-[650px]">
            <div ref={orbitRef} className="absolute inset-0">
              {products.map((product, index) => {
                const angle = (Math.PI * 2 * index) / products.length
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius

                return (
                  <div
                    key={index}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                    }}
                  >
                    <div
                      ref={setItemRef}
                      className="h-28 w-28 overflow-hidden rounded-[30px] bg-[#f7f4ee] shadow-[0_12px_30px_rgba(0,0,0,0.08)] md:h-32 md:w-32"
                    >
                      <img
                        src={product}
                        alt={`Product ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="group absolute left-1/2 top-1/2 z-10 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[32px] border border-black/10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 hover:scale-[1.03] hover:border-[#fab838] hover:bg-[#fab838] md:h-48 md:w-48">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-black/45 transition-colors duration-300 group-hover:text-black/70">
                Pasta Fasta
              </div>

              <div className="text-center text-lg font-black uppercase leading-tight tracking-[-0.04em] text-black transition-colors duration-300 group-hover:text-black md:text-2xl">
                Explore
                <br />
                products
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}