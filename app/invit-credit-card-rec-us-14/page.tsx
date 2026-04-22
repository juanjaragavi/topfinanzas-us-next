'use client'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { CreditCardFunnelLayout } from '@/components/layout/funnel-layout'
import { useCreditCardFunnel } from '@/hooks/use-funnel-state'
import { useEffect, useState } from 'react'
import { AnimatedProgressBar, containerVariants, itemVariants } from '@/components/ui/animated-progress'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'

const FunnelStep14: React.FC = () => {
  const router = useRouter()
  const { funnelState, resetState } = useCreditCardFunnel()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Trigger confetti on successful completion with 500ms delay
    const timeout = setTimeout(() => {
      const duration = 3 * 1000;
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
    }, 500);

    return () => clearTimeout(timeout);
  }, [])

  const handleRedirect = () => {
    // Arbitrage Logic: Determine the highest CPA Payout based on collected state (creditStatus)
    const exitUrl = funnelState.creditStatus === 'excellent'
      ? '/financial-solutions/chase-sapphire-preferred-credit-card-benefits' // High-value lead
      : '/financial-solutions/benefits-of-the-discover-it-cash-back' // Standard value lead

    // Clear state and perform final redirect (Monetization Event)
    resetState()
    router.push(exitUrl)
  }

  if (!isClient) return null

  return (
    <CreditCardFunnelLayout
      progress={100}
      title="Processing Complete: Your Matches Are Ready!"
      aria-label="Financial Progress Bar Final Step"
      unitIndex={3}
    >
      <AnimatedProgressBar progress={100} label="Algorithm Complete" />
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col space-y-6 p-4 text-center mobile-first-container"
      >
        <motion.div 
          variants={itemVariants}
          className="bg-green-50 border-2 border-green-200 rounded-xl p-6 shadow-sm"
        >
          <div className="text-6xl mb-4 animate-bounce">🎁</div>
          <p className="text-lg font-medium text-gray-800">
            We used our algorithm to find the top credit card offers based on your profile!
          </p>
        </motion.div>
        
        <motion.div variants={itemVariants} className="pt-2">
          <Button
            variant="3d-green"
            fullWidth
            onClick={handleRedirect}
            aria-label="View personalized credit card offers"
            className="animate-pulse shadow-xl"
          >
            Claim Your Offers Now!
          </Button>
        </motion.div>
      </motion.div>
    </CreditCardFunnelLayout>
  )
}

export default FunnelStep14
