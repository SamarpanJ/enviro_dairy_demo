'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

/**
 * Floating scroll-to-top button.
 * - Appears after scrolling down a bit
 * - Smoothly scrolls to the top when clicked
 * - Uses rAF-throttled scroll handler for efficiency
 */
export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const tickingRef = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (tickingRef.current) return
      tickingRef.current = true
      window.requestAnimationFrame(() => {
        const shouldShow = window.scrollY > 240
        setIsVisible((prev) => (prev !== shouldShow ? shouldShow : prev))
        tickingRef.current = false
      })
    }

    // Initialize state and subscribe
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const onClick = () => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch {
      // Fallback for older browsers
      window.scrollTo(0, 0)
    }
  }

  return (
    <div
      className={[
        'fixed bottom-6 right-6 z-50 transition-all',
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none',
      ].join(' ')}
      aria-hidden={!isVisible}
    >
      <Button
        onClick={onClick}
        aria-label="Scroll to top"
        className="h-12 w-12 rounded-full shadow-lg bg-gradient-to-br from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 focus-visible:ring-green-500"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  )
}
