import { BrandMark } from './BrandMark';
import { type TranslationBundle } from '../i18n/translations';

interface ManifestoBandProps {
  t: TranslationBundle;
}

/**
 * Full-bleed committed Sovereign Yellow plate — color owning an entire region
 * at page scale with WCAG AAA obsidian typography (12.5:1 contrast).
 */
export function ManifestoBand({ t }: ManifestoBandProps) {
  return (
    <section
      data-surface="sovereign"
      className="bg-[#F5C400] py-20 text-[#080808] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <blockquote className="max-w-5xl">
          <p className="font-display text-[clamp(2.25rem,5.2vw,4.5rem)] font-medium leading-[1.06] tracking-[-0.025em] text-[#080808]">
            <span className="block">{t.manifesto.quoteLineOne}</span>{' '}
            <span className="block italic">{t.manifesto.quoteLineTwo}</span>
          </p>
        </blockquote>

        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-[#080808]/20 pt-10 md:grid-cols-2 lg:gap-16">
          <p className="max-w-[54ch] text-base leading-relaxed text-[#141208] sm:text-lg">
            {t.manifesto.bodyLeft}
          </p>
          <div className="flex flex-col justify-between gap-8">
            <p className="max-w-[54ch] text-base leading-relaxed text-[#141208] sm:text-lg">
              {t.manifesto.bodyRight}
            </p>
            <div className="flex items-center gap-3">
              <BrandMark variant="onYellow" className="h-6 w-6 shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#080808]">
                {t.manifesto.signature}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
