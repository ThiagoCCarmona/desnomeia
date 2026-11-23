import { type TranslationBundle } from '../i18n/translations';

interface ProtocolSectionProps {
  t: TranslationBundle;
}

export function ProtocolSection({ t }: ProtocolSectionProps) {
  return (
    <section
      id="protocolo"
      className="border-b border-[#2A261C] bg-[#11110F] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <h2 className="font-display text-[clamp(2rem,4vw,3.35rem)] font-normal leading-[1.08] tracking-[-0.02em] text-[#F6F4EE]">
            {t.protocol.title}
          </h2>
          <p className="mt-4 max-w-[54ch] text-base leading-relaxed text-[#B9B2A1] sm:text-lg">
            {t.protocol.lead}
          </p>
        </div>

        {/* Sequential 4-stage hairline architectural spine */}
        <ol className="mt-14 grid grid-cols-1 divide-y divide-[#2A261C] border-y border-[#2A261C] md:grid-cols-2 md:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {t.protocol.stages.map((stage, index) => (
            <li
              key={stage.step}
              className={`flex flex-col justify-between py-8 md:px-7 md:py-10 ${
                index === 0 ? 'lg:pl-0' : ''
              } ${index === t.protocol.stages.length - 1 ? 'lg:pr-0' : ''} ${
                index >= 2 ? 'md:border-t md:border-[#2A261C] lg:border-t-0' : ''
              } ${index % 2 === 1 ? 'md:border-l md:border-[#2A261C]' : ''}`}
            >
              <div>
                <span className="font-mono text-xs text-[#F5C400] tabular-nums">
                  {stage.step}
                </span>
                <h3 className="mt-5 font-display text-2xl font-normal leading-snug tracking-[-0.015em] text-[#F6F4EE]">
                  {stage.title}
                </h3>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-[#B9B2A1] sm:text-[0.95rem]">
                {stage.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
