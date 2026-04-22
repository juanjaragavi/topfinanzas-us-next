'use client'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { CreditCardFunnelLayout } from '@/components/layout/funnel-layout'
import { useCreditCardFunnel } from '@/hooks/use-funnel-state'
import { useEffect, useState } from 'react'
import { ScratchCard } from '@/components/ui/scratch-card'
import confetti from 'canvas-confetti'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/components/ui/animated-progress'

const FunnelStep17: React.FC = () => {
  const router = useRouter()
  const { funnelState, resetState } = useCreditCardFunnel()
  const [isClient, setIsClient] = useState(false)
  const [scratched, setScratched] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleScratchComplete = () => {
    setScratched(true)
    
    // Trigger confetti explosion upon successful scratch!
    const duration = 2.5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };
    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: ReturnType<typeof setInterval> = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  }

  const handleRedirect = () => {
    // Arbitrage Logic: Determine the exit URL based on the user's primary goal
    const exitUrl = funnelState.primaryGoal === 'travel'
      ? '/financial-solutions/chase-sapphire-preferred-credit-card-benefits'
      : '/financial-solutions/benefits-of-the-discover-it-cash-back'

    // Clear state and perform final redirect
    resetState()
    router.push(exitUrl)
  }

  if (!isClient) return null

  return (
    <CreditCardFunnelLayout
      progress={100}
      title="Final Match! Scratch to Reveal Your Pre-Approved Card!"
      aria-label="Card Scratch/Reveal Final Step"
      unitIndex={6}
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col space-y-8 p-4 text-center mobile-first-container"
      >
        <motion.div variants={itemVariants} className="w-full max-w-sm mx-auto relative">
          <ScratchCard 
            coverText="RUB HERE TO REVEAL" 
            onComplete={handleScratchComplete}
            finishPercent={35}
          >
            <div className="bg-gradient-to-br from-green-50 to-green-100 h-40 w-full flex flex-col items-center justify-center rounded-xl border-4 border-green-400 shadow-inner">
               <motion.span 
                 animate={{ scale: [1, 1.2, 1] }} 
                 transition={{ repeat: Infinity, duration: 1.5 }}
                 className="text-5xl mb-2"
               >
                 🎉
               </motion.span>
               <span className="text-green-800 text-xl font-black uppercase tracking-widest drop-shadow-sm">Match Found!</span>
            </div>
          </ScratchCard>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Button
            variant="3d-blue"
            size="lg"
            fullWidth
            onClick={handleRedirect}
            disabled={!scratched}
            aria-label="Reveal my card recommendation"
            className={!scratched ? "opacity-50 grayscale" : "animate-pulse shadow-xl"}
          >
            {scratched ? "✨ Claim Your Card Now!" : "Scratch Above to Unlock!"}
          </Button>
          <p className="text-sm text-gray-500 px-4 mt-4 font-medium">
            Your answers have led to this exclusive match tailored to your goals.
          </p>
        </motion.div>
      </motion.div>
    </CreditCardFunnelLayout>
  )
}

export default FunnelStep17
