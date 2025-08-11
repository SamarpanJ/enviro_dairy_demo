'use client'

import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Disconnect after first trigger for better performance
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '50px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

export function useStaggeredAnimation(itemCount: number, threshold = 0.1, delay = 100) {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger the animations
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, i])
            }, i * delay)
          }
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '50px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [itemCount, threshold, delay])

  return { ref, visibleItems }
}

/**
 * Lightweight reveal-on-intersect hook for CSS-based staggering.
 * Triggers a single state flip when the container enters the viewport, then
 * you can use inline `transitionDelay` per child to stagger without multiple React re-renders.
 */
export function useRevealOnIntersect(threshold = 0.1, rootMargin = '50px') {
  const [hasEntered, setHasEntered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return { ref, hasEntered }
}

/**
 * Mount animation hook for entrance animations on page load.
 * Triggers animations immediately after component mounts with configurable delay.
 */
export function useMountAnimation(delay = 0) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return { isVisible }
}

/**
 * Staggered mount animation hook for multiple elements entering sequentially on page load.
 */
export function useStaggeredMountAnimation(itemCount: number, baseDelay = 0, staggerDelay = 150) {
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    for (let i = 0; i < itemCount; i++) {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, i])
      }, baseDelay + (i * staggerDelay))
    }
  }, [itemCount, baseDelay, staggerDelay])

  return { visibleItems }
}
