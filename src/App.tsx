import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SectionDivider from './components/SectionDivider'
import Loader from './components/Loader'
import OfferPopup from './components/OfferPopup'

import Hero from './sections/Hero'
import ProductOrbitSection from './sections/ProductOrbitSection'
import AboutUsSection from './sections/AboutUsSection'
import FranchiseSection from './sections/FranchiseSection'
import LocationsSection from './sections/LocationsSection'
import ContactSection from './sections/ContactSection'

export default function App() {
  const [loaderDone, setLoaderDone] = useState(false)
  const [showOffer, setShowOffer] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (!loaderDone) return

    const timer = setTimeout(() => {
      setShowOffer(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [loaderDone])

  return (
    <main className="min-h-screen bg-white">
      {!loaderDone && <Loader onComplete={() => setLoaderDone(true)} />}

      <OfferPopup isOpen={showOffer} onClose={() => setShowOffer(false)} />

      <Navbar />
      <Hero />
      <SectionDivider bgColor="#ffffff" />
      <ProductOrbitSection />
      <SectionDivider bgColor="#ffffff" />
      <AboutUsSection />
      <SectionDivider bgColor="#ffffff" />
      <FranchiseSection />
      <SectionDivider bgColor="#ffffff" />
      <LocationsSection />
      <SectionDivider bgColor="#ffffff" />
      <ContactSection />
      <Footer />
    </main>
  )
}