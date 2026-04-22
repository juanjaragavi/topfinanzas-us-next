'use client'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { CreditCardFunnelLayout } from '@/components/layout/funnel-layout'
import { useCreditCardFunnel } from '@/hooks/use-funnel-state'
import { useEffect, useState } from 'react'
import { containerVariants, itemVariants } from '@/components/ui/animated-progress'
import { motion } from 'framer-motion'

const FunnelStep16: React.FC = () => {
  const router = useRouter()
  const { updateState } = useCreditCardFunnel()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleNext = (status: 'excellent' | 'good' | 'average') => {
    updateState({ creditStatus: status, progress: 66 })
    window.scrollTo(0, 0)
    router.push('/invit-credit-card-rec-us-17')
  }

  const ScratchCardPrompt = () => (
    <motion.div 
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', bounce: 0.5 }}
      className="relative bg-gradient-to-br from-amber-100 to-amber-200 border-2 border-amber-400 p-6 rounded-xl text-center shadow-md mb-6 overflow-hidden"
    >
      <motion.div 
        animate={{ x: ['-100%', '100%'] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
        className="absolute inset-0 z-0 opacity-30"
        style={{ backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)' }}
      />
      <div className="relative z-10">
        <p className="font-extrabold text-lg text-amber-900 drop-shadow-sm">Tap your credit standing below to reveal the final match!</p>
        <p className="text-sm text-amber-700 mt-2 font-medium">Almost there! Your personalized match is waiting.</p>
      </div>
    </motion.div>
  )

  if (!isClient) return null

  return (
    <CreditCardFunnelLayout
      progress={66}
      title="Step 2: How is your credit currently?"
      aria-label="Card Scratch/Reveal Step 2: Credit Status"
      unitIndex={5}
    >
      <ScratchCardPrompt />
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col space-y-4 p-4 mobile-first-container"
      >
        <motion.div variants={itemVariants}>
          <Button variant="3d-blue" size="lg" fullWidth onClick={() => handleNext('excellent')} aria-label="Excellent credit">
            🏆 Excellent (740+)
          </Button>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Button variant="3d-blue" size="lg" fullWidth onClick={() => handleNext('good')} aria-label="Good credit">
            👍 Good (670-739)
          </Button>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Button variant="3d-blue" size="lg" fullWidth onClick={() => handleNext('average')} aria-label="Average credit">
            🤏 Average (580-669)
          </Button>
        </motion.div>
      </motion.div>
    </CreditCardFunnelLayout>
  )
}

export default FunnelStep16
