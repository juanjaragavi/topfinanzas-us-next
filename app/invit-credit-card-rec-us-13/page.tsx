'use client'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { CreditCardFunnelLayout } from '@/components/layout/funnel-layout'
import { useCreditCardFunnel } from '@/hooks/use-funnel-state'
import { useEffect, useState } from 'react'
import { AnimatedProgressBar, containerVariants, itemVariants } from '@/components/ui/animated-progress'
import { motion } from 'framer-motion'

const FunnelStep13: React.FC = () => {
  const router = useRouter()
  const { updateState } = useCreditCardFunnel()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleNext = (goal: 'cash' | 'travel' | 'low_rate') => {
    updateState({ primaryGoal: goal, progress: 66 })
    window.scrollTo(0, 0)
    router.push('/invit-credit-card-rec-us-14')
  }

  if (!isClient) return null

  return (
    <CreditCardFunnelLayout
      progress={66}
      title="Step 2: What is your primary financial goal?"
      aria-label="Financial Progress Bar Step 2: Financial Goal"
      unitIndex={2}
      logTag="CC-REC-13"
    >
      <AnimatedProgressBar progress={66} label="Matching with Partner Banks..." />
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col space-y-4 p-4 mobile-first-container"
      >
        <motion.div variants={itemVariants}>
          <Button variant="3d-green" fullWidth onClick={() => handleNext('cash')} aria-label="Earn Cash Back">
            💵 Earn Cash Back
          </Button>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Button variant="3d-green" fullWidth onClick={() => handleNext('travel')} aria-label="Travel Rewards">
            ✈️ Travel Rewards
          </Button>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Button variant="3d-green" fullWidth onClick={() => handleNext('low_rate')} aria-label="Lower Interest Rate">
            📉 Lower Interest Rate
          </Button>
        </motion.div>
      </motion.div>
    </CreditCardFunnelLayout>
  )
}

export default FunnelStep13
