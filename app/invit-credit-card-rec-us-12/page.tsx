'use client'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { CreditCardFunnelLayout } from '@/components/layout/funnel-layout'
import { useCreditCardFunnel } from '@/hooks/use-funnel-state'
import { useEffect, useState } from 'react'
import FinanceOfferwallRuntime from '@/components/finance/finance-offerwall-runtime'
import OfferwallPageShell from '@/components/finance/offerwall-page-shell'
import { FINANCE_QUIZ_CONFIGS } from '@/lib/finance-quiz-config'
import { AnimatedProgressBar, containerVariants, itemVariants } from '@/components/ui/animated-progress'
import { motion } from 'framer-motion'

const FunnelStep12: React.FC = () => {
  const router = useRouter()
  const { updateState } = useCreditCardFunnel()
  const [isClient, setIsClient] = useState(false)
  const offerwallQuiz = FINANCE_QUIZ_CONFIGS.creditCardRecommender12

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
    <FinanceOfferwallRuntime quiz={offerwallQuiz}>
      <OfferwallPageShell>
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
              <Button variant="3d-blue" fullWidth onClick={() => handleNext('excellent')} aria-label="Excellent credit health">
                🏆 Excellent (740+)
              </Button>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button variant="3d-blue" fullWidth onClick={() => handleNext('good')} aria-label="Good credit health">
                👍 Good (670-739)
              </Button>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button variant="3d-blue" fullWidth onClick={() => handleNext('average')} aria-label="Average credit health">
                🤏 Average (580-669)
              </Button>
            </motion.div>
          </motion.div>
        </CreditCardFunnelLayout>
      </OfferwallPageShell>
    </FinanceOfferwallRuntime>
  )
}

export default FunnelStep12
