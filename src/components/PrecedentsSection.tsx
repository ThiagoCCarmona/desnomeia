import { ArrowRight } from 'lucide-react';
import { type TranslationBundle } from '../i18n/translations';

interface PrecedentsSectionProps {
  t: TranslationBundle;
  onInspectSpecimen: (proposedName: string) => void;
}

export function PrecedentsSection({
  t,
  onInspectSpecimen,
}: PrecedentsSectionProps) {
  return (
    <section
      id="precedentes"
      className="border-b border-[#2A261C] bg-[#080808] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-[clamp(2rem,4vw,3.35rem)] font-normal leading-[1.08] tracking-[-0.02em] text-[#F6F4EE]">
              {t.precedents.title}
            </h2>
            <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-[#B9B2A1] sm:text-lg">
              {t.precedents.subtitle}
            </p>
          </div>
          <p className="max-w-[38ch] text-xs leading-relaxed text-[#9A9280]">
            {t.precedents.disclaimer}
          </p>
        </div>

        {/* Archival Swiss Specimen Ledger */}
        <div className="mt-12 border-t border-[#2A261C]">
          {/* Desktop header row */}
          <div className="hidden grid-cols-12 gap-4 border-b border-[#2A261C] py-3.5 text-xs font-medium uppercase tracking-[0.16em] text-[#9A9280] lg:grid">
            <div className="col-span-2">{t.precedents.colCode}</div>
            <div className="col-span-3">{t.precedents.colProposed}</div>
            <div className="col-span-4">{t.precedents.colRisk}</div>
            <div className="col-span-2">{t.precedents.colApproved}</div>
            <div className="col-span-1 text-right">{t.precedents.colIndex}</div>
          </div>

          <ul className="divide-y divide-[#2A261C]">
            {t.precedents.cases.map((item) => {
              const isHighRisk = item.riskScore >= 50;
              return (
                <li key={item.code}>
                  <button
                    type="button"
                    onClick={() => onInspectSpecimen(item.proposed)}
                    className="group grid w-full cursor-pointer grid-cols-1 items-baseline gap-3 py-6 text-left transition-colors duration-200 hover:bg-[#11110F] sm:px-3 lg:grid-cols-12 lg:gap-4"
                  >
                    <div className="flex items-center justify-between lg:col-span-2 lg:block">
                      <span className="font-mono text-xs text-[#B9B2A1] tabular-nums">
                        {item.code}
                      </span>
                      <span
                        className={`font-mono text-xs tabular-nums lg:hidden ${
                          isHighRisk ? 'text-[#F5C400]' : 'text-[#C8D952]'
                        }`}
                      >
                        {item.riskScore}/100
                      </span>
                    </div>

                    <div className="lg:col-span-3">
                      <span
                        className={`font-display text-2xl tracking-[-0.015em] ${
                          isHighRisk
                            ? 'redaction-strike text-[#B9B2A1]'
                            : 'text-[#F6F4EE]'
                        }`}
                      >
                        {item.proposed}
                      </span>
                    </div>

                    <div className="text-sm leading-relaxed text-[#B9B2A1] lg:col-span-4">
                      {item.riskVector}
                    </div>

                    <div className="flex items-center gap-2 lg:col-span-2">
                      <ArrowRight
                        className="h-3.5 w-3.5 shrink-0 text-[#F5C400] transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                      <span className="font-display text-xl font-medium text-[#F5C400]">
                        {item.approved}
                      </span>
                    </div>

                    <div className="hidden text-right font-mono text-sm tabular-nums lg:col-span-1 lg:block">
                      <span
                        className={
                          isHighRisk ? 'text-[#F5C400]' : 'text-[#C8D952]'
                        }
                      >
                        {item.riskScore}
                      </span>
                      <span className="text-[#8A8270]">/100</span>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
