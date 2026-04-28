import { useState, useEffect } from "react";

interface FunnelState {
  creditStatus?: "excellent" | "good" | "average";
  primaryGoal?: "cash" | "travel" | "low_rate";
  progress?: number;
}

const STORAGE_KEY = "tf_cc_funnel_state";

export function useCreditCardFunnel() {
  const [funnelState, setFunnelState] = useState<FunnelState>({});

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setFunnelState(JSON.parse(stored));
      }
    } catch (e) {
      console.warn("Failed to load funnel state", e);
    }
  }, []);

  const updateState = (newState: Partial<FunnelState>) => {
    setFunnelState((prev) => {
      const updated = { ...prev, ...newState };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (e) {
        console.warn("Failed to save funnel state", e);
      }
      return updated;
    });
  };

  const resetState = () => {
    setFunnelState({});
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn("Failed to remove funnel state", e);
    }
  };

  return {
    funnelState,
    updateState,
    resetState,
  };
}
