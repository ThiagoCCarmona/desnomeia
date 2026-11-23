import { ArrowUpRight } from 'lucide-react';
import { BrandMark, HiveSealIcon } from './BrandMark';
import { type Language, type TranslationBundle } from '../i18n/translations';
import { buildWhatsAppUrl, WHATSAPP_DISPLAY } from '../lib/onomastics';

interface FooterProps {
  lang: Language;
  t: TranslationBundle;
  onLanguageChange: (lang: Language) => void;
  onTriggerEasterEgg: () => void;
}

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'pt', label: 'Português' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
];

export function Footer({
  lang,
  t,
  onLanguageChange,
  onTriggerEasterEgg,
}: FooterProps) {
  const directWhatsApp = buildWhatsAppUrl({ lang });
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 pb-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3.5">
              <BrandMark className="h-8 w-8 shrink-0" />
              <span className="flex items-baseline gap-1.5">
                <span className="font-sans text-sm font-semibold tracking-[0.26em] text-[#F6F4EE]">
                  {t.brandName}
                </span>
                <span className="font-sans text-[11px] font-medium tracking-[0.18em] text-[#B9B2A1]">
                  {t.brandSuffix}
                </span>
              </span>
            </div>
            <p className="mt-4 font-display text-xl italic text-[#F5C400]">
              {t.footer.tagline}
            </p>
            <p className="mt-2 font-mono text-xs text-[#9A9280]">
              {t.footer.domainLabel}
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#9A9280]">
              {t.footer.conciergeLabel}
            </p>
            <a
              href={directWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 font-mono text-sm text-[#F6F4EE] transition-colors duration-200 hover:text-[#F5C400]"
            >
              <span>{WHATSAPP_DISPLAY}</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[#F5C400]" aria-hidden="true" />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 md:col-span-3 md:justify-end">
            {LANGUAGES.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => onLanguageChange(item.code)}
                className={`cursor-pointer text-xs tracking-[0.08em] transition-colors duration-200 ${
                  lang === item.code
                    ? 'border-b border-[#F5C400] pb-0.5 text-[#F5C400]'
                    : 'text-[#9A9280] hover:text-[#F6F4EE]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-[#2A261C] pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-[#8A8270]">
            © {currentYear} {t.footer.rights}
          </p>

          {/* Hidden Bee / Honeycomb Easter Egg Trigger */}
          <button
            type="button"
            onClick={onTriggerEasterEgg}
            aria-label={t.footer.hiveAriaLabel}
            title={t.footer.hiveHint}
            data-testid="jusc-hive-trigger"
            className="group inline-flex min-h-[40px] min-w-[40px] cursor-pointer items-center justify-center gap-2 px-2 text-[#756845] transition-colors duration-300 hover:text-[#F5C400] focus-visible:text-[#F5C400]"
          >
            <HiveSealIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            <span className="max-w-0 overflow-hidden whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.18em] opacity-0 transition-all duration-300 group-hover:max-w-[110px] group-hover:opacity-100 group-focus-visible:max-w-[110px] group-focus-visible:opacity-100">
              {t.footer.hiveHint}
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
