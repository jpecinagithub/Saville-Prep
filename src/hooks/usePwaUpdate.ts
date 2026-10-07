import { useEffect, useState } from "react";
import { registerSW } from "virtual:pwa-register";

/**
 * Controlled service-worker updates: the new worker waits,
 * and we only reload when the user accepts.
 */
export function usePwaUpdate() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [updateFn, setUpdateFn] = useState<(() => void) | null>(null);

  useEffect(() => {
    const updateSW = registerSW({
      onNeedRefresh() {
        setUpdateAvailable(true);
      },
    });
    setUpdateFn(() => updateSW);
  }, []);

  const applyUpdate = () => {
    updateFn?.();
  };

  return { updateAvailable, applyUpdate };
}
