'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChaCard } from '@/components/home/ChaCard'
import { ScrollHint } from '@/components/ui/ScrollHint'


export default function PrePage() {
  const router = useRouter()
  const [showCover, setShowCover] = useState(true)
  const animRef = useRef(false)

  useEffect(() => {
    if (sessionStorage.getItem('pre-visited')) {
      router.replace('/home')
      return
    }
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [router])

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (e.deltaY > 0 && showCover && !animRef.current) {
        animRef.current = true
        setShowCover(false)
      }
    },
    [showCover],
  )

  const handleExitComplete = useCallback(() => {
    sessionStorage.setItem('pre-visited', '1')
    router.replace('/home')
  }, [router])

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {showCover && (
        <motion.div
          className="fixed inset-0 z-50 bg-[#030712] overflow-hidden"
          onWheel={handleWheel}
          initial={{ y: 0 }}
          exit={{ y: '-100vh' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <ChaCard />
          <ScrollHint />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
