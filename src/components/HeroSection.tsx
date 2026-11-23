import { type FormEvent } from 'react';
import { ArrowDownRight, ArrowUpRight, ShieldAlert, Check } from 'lucide-react';
import { type Language, type TranslationBundle } from '../i18n/translations';
import { buildWhatsAppUrl, type OnomasticDossier } from '../lib/onomastics';

interface HeroSectionProps {
  lang: Language;
  t: TranslationBundle;
  nameInput: string;
  surnameInput: string;
  validationError: string | null;
  dossier: OnomasticDossier | null;
  selectedTierName: string;
  onNameChange: (value: string) => void;
  onSurnameChange: (value: string) => void;
  onEvaluate: (overrideName?: string, overrideSurname?: string) => void;
}

export function HeroSection({
  lang,
  t,
  nameInput,
  surnameInput,
  validationError,
  dossier,
  selectedTierName,
  onNameChange,
  onSurnameChange,
  onEvaluate,
}: HeroSectionProps) {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onEvaluate();
  };

  const whatsappUrl = buildWhatsAppUrl({
    lang,
    tierName: selectedTierName,
    dossier,
  });

  return (
    <section
      id="top"
      className="relative border-b border-[#2A261C] bg-[#080808] pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Left column — Monumental Editorial Thesis */}
          <div className="min-w-0 lg:col-span-7 lg:pr-6">
            <h1 className="font-display text-[clamp(2.9rem,6.4vw,5.4rem)] font-normal leading-[1.03] tracking-[-0.025em] text-[#F6F4EE]">
              <span className="block">{t.hero.headlineStart}</span>{' '}
              <span className="block italic text-[#F5C400]">
                {t.hero.headlineEmphasis}
              </span>
            </h1>

            <div className="mt-9 h-px w-20 bg-[#F5C400]" aria-hidden="true" />

            <p className="mt-7 max-w-[42ch] text-xl font-normal leading-snug text-[#F6F4EE] sm:text-2xl">
              {t.hero.serviceLine}
            </p>

            <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-[#B9B2A1] sm:text-[1.0625rem]">
              {t.hero.lead}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#consultoria"
                className="inline-flex min-h-[48px] items-center gap-2.5 bg-[#F5C400] px-7 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-[#080808] transition-colors duration-200 hover:bg-[#FFD426]"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#precedentes"
                className="inline-flex min-h-[48px] items-center gap-2 border border-[#2A261C] px-6 py-3.5 text-sm font-normal uppercase tracking-[0.14em] text-[#F6F4EE] transition-colors duration-200 hover:border-[#F5C400] hover:text-[#F5C400]"
              >
                <span>{t.hero.secondaryCta}</span>
              </a>
            </div>
          </div>

          {/* Right column — Working Immediate Onomastic Screening Desk */}
          <div className="min-w-0 lg:col-span-5">
            <div className="border border-[#2A261C] bg-[#11110F] p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 border-b border-[#2A261C] pb-4">
                <h2 className="font-display text-xl font-medium tracking-[-0.01em] text-[#F6F4EE]">
                  {t.hero.intakeTitle}
                </h2>
                <span className="font-mono text-xs text-[#F5C400] tabular-nums">
                  {dossier ? dossier.dossierCode : 'DSN-26'}
                </span>
              </div>

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                <div>
                  <label
                    htmlFor="hero-name-input"
                    className="block text-xs font-medium uppercase tracking-[0.14em] text-[#B9B2A1]"
                  >
                    {t.hero.intakeNameLabel}
                  </label>
                  <input
                    id="hero-name-input"
                    type="text"
                    maxLength={80}
                    value={nameInput}
                    onChange={(e) => onNameChange(e.target.value)}
                    placeholder={t.hero.intakeNamePlaceholder}
                    aria-invalid={Boolean(validationError)}
                    aria-describedby={validationError ? 'hero-name-error' : undefined}
                    className="mt-2 block w-full border border-[#2A261C] bg-[#080808] px-4 py-3 text-base text-[#F6F4EE] placeholder:text-[#7E7664] transition-colors duration-200 focus:border-[#F5C400] focus:outline-none"
                  />
                  {validationError && (
                    <p
                      id="hero-name-error"
                      role="alert"
                      className="mt-2 text-sm text-[#FF5A36]"
                    >
                      {validationError}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="hero-surname-input"
                    className="block text-xs font-medium uppercase tracking-[0.14em] text-[#B9B2A1]"
                  >
                    {t.hero.intakeSurnameLabel}
                  </label>
                  <input
                    id="hero-surname-input"
                    type="text"
                    maxLength={80}
                    value={surnameInput}
                    onChange={(e) => onSurnameChange(e.target.value)}
                    placeholder={t.hero.intakeSurnamePlaceholder}
                    className="mt-2 block w-full border border-[#2A261C] bg-[#080808] px-4 py-3 text-base text-[#F6F4EE] placeholder:text-[#7E7664] transition-colors duration-200 focus:border-[#F5C400] focus:outline-none"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-[#B9B2A1]">
                  <span>{t.hero.intakeExampleLabel}</span>
                  {t.hero.intakeExamples.map((specimen) => (
                    <button
                      key={specimen}
                      type="button"
                      onClick={() => onEvaluate(specimen, surnameInput)}
                      className="cursor-pointer border-b border-[#2A261C] pb-0.5 text-[#F6F4EE] transition-colors duration-200 hover:border-[#F5C400] hover:text-[#F5C400]"
                    >
                      {specimen}
                    </button>
                  ))}
                </div>

                <button
                  type="submit"
                  className="w-full min-h-[48px] cursor-pointer bg-[#F5C400] px-5 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-[#080808] transition-colors duration-200 hover:bg-[#FFD426]"
                >
                  {t.hero.intakeAction}
                </button>
              </form>

              {dossier && (
                <div
                  aria-live="polite"
                  className="mt-6 border-t border-[#2A261C] pt-6"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-center gap-2">
                      {dossier.severity === 'low' ? (
                        <Check className="h-4 w-4 text-[#C8D952]" aria-hidden="true" />
                      ) : (
                        <ShieldAlert
                          className={`h-4 w-4 ${
                            dossier.severity === 'critical'
                              ? 'text-[#FF5A36]'
                              : 'text-[#F5C400]'
                          }`}
                          aria-hidden="true"
                        />
                      )}
                      <span
                        className={`text-xs font-medium uppercase tracking-[0.14em] ${
                          dossier.severity === 'critical'
                            ? 'text-[#FF5A36]'
                            : dossier.severity === 'low'
                              ? 'text-[#C8D952]'
                              : 'text-[#F5C400]'
                        }`}
                      >
                        {t.advisory.severityLabels[dossier.severity]}
                      </span>
                    </div>
                    <span className="font-mono text-2xl text-[#F6F4EE] tabular-nums">
                      {dossier.riskScore}
                      <span className="text-sm text-[#B9B2A1]">/100</span>
                    </span>
                  </div>

                  {/* Razor-thin architectural gauge */}
                  <div className="mt-3 h-1 w-full bg-[#2A261C]" aria-hidden="true">
                    <div
                      className={`h-full transition-[width] duration-500 ease-out ${
                        dossier.severity === 'critical'
                          ? 'bg-[#FF5A36]'
                          : dossier.severity === 'low'
                            ? 'bg-[#C8D952]'
                            : 'bg-[#F5C400]'
                      }`}
                      style={{ width: `${dossier.riskScore}%` }}
                    />
                  </div>

                  <p className="mt-4 font-display text-lg text-[#F6F4EE]">
                    {dossier.verdictTitle}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#B9B2A1]">
                    {dossier.verdictSummary}
                  </p>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex min-h-[44px] w-full items-center justify-center gap-2 border border-[#F5C400] px-4 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-[#F5C400] transition-colors duration-200 hover:bg-[#F5C400] hover:text-[#080808]"
                  >
                    <span>{t.advisory.dossierSendWhatsApp}</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
