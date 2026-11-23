import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ManifestoBand } from './components/ManifestoBand';
import { PrecedentsSection } from './components/PrecedentsSection';
import { ProtocolSection } from './components/ProtocolSection';
import { AdvisorySection } from './components/AdvisorySection';
import { Footer } from './components/Footer';
import { JuscEasterEgg } from './components/JuscEasterEgg';
import {
  TRANSLATIONS,
  type AdvisoryTier,
  type Language,
} from './i18n/translations';
import { evaluateCandidateName } from './lib/onomastics';

const STORAGE_LANG_KEY = 'desnomeia_lang';
const SECRET_KEYWORDS = ['jusc', 'abelha', 'abelhhudo', 'bee', 'colmeia'];

function resolveInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'pt';
  try {
    const queryLang = new URLSearchParams(window.location.search)
      .get('lang')
      ?.toLowerCase();
    if (queryLang === 'pt' || queryLang === 'en' || queryLang === 'es') {
      return queryLang;
    }
    const saved = window.localStorage.getItem(STORAGE_LANG_KEY);
    if (saved === 'pt' || saved === 'en' || saved === 'es') {
      return saved;
    }
  } catch {
    // Storage access unavailable
  }
  return 'pt';
}

export function App() {
  const [lang, setLang] = useState<Language>(resolveInitialLanguage);
  const [selectedTierId, setSelectedTierId] =
    useState<AdvisoryTier['id']>('emergency');

  const [nameInput, setNameInput] = useState('');
  const [surnameInput, setSurnameInput] = useState('');
  const [evaluatedTarget, setEvaluatedTarget] = useState<{
    name: string;
    surname: string;
  } | null>(null);
  const [errorSource, setErrorSource] = useState<'hero' | 'advisory' | null>(
    null,
  );

  const [easterEggVisible, setEasterEggVisible] = useState(false);
  const [easterEggTriggerCount, setEasterEggTriggerCount] = useState(0);
  const keyBufferRef = useRef('');

  const t = TRANSLATIONS[lang];

  // Sync document language & SEO metadata whenever language changes
  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
    document.title = t.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t.metaDescription);
    }
    try {
      window.localStorage.setItem(STORAGE_LANG_KEY, lang);
    } catch {
      // Ignore storage failure in restricted contexts
    }
  }, [lang, t]);

  const triggerEasterEgg = useCallback(() => {
    setEasterEggTriggerCount((prev) => prev + 1);
    setEasterEggVisible(true);
  }, []);

  const dismissEasterEgg = useCallback(() => {
    setEasterEggVisible(false);
  }, []);

  // Secret keyboard trigger: typing "jusc", "abelha", or "bee" outside form fields
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return;
      }
      if (event.key.length !== 1 || event.ctrlKey || event.metaKey || event.altKey) {
        return;
      }
      const next = (keyBufferRef.current + event.key.toLowerCase()).slice(-12);
      keyBufferRef.current = next;
      if (SECRET_KEYWORDS.some((word) => next.endsWith(word))) {
        keyBufferRef.current = '';
        triggerEasterEgg();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [triggerEasterEgg]);

  // Recompute localized dossier seamlessly when language switches
  const dossier = useMemo(() => {
    if (!evaluatedTarget) return null;
    return evaluateCandidateName(
      evaluatedTarget.name,
      evaluatedTarget.surname,
      lang,
    );
  }, [evaluatedTarget, lang]);

  const activeTier =
    t.advisory.tiers.find((tier) => tier.id === selectedTierId) ??
    t.advisory.tiers[0];

  const handleEvaluate = useCallback(
    (
      source: 'hero' | 'advisory',
      overrideName?: string,
      overrideSurname?: string,
    ) => {
      const targetName = (overrideName ?? nameInput).trim();
      const targetSurname = (overrideSurname ?? surnameInput).trim();

      if (overrideName !== undefined) {
        setNameInput(overrideName);
      }
      if (overrideSurname !== undefined) {
        setSurnameInput(overrideSurname);
      }

      if (!targetName) {
        setErrorSource(source);
        return;
      }

      setErrorSource(null);
      setEvaluatedTarget({ name: targetName, surname: targetSurname });
    },
    [nameInput, surnameInput],
  );

  const handleInspectSpecimen = useCallback((proposedName: string) => {
    setErrorSource(null);
    setNameInput(proposedName);
    setSurnameInput('');
    setEvaluatedTarget({ name: proposedName, surname: '' });
    const advisorySection = document.getElementById('consultoria');
    if (advisorySection && typeof advisorySection.scrollIntoView === 'function') {
      advisorySection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleLanguageChange = useCallback((nextLang: Language) => {
    setLang(nextLang);
    setErrorSource(null);
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] text-[#F6F4EE]">
      <Header
        lang={lang}
        t={t}
        onLanguageChange={handleLanguageChange}
        onTriggerEasterEgg={triggerEasterEgg}
      />

      <main id="main-content">
        <HeroSection
          lang={lang}
          t={t}
          nameInput={nameInput}
          surnameInput={surnameInput}
          validationError={errorSource === 'hero' ? t.hero.intakeEmptyError : null}
          dossier={dossier}
          selectedTierName={activeTier.name}
          onNameChange={(val) => {
            setNameInput(val);
            if (errorSource) setErrorSource(null);
          }}
          onSurnameChange={setSurnameInput}
          onEvaluate={(overrideName, overrideSurname) =>
            handleEvaluate('hero', overrideName, overrideSurname)
          }
        />

        <ManifestoBand t={t} />

        <PrecedentsSection
          t={t}
          onInspectSpecimen={handleInspectSpecimen}
        />

        <ProtocolSection t={t} />

        <AdvisorySection
          lang={lang}
          t={t}
          selectedTierId={selectedTierId}
          nameInput={nameInput}
          surnameInput={surnameInput}
          validationError={
            errorSource === 'advisory' ? t.hero.intakeEmptyError : null
          }
          dossier={dossier}
          onSelectTier={setSelectedTierId}
          onNameChange={(val) => {
            setNameInput(val);
            if (errorSource) setErrorSource(null);
          }}
          onSurnameChange={setSurnameInput}
          onEvaluate={() => handleEvaluate('advisory')}
        />
      </main>

      <Footer
        lang={lang}
        t={t}
        onLanguageChange={handleLanguageChange}
        onTriggerEasterEgg={triggerEasterEgg}
      />

      <JuscEasterEgg
        visible={easterEggVisible}
        triggerCount={easterEggTriggerCount}
        t={t}
        onDismiss={dismissEasterEgg}
      />
    </div>
  );
}

export default App;
