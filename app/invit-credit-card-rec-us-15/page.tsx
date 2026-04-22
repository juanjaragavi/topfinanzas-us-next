'use client'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { CreditCardFunnelLayout } from '@/components/layout/funnel-layout'
import { useCreditCardFunnel } from '@/hooks/use-funnel-state'
import { useEffect, useState } from 'react'
import FinanceOfferwallRuntime from '@/components/finance/finance-offerwall-runtime'
import OfferwallPageShell from '@/components/finance/offerwall-page-shell'
import { FINANCE_QUIZ_CONFIGS } from '@/lib/finance-quiz-config'
import { containerVariants, itemVariants } from '@/components/ui/animated-progress'
import { motion } from 'framer-motion'

const FunnelStep15: React.FC = () => {
  const router = useRouter()
  const { updateState } = useCreditCardFunnel()
  const [isClient, setIsClient] = useState(false)
  const offerwallQuiz = FINANCE_QUIZ_CONFIGS.creditCardRecommender15

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleNext = (goal: 'cash' | 'travel' | 'low_rate') => {
    updateState({ primaryGoal: goal, progress: 33 })
    window.scrollTo(0, 0)
    router.push('/invit-credit-card-rec-us-16')
  }

  // CONCEPT INTEGRATION: Placeholder for Interactive Scratch Card Component
  // In a full implementation, this component would use Konva or similar library for canvas rendering.
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
        <p className="font-extrabold text-lg text-amber-900 drop-shadow-sm">Tap your goal below to scratch off Step 2!</p>
        <p className="text-sm text-amber-700 mt-2 font-medium">Select one to proceed</p>
      </div>
    </motion.div>
  )

  if (!isClient) return null

  return (
    <FinanceOfferwallRuntime quiz={offerwallQuiz}>
      <OfferwallPageShell>
        <CreditCardFunnelLayout
          progress={33}
          title="Step 1: What is your #1 credit card goal?"
          aria-label="Card Scratch/Reveal Step 1: Credit Goal"
          unitIndex={4}
          logTag="CC-REC-15"
        >
          <ScratchCardPrompt />
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col space-y-4 p-4 mobile-first-container"
          >
            <motion.div variants={itemVariants}>
              <Button variant="3d-green" fullWidth onClick={() => handleNext('cash')} aria-label="Cashback rewards">
                💰 Maximize Cashback
              </Button>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button variant="3d-green" fullWidth onClick={() => handleNext('travel')} aria-label="Travel rewards">
                ✈️ Earn Travel Points
              </Button>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button variant="3d-green" fullWidth onClick={() => handleNext('low_rate')} aria-label="Low interest rate">
                📉 Keep Rates Low
              </Button>
            </motion.div>
          </motion.div>
        </CreditCardFunnelLayout>
      </OfferwallPageShell>
    </FinanceOfferwallRuntime>
  )
}

export default FunnelStep15
