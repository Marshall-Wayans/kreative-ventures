import React from 'react'
import { motion } from 'framer-motion'
import { HeroSection } from '../components/HeroSection'
import { WhyChooseUs } from '../components/WhyChooseUs'
import { ServicesPreview } from '../components/ServicesPreview'
import { FeaturedProducts } from '../components/FeaturedProducts'
import { ProcessSection } from '../components/ProcessSection'
import { PortfolioTeaser } from '../components/PortfolioTeaser'
import { TestimonialsSection } from '../components/TestimonialsSection'
import { LocationPreview } from '../components/LocationPreview'
export function Home() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="w-full"
    >
      <HeroSection />
      <WhyChooseUs />
      <ServicesPreview />
      <FeaturedProducts />
      <ProcessSection />
      <PortfolioTeaser />
      <TestimonialsSection />
      <LocationPreview />
    </motion.div>
  )
}
