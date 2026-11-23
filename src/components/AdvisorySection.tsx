import { type FormEvent } from 'react';
import { ArrowUpRight, Check, MessageCircle, ShieldAlert } from 'lucide-react';
import {
  type AdvisoryTier,
  type Language,
  type TranslationBundle,
} from '../i18n/translations';
import { buildWhatsAppUrl, type OnomasticDossier } from '../lib/onomastics';

interface AdvisorySectionProps {
  lang: Language;
  t: TranslationBundle;
  selectedTierId: AdvisoryTier['id'];
  nameInput: string;
  surnameInput: string;
  validationError: string | null;
  dossier: OnomasticDossier | null;
  onSelectTier: (tierId: AdvisoryTier['id']) => void;
  onNameChange: (value: string) => void;
  onSurnameChange: (value: string) => void;
  onEvaluate: () => void;
}

export function AdvisorySection({
  lang,
  t,
  selectedTierId,
  nameInput,
  surnameInput,
  validationError,
  dossier,
  onSelectTier,
  onNameChange,
  onSurnameChange,
  onEvaluate,
}: AdvisorySectionProps) {
  const activeTier =
    t.advisory.tiers.find((tier) => tier.id === selectedTierId) ??
    t.advisory.tiers[0];

  const whatsappUrl = buildWhatsAppUrl({
    lang,
    tierName: activeTier.name,
    dossier,
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onEvaluate();
  };

  return (
    <section
      id="consultoria"
      className="border-b border-[#2A261C] bg-[#080808] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <h2 className="font-display text-[clamp(2rem,4vw,3.35rem)] font-normal leading-[1.08] tracking-[-0.02em] text-[#F6F4EE]">
            {t.advisory.title}
          </h2>
          <p className="mt-4 max-w-[56ch] text-base leading-relaxed text-[#B9B2A1] sm:text-lg">
            {t.advisory.lead}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left column — Selectable Architectural Tiers */}
          <div className="min-w-0 lg:col-span-6">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-[#9A9280]">
              {t.advisory.selectTierLabel}
            </p>
            <div className="space-y-4">
              {t.advisory.tiers.map((tier) => {
                const isSelected = tier.id === activeTier.id;
                return (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => onSelectTier(tier.id)}
                    aria-pressed={isSelected}
                    className={`w-full cursor-pointer border p-6 text-left transition-colors duration-200 sm:p-7 ${
                      isSelected
                        ? 'border-[#F5C400] bg-[#181713]'
                        : 'border-[#2A261C] bg-[#11110F] hover:border-[#6A5C2E]'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-xs text-[#F5C400]">
                        {tier.code} · {tier.turnaround}
                      </span>
                      {isSelected && (
                        <span className="inline-flex items-center gap-1 bg-[#F5C400] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#080808]">
                          <Check className="h-3 w-3" aria-hidden="true" />
                          {t.advisory.selectedBadge}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-3 font-display text-2xl font-normal text-[#F6F4EE]">
                      {tier.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#B9B2A1]">
                      {tier.summary}
                    </p>

                    <ul className="mt-5 space-y-2 border-t border-[#2A261C] pt-4 text-sm text-[#D8D2C5]">
                      {tier.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span
                            className="mt-2 h-1 w-1 shrink-0 bg-[#F5C400]"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right column — Live Consultation Dossier & WhatsApp Dispatch */}
          <div className="min-w-0 lg:sticky lg:top-28 lg:col-span-6">
            <div className="border border-[#2A261C] bg-[#11110F] p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-[#2A261C] pb-5">
                <h3 className="font-display text-2xl font-normal text-[#F6F4EE]">
                  {t.advisory.dossierTitle}
                </h3>
                <span className="font-mono text-xs text-[#F5C400] tabular-nums">
                  {dossier ? dossier.dossierCode : activeTier.code}
                </span>
              </div>

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="advisory-name-input"
                      className="block text-xs font-medium uppercase tracking-[0.14em] text-[#B9B2A1]"
                    >
                      {t.advisory.dossierNameLabel}
                    </label>
                    <input
                      id="advisory-name-input"
                      type="text"
                      maxLength={80}
                      value={nameInput}
                      onChange={(e) => onNameChange(e.target.value)}
                      placeholder={t.hero.intakeExamples[0]}
                      className="mt-2 block w-full border border-[#2A261C] bg-[#080808] px-3.5 py-2.5 text-base text-[#F6F4EE] placeholder:text-[#7E7664] transition-colors duration-200 focus:border-[#F5C400] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="advisory-surname-input"
                      className="block text-xs font-medium uppercase tracking-[0.14em] text-[#B9B2A1]"
                    >
                      {t.advisory.dossierSurnameLabel}
                    </label>
                    <input
                      id="advisory-surname-input"
                      type="text"
                      maxLength={80}
                      value={surnameInput}
                      onChange={(e) => onSurnameChange(e.target.value)}
                      placeholder={t.hero.intakeSurnamePlaceholder.split(',')[0]}
                      className="mt-2 block w-full border border-[#2A261C] bg-[#080808] px-3.5 py-2.5 text-base text-[#F6F4EE] placeholder:text-[#7E7664] transition-colors duration-200 focus:border-[#F5C400] focus:outline-none"
                    />
                  </div>
                </div>

                {validationError && (
                  <p role="alert" className="text-sm text-[#FF5A36]">
                    {validationError}
                  </p>
                )}

                <button
                  type="submit"
                  className="min-h-[44px] w-full cursor-pointer border border-[#2A261C] bg-[#181713] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-[#F6F4EE] transition-colors duration-200 hover:border-[#F5C400] hover:text-[#F5C400]"
                >
                  {t.advisory.dossierEvaluateBtn}
                </button>
              </form>

              {dossier ? (
                <div
                  aria-live="polite"
                  className="mt-7 border-t border-[#2A261C] pt-7"
                >
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-[#9A9280]">
                        {t.advisory.dossierIndexLabel}
                      </p>
                      <p className="mt-1 font-display text-3xl text-[#F6F4EE]">
                        {dossier.candidateName}
                        {dossier.surname ? ` ${dossier.surname}` : ''}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-4xl text-[#F5C400] tabular-nums">
                        {dossier.riskScore}
                      </span>
                      <span className="font-mono text-sm text-[#9A9280]">
                        /100
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    {dossier.severity === 'low' ? (
                      <Check
                        className="h-4 w-4 text-[#C8D952]"
                        aria-hidden="true"
                      />
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
                      className={`text-xs font-semibold uppercase tracking-[0.14em] ${
                        dossier.severity === 'critical'
                          ? 'text-[#FF5A36]'
                          : dossier.severity === 'low'
                            ? 'text-[#C8D952]'
                            : 'text-[#F5C400]'
                      }`}
                    >
                      {t.advisory.severityLabels[dossier.severity]} —{' '}
                      {dossier.verdictTitle}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-[#B9B2A1]">
                    {dossier.verdictSummary}
                  </p>

                  <div className="mt-6 border-t border-[#2A261C] pt-5">
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#9A9280]">
                      {t.advisory.dossierFindingsLabel}
                    </p>
                    <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-[#D8D2C5]">
                      {dossier.findings.map((finding) => (
                        <li key={finding} className="flex items-start gap-2.5">
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#F5C400]"
                            aria-hidden="true"
                          />
                          <span>{finding}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <p className="mt-7 border-t border-[#2A261C] pt-6 text-sm leading-relaxed text-[#B9B2A1]">
                  {t.advisory.dossierEmptyHint}
                </p>
              )}

              {/* Primary WhatsApp Concierge Dispatch */}
              <div className="mt-8 border-t border-[#2A261C] pt-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[52px] w-full items-center justify-center gap-2.5 bg-[#F5C400] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-[#080808] transition-colors duration-200 hover:bg-[#FFD426]"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>
                    {dossier
                      ? t.advisory.dossierSendWhatsApp
                      : t.advisory.dossierDirectWhatsApp}
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>

                <p className="mt-3 text-center text-xs leading-relaxed text-[#9A9280]">
                  {t.advisory.dossierWhatsAppNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
