import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function EmojiSwap() {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="inline-block relative w-12 h-12 overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered ? (
          <motion.span
            key="emoji2"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-1/8 left-1/2 -translate-x-1/2 text-3xl"
          >
            😎
          </motion.span>
        ) : (
          <motion.span
            key="emoji1"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-1/8 left-1/2 -translate-x-1/2 text-3xl"
          >
            🙂
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
