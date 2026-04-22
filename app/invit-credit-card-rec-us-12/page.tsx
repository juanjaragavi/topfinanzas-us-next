'use client'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { CreditCardFunnelLayout } from '@/components/layout/funnel-layout'
import { useCreditCardFunnel } from '@/hooks/use-funnel-state'
import { useEffect, useState } from 'react'
import { AnimatedProgressBar, containerVariants, itemVariants } from '@/components/ui/animated-progress'
import { motion } from 'framer-motion'

const FunnelStep12: React.FC = () => {
  const router = useRouter()
  const { updateState } = useCreditCardFunnel()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleNext = (status: 'excellent' | 'good' | 'average') => {
    updateState({ creditStatus: status, progress: 33 })
    window.scrollTo(0, 0)
    router.push('/invit-credit-card-rec-us-13')
  }

  if (!isClient) return null

  return (
    <CreditCardFunnelLayout
      progress={33}
      title="Step 1: Where do you think your credit health stands?"
      aria-label="Financial Progress Bar Step 1: Credit Health"
      unitIndex={1}
    >
      <AnimatedProgressBar progress={33} label="Analyzing Credit Score..." />
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col space-y-4 p-4 mobile-first-container"
      >
            <motion.div variants={itemVariants}>
              <Button variant="3d-green" fullWidth onClick={() => handleNext('excellent')} aria-label="Excellent credit health">
                🏆 Excellent (740+)
              </Button>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button variant="3d-green" fullWidth onClick={() => handleNext('good')} aria-label="Good credit health">
                👍 Good (670-739)
              </Button>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button variant="3d-green" fullWidth onClick={() => handleNext('average')} aria-label="Average credit health">
                🤏 Average (580-669)
              </Button>
            </motion.div>
          </motion.div>
    </CreditCardFunnelLayout>
  )
}

export default FunnelStep12
