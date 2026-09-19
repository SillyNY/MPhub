'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import type { MemoryChapter } from '@/lib/utils/constants'

type Props = {
  chapter: MemoryChapter | null
  onClose: () => void
}

export function ChapterDetail({ chapter, onClose }: Props) {
  return (
    <AnimatePresence>
      {chapter && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <Card model="glass" className="p-8!">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[0.65rem] font-mono tracking-widest text-white/35 uppercase">
                  CHAPTER {chapter.index}
                </span>
                <span className="text-[0.65rem] font-mono tracking-[0.2em] text-white/25 uppercase">
                  {chapter.subtitle}
                </span>
              </div>

              <h2 className="text-2xl font-display text-white mb-3">
                {chapter.title}
              </h2>

              <p className="text-sm text-white/60 italic mb-6 leading-relaxed">
                {chapter.abstract}
              </p>

              <div>
                <p className="text-white/80 leading-relaxed">{chapter.content}</p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                <span className="text-[0.65rem] text-white/25">彼岸回响档案</span>
                <button
                  onClick={onClose}
                  className="text-xs text-white/40 hover:text-white/70 transition-colors"
                >
                  关闭 ✕
                </button>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
