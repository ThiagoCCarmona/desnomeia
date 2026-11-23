import { TRANSLATIONS, type Language } from '../i18n/translations';

export const WHATSAPP_NUMBER = '5545991325244';
export const WHATSAPP_DISPLAY = '+55 45 99132-5244';

export type RiskSeverity = 'low' | 'moderate' | 'elevated' | 'critical';

export interface OnomasticDossier {
  dossierCode: string;
  candidateName: string;
  surname: string;
  riskScore: number;
  severity: RiskSeverity;
  verdictTitle: string;
  verdictSummary: string;
  recommendedAction: string;
  findings: string[];
}

const SENSITIVE_INITIALS = new Set([
  'CU',
  'PP',
  'BS',
  'KK',
  'SS',
  'ASS',
  'FDP',
  'WTF',
  'PQP',
  'STD',
  'KGB',
  'VD',
]);

const CLASSIC_SAFE_NAMES = new Set([
  'helena',
  'clara',
  'alice',
  'sofia',
  'sophia',
  'laura',
  'beatriz',
  'beatrice',
  'julia',
  'cecilia',
  'maria',
  'lucia',
  'valeria',
  'elena',
  'gabriel',
  'lucas',
  'arthur',
  'artur',
  'mateo',
  'matheus',
  'mateus',
  'miguel',
  'rafael',
  'daniel',
  'henrique',
  'pedro',
  'joao',
  'davi',
  'david',
  'oliver',
  'liam',
  'noah',
  'emma',
  'james',
  'caleb',
  'julian',
  'xavier',
  'javier',
  'thiago',
  'tiago',
]);

function normalizeText(value: string): string {
  return value.trim().replace(/\s+/g, ' ').slice(0, 80);
}

function stripDiacritics(value: string): string {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function computeDossierCode(name: string, surname: string): string {
  const seed = `${name.toLowerCase()}|${surname.toLowerCase()}`;
  let hash = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    hash ^= seed.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  const num = (Math.abs(hash) % 9000) + 1000;
  return `DSN-26-${num}`;
}

export function evaluateCandidateName(
  rawName: string,
  rawSurname: string,
  lang: Language,
): OnomasticDossier | null {
  const candidateName = normalizeText(rawName);
  const surname = normalizeText(rawSurname);
  if (!candidateName) {
    return null;
  }

  const copy = TRANSLATIONS[lang].onomastics;
  const ascii = stripDiacritics(candidateName).toLowerCase();
  const tokens = candidateName.split(' ').filter(Boolean);
  const findings: string[] = [];
  let score = 10;

  // 1. Non-Latin / symbols / digits / emojis
  const hasInvalidChars = /[^\p{L}\s'-]/u.test(candidateName);
  if (hasInvalidChars) {
    score += 58;
    findings.push(copy.findings.nonLatinOrSymbol);
  }

  // 2. Length checks
  if (candidateName.length >= 16) {
    score += 20;
    findings.push(copy.findings.excessiveLength);
  } else if (candidateName.length <= 2) {
    score += 24;
    findings.push(copy.findings.tooShort);
  }

  // 3. Compound overload
  if (tokens.length >= 3) {
    score += 18;
    findings.push(copy.findings.compoundOverload);
  }

  // 4. Exotic consonants & rare letter clusters
  const exoticHits = (ascii.match(/[kwy]|ph|jh|kh|bh|dh|gh|xh|zh|ck|tz|xz|leigh|lynne/g) ?? []).length;
  const trailingSilentH = /[a-z]h\b/g.test(ascii) && !/\b(sarah|hannah|noah|elizabeth|judith|ruth|seth|jonah|deborah)\b/.test(ascii);
  if (exoticHits >= 1 || trailingSilentH) {
    score += Math.min(40, exoticHits * 14 + (trailingSilentH ? 14 : 0));
    findings.push(copy.findings.exoticConsonants);
  }

  // 5. Ornamental doubled letters (ll, nn, tt, yy, kk, mm, etc.)
  const ornamentalDoubles = (ascii.match(/([bcdfghjklmnpqrstvwxyz])\1/g) ?? []).filter(
    (pair) => !['ss', 'rr'].includes(pair),
  );
  if (ornamentalDoubles.length > 0 && !CLASSIC_SAFE_NAMES.has(ascii)) {
    score += Math.min(24, ornamentalDoubles.length * 14);
    findings.push(copy.findings.doubleLetters);
  }

  // 6. Unusual hyphens, apostrophes, or exotic diacritics (umlaut, slash-o, etc.)
  const exoticDiacritics = /[äëïöüøæœß']/i.test(candidateName) || candidateName.includes('-');
  if (exoticDiacritics) {
    score += 22;
    findings.push(copy.findings.heavyDiacriticsOrPunctuation);
  }

  // 7. Classic safe reduction when cleanly spelled
  if (CLASSIC_SAFE_NAMES.has(ascii) && !hasInvalidChars && !exoticDiacritics) {
    score = Math.min(score, 12);
  }

  // 8. Surname interaction checks (initials & involuntary rhyme)
  if (surname) {
    const allParts = [...tokens, ...surname.split(' ').filter(Boolean)];
    const initials = allParts
      .map((part) => stripDiacritics(part).charAt(0).toUpperCase())
      .join('');
    const firstLast = `${stripDiacritics(tokens[0]).charAt(0).toUpperCase()}${stripDiacritics(
      surname.split(' ')[0],
    )
      .charAt(0)
      .toUpperCase()}`;

    if (SENSITIVE_INITIALS.has(initials) || SENSITIVE_INITIALS.has(firstLast)) {
      const flagged = SENSITIVE_INITIALS.has(initials) ? initials : firstLast;
      score += 32;
      findings.push(copy.findings.awkwardInitials(flagged));
    }

    const firstClean = stripDiacritics(tokens[0]).toLowerCase().replace(/[^a-z]/g, '');
    const lastClean = stripDiacritics(surname.split(' ')[0])
      .toLowerCase()
      .replace(/[^a-z]/g, '');
    if (
      firstClean.length >= 4 &&
      lastClean.length >= 4 &&
      firstClean.slice(-3) === lastClean.slice(-3)
    ) {
      score += 18;
      findings.push(copy.findings.surnameRhyme);
    }
  }

  const riskScore = Math.max(4, Math.min(99, Math.round(score)));

  let severity: RiskSeverity;
  if (riskScore <= 25) {
    severity = 'low';
  } else if (riskScore <= 52) {
    severity = 'moderate';
  } else if (riskScore <= 78) {
    severity = 'elevated';
  } else {
    severity = 'critical';
  }

  if (findings.length === 0) {
    findings.push(copy.findings.cleanClassic, copy.findings.internationalReadable);
  }

  const verdict = copy.verdicts[severity];

  return {
    dossierCode: computeDossierCode(candidateName, surname),
    candidateName,
    surname,
    riskScore,
    severity,
    verdictTitle: verdict.title,
    verdictSummary: verdict.summary,
    recommendedAction: verdict.action,
    findings,
  };
}

export function buildWhatsAppUrl(params: {
  lang: Language;
  tierName?: string;
  dossier?: OnomasticDossier | null;
}): string {
  const bundle = TRANSLATIONS[params.lang];
  const { dossier, tierName } = params;

  const message = dossier
    ? bundle.onomastics.whatsapp.dossierMessage({
        name: dossier.candidateName,
        surname: dossier.surname || undefined,
        tierName: tierName || bundle.advisory.tiers[0].name,
        riskScore: dossier.riskScore,
        severityLabel: bundle.advisory.severityLabels[dossier.severity],
        dossierCode: dossier.dossierCode,
      })
    : bundle.onomastics.whatsapp.directMessage;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
