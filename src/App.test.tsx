import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { App } from './App';
import {
  buildWhatsAppUrl,
  evaluateCandidateName,
  WHATSAPP_NUMBER,
} from './lib/onomastics';
import { EASTER_EGG_DURATION_MS } from './components/JuscEasterEgg';

describe('Onomastic Risk Evaluator & WhatsApp Dossier', () => {
  it('scores classic clean names as low risk', () => {
    const res = evaluateCandidateName('Helena', 'Mendes', 'pt');
    expect(res).not.toBeNull();
    expect(res!.severity).toBe('low');
    expect(res!.riskScore).toBeLessThanOrEqual(25);
  });

  it('flags exotic spelling, symbols, and hyphens as high/critical risk', () => {
    const res = evaluateCandidateName('Xäevier-Khaos✨', '', 'pt');
    expect(res).not.toBeNull();
    expect(res!.severity).toBe('critical');
    expect(res!.riskScore).toBeGreaterThanOrEqual(80);
    expect(res!.findings.length).toBeGreaterThanOrEqual(2);
  });

  it('catches sensitive combined initials with surname', () => {
    const res = evaluateCandidateName('Carlos', 'Uchoa', 'pt');
    expect(res).not.toBeNull();
    expect(res!.findings.some((f) => f.includes('CU'))).toBe(true);
  });

  it('returns null for empty whitespace names', () => {
    expect(evaluateCandidateName('   ', 'Silva', 'en')).toBeNull();
  });

  it('builds localized WhatsApp links targeting +55 45 99132-5244', () => {
    const dossier = evaluateCandidateName('Kallebhy', 'Silva', 'es');
    const url = buildWhatsAppUrl({
      lang: 'es',
      tierName: 'Intervención de Emergencia en Registro',
      dossier,
    });
    expect(url.startsWith(`https://wa.me/${WHATSAPP_NUMBER}?text=`)).toBe(true);
    const decoded = decodeURIComponent(url.split('?text=')[1]);
    expect(decoded).toContain('Kallebhy Silva');
    expect(decoded).toContain(dossier!.dossierCode);
  });
});

describe('Desnomeia Landing Page — i18n, Concierge & 5s JUSC Easter Egg', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('switches cleanly between PT, EN, and ES and syncs html lang & title', () => {
    render(<App />);

    expect(document.documentElement.lang).toBe('pt-BR');
    expect(
      screen.getByText(/Evitamos 18 anos de bullying/i),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'EN' }));
    expect(document.documentElement.lang).toBe('en');
    expect(
      screen.getByText(/We prevent 18 years of bullying/i),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'ES' }));
    expect(document.documentElement.lang).toBe('es');
    expect(
      screen.getByText(/No vendemos nombres/i),
    ).toBeInTheDocument();
  });

  it('validates empty screening input and produces WhatsApp dossier link on submission', () => {
    render(<App />);

    const submitBtn = screen.getByRole('button', {
      name: /Emitir parecer preliminar/i,
    });
    fireEvent.click(submitBtn);
    expect(screen.getByRole('alert')).toHaveTextContent(/Informe ao menos/i);

    const nameInput = screen.getByLabelText(/Nome cogitado/i);
    fireEvent.change(nameInput, { target: { value: 'Kallebhy-Thierry' } });
    fireEvent.click(submitBtn);

    const waLinks = screen
      .getAllByRole('link', { name: /Enviar Dossiê pelo WhatsApp/i });
    expect(waLinks.length).toBeGreaterThanOrEqual(1);
    expect(waLinks[0].getAttribute('href')).toContain(`wa.me/${WHATSAPP_NUMBER}`);
    expect(
      decodeURIComponent(waLinks[0].getAttribute('href') ?? ''),
    ).toContain('Kallebhy-Thierry');
  });

  it('reveals JUSC emblem & Abelhhudo mascot for exactly 5 seconds when hive seal is clicked', () => {
    vi.useFakeTimers();
    render(<App />);

    expect(screen.queryByTestId('jusc-easter-egg')).not.toBeInTheDocument();

    const hiveTrigger = screen.getByTestId('jusc-hive-trigger');
    fireEvent.click(hiveTrigger);

    const cameo = screen.getByTestId('jusc-easter-egg');
    expect(cameo).toBeInTheDocument();
    expect(screen.getByAltText(/Jovens Unidos Seguindo Cristo/i)).toHaveAttribute(
      'src',
      '/assets/jusc-emblem.webp',
    );
    expect(screen.getByAltText(/Abelhhudo/i)).toHaveAttribute(
      'src',
      '/assets/jusc-abelhudo.webp',
    );
    expect(screen.getByTestId('jusc-countdown')).toHaveTextContent('5s');

    act(() => {
      vi.advanceTimersByTime(2000);
    });
    expect(screen.getByTestId('jusc-countdown')).toHaveTextContent('3s');
    expect(screen.getByTestId('jusc-easter-egg')).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(EASTER_EGG_DURATION_MS - 2000);
    });
    expect(screen.queryByTestId('jusc-easter-egg')).not.toBeInTheDocument();
  });

  it('also unlocks the 5-second JUSC cameo when typing "jusc" outside inputs', () => {
    vi.useFakeTimers();
    render(<App />);

    for (const key of ['j', 'u', 's', 'c']) {
      fireEvent.keyDown(window, { key });
    }

    expect(screen.getByTestId('jusc-easter-egg')).toBeInTheDocument();

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(screen.queryByTestId('jusc-easter-egg')).not.toBeInTheDocument();
  });
});
