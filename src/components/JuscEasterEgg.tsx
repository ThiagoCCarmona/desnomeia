import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { type TranslationBundle } from '../i18n/translations';

export const EASTER_EGG_DURATION_MS = 5000;

interface JuscEasterEggProps {
  visible: boolean;
  triggerCount: number;
  t: TranslationBundle;
  onDismiss: () => void;
}

/**
 * 5-second JUSC & Abelhhudo cameo honoring the founders' origin.
 * Displays both the official JUSC emblem and the Abelhhudo mascot cleanly
 * for exactly 5 seconds with a razor-thin countdown hairline and zero layout shift.
 */
export function JuscEasterEgg({
  visible,
  triggerCount,
  t,
  onDismiss,
}: JuscEasterEggProps) {
  const [secondsLeft, setSecondsLeft] = useState(5);

  useEffect(() => {
    if (!visible) return;

    setSecondsLeft(5);

    const dismissTimer = window.setTimeout(() => {
      onDismiss();
    }, EASTER_EGG_DURATION_MS);

    const tickInterval = window.setInterval(() => {
      setSecondsLeft((prev) => (prev > 1 ? prev - 1 : 1));
    }, 1000);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onDismiss();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.clearTimeout(dismissTimer);
      window.clearInterval(tickInterval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [visible, triggerCount, onDismiss]);

  if (!visible) {
    return null;
  }

  return (
    <aside
      key={triggerCount}
      role="status"
      aria-live="polite"
      data-testid="jusc-easter-egg"
      className="animate-jusc-cameo fixed bottom-5 right-5 z-50 w-[min(23rem,calc(100vw-2.5rem))] border border-[#F5C400] bg-[#080808] shadow-[0_24px_60px_rgba(0,0,0,0.75)]"
    >
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#F5C400]">
              {t.easterEgg.title}
            </p>
            <p className="mt-1 font-display text-lg text-[#F6F4EE]">
              {t.easterEgg.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span
              className="font-mono text-xs text-[#F5C400] tabular-nums"
              data-testid="jusc-countdown"
            >
              {secondsLeft}
              {t.easterEgg.secondsUnit}
            </span>
            <button
              type="button"
              onClick={onDismiss}
              aria-label={t.easterEgg.closeAria}
              className="inline-flex h-7 w-7 cursor-pointer items-center justify-center border border-[#2A261C] text-[#B9B2A1] transition-colors duration-200 hover:border-[#F5C400] hover:text-[#F5C400]"
            >
              <X className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Visual stage: Official JUSC emblem + waving Abelhhudo mascot on unified pure black */}
        <div className="mt-4 grid grid-cols-2 items-center gap-2 border border-[#2A261C] bg-black p-3">
          <div className="flex items-center justify-center p-1">
            <img
              src="/assets/jusc-emblem.webp"
              alt={t.easterEgg.emblemAlt}
              width={128}
              height={128}
              className="h-28 w-28 object-contain"
            />
          </div>
          <div className="flex items-center justify-center p-1">
            <img
              src="/assets/jusc-abelhudo.webp"
              alt={t.easterEgg.mascotAlt}
              width={128}
              height={128}
              className="animate-jusc-bee h-28 w-28 object-contain"
            />
          </div>
        </div>

        <p className="mt-3.5 text-xs leading-relaxed text-[#B9B2A1]">
          {t.easterEgg.body}
        </p>
      </div>

      {/* Exact 5-second Sovereign Yellow countdown hairline */}
      <div className="h-1 w-full bg-[#2A261C]" aria-hidden="true">
        <div className="animate-jusc-countdown h-full w-full bg-[#F5C400]" />
      </div>
    </aside>
  );
}
