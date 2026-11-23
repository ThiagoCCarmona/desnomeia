import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BrandMark } from './BrandMark';
import { type Language, type TranslationBundle } from '../i18n/translations';
import { buildWhatsAppUrl } from '../lib/onomastics';

interface HeaderProps {
  lang: Language;
  t: TranslationBundle;
  onLanguageChange: (lang: Language) => void;
  onTriggerEasterEgg: () => void;
}

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
];

export function Header({
  lang,
  t,
  onLanguageChange,
  onTriggerEasterEgg,
}: HeaderProps) {
  const clickTimestampsRef = useRef<number[]>([]);

  const handleBrandClick = () => {
    const now = Date.now();
    const recent = clickTimestampsRef.current.filter((ts) => now - ts < 1600);
    recent.push(now);
    clickTimestampsRef.current = recent;
    if (recent.length >= 3) {
      clickTimestampsRef.current = [];
      onTriggerEasterEgg();
    }
  };

  const directWhatsApp = buildWhatsAppUrl({ lang });

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[#2A261C] bg-[#080808]/95">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-[#F5C400] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[#080808]"
      >
        {t.skipToContent}
      </a>

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <a
          href="#top"
          onClick={handleBrandClick}
          className="group flex shrink-0 items-center gap-3.5 text-[#F6F4EE] transition-opacity duration-200 hover:opacity-90"
        >
          <BrandMark className="h-8 w-8 shrink-0 transition-transform duration-300 group-hover:scale-[1.04]" />
          <span className="flex items-baseline gap-1.5">
            <span className="font-sans text-sm font-semibold tracking-[0.26em] text-[#F6F4EE]">
              {t.brandName}
            </span>
            <span className="font-sans text-[11px] font-medium tracking-[0.18em] text-[#B9B2A1]">
              {t.brandSuffix}
            </span>
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-9 md:flex"
        >
          <a
            href="#precedentes"
            className="text-sm font-normal tracking-[0.06em] text-[#B9B2A1] transition-colors duration-200 hover:text-[#F5C400]"
          >
            {t.nav.precedents}
          </a>
          <a
            href="#protocolo"
            className="text-sm font-normal tracking-[0.06em] text-[#B9B2A1] transition-colors duration-200 hover:text-[#F5C400]"
          >
            {t.nav.protocol}
          </a>
          <a
            href="#consultoria"
            className="text-sm font-normal tracking-[0.06em] text-[#B9B2A1] transition-colors duration-200 hover:text-[#F5C400]"
          >
            {t.nav.advisory}
          </a>
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <div
            role="group"
            aria-label={t.nav.languageLabel}
            className="flex items-center border border-[#2A261C] bg-[#11110F]"
          >
            {LANGUAGES.map((item) => {
              const active = lang === item.code;
              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => onLanguageChange(item.code)}
                  aria-pressed={active}
                  className={`min-h-[38px] min-w-[38px] cursor-pointer px-2.5 text-xs font-medium tracking-[0.12em] transition-colors duration-200 ${
                    active
                      ? 'bg-[#F5C400] text-[#080808]'
                      : 'text-[#B9B2A1] hover:text-[#F6F4EE]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <a
            href={directWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-[40px] items-center gap-1.5 border border-[#F5C400] px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-[#F5C400] transition-colors duration-200 hover:bg-[#F5C400] hover:text-[#080808] sm:inline-flex"
          >
            <span>{t.nav.directConcierge}</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
