// components/ProductFeatureSection.tsx
import Image from 'next/image'
import React from 'react'

export default function ProductFeatureSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-4 py-12 bg-gray-50">
      {/* Left column: headline, copy, CTA */}
      <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Empower Your Mental Fitness
        </h2>
        <p className="text-gray-700 mb-6">
          ABC Mental Toughness is a Progressive Web App built in Next.js that helps athletes, parents, and coaches—
          with guided journaling, built-in calendar scheduling, habit tracking, and real-time insights—to build
          unshakable mental resilience.
        </p>
        <a
          href="/early-access"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-shadow shadow-md"
        >
          Sign up for early access
        </a>
      </div>

      {/* Right column: product graphic */}
      <div className="md:w-1/2 max-w-xs md:max-w-sm">
        <Image
          src="/images/app-product-graphic.png"
          alt="ABC Mental Toughness App Screenshot"
          width={360}
          height={720}
          layout="responsive"
          className="rounded-lg shadow-lg"
          priority
        />
      </div>
    </section>
  )
}
