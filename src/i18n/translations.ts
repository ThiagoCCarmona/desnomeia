export type Language = 'pt' | 'en' | 'es';

export interface PrecedentCase {
  code: string;
  proposed: string;
  riskVector: string;
  approved: string;
  riskScore: number;
}

export interface ProtocolStage {
  step: string;
  title: string;
  description: string;
}

export interface AdvisoryTier {
  id: 'emergency' | 'gestation' | 'sovereign';
  code: string;
  name: string;
  turnaround: string;
  summary: string;
  deliverables: string[];
}

export interface TranslationBundle {
  htmlLang: string;
  metaTitle: string;
  metaDescription: string;
  skipToContent: string;
  brandName: string;
  brandSuffix: string;
  nav: {
    precedents: string;
    protocol: string;
    advisory: string;
    directConcierge: string;
    languageLabel: string;
  };
  hero: {
    headlineStart: string;
    headlineEmphasis: string;
    serviceLine: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    intakeTitle: string;
    intakeNameLabel: string;
    intakeNamePlaceholder: string;
    intakeSurnameLabel: string;
    intakeSurnamePlaceholder: string;
    intakeAction: string;
    intakeEmptyError: string;
    intakeExampleLabel: string;
    intakeExamples: string[];
  };
  manifesto: {
    quoteLineOne: string;
    quoteLineTwo: string;
    bodyLeft: string;
    bodyRight: string;
    signature: string;
  };
  precedents: {
    title: string;
    subtitle: string;
    disclaimer: string;
    colCode: string;
    colProposed: string;
    colRisk: string;
    colApproved: string;
    colIndex: string;
    cases: PrecedentCase[];
  };
  protocol: {
    title: string;
    lead: string;
    stages: ProtocolStage[];
  };
  advisory: {
    title: string;
    lead: string;
    selectTierLabel: string;
    selectedBadge: string;
    tiers: AdvisoryTier[];
    dossierTitle: string;
    dossierEmptyHint: string;
    dossierNameLabel: string;
    dossierSurnameLabel: string;
    dossierEvaluateBtn: string;
    dossierIndexLabel: string;
    dossierCodeLabel: string;
    dossierFindingsLabel: string;
    dossierSendWhatsApp: string;
    dossierDirectWhatsApp: string;
    dossierWhatsAppNote: string;
    severityLabels: {
      low: string;
      moderate: string;
      elevated: string;
      critical: string;
    };
  };
  footer: {
    tagline: string;
    domainLabel: string;
    conciergeLabel: string;
    rights: string;
    hiveAriaLabel: string;
    hiveHint: string;
  };
  easterEgg: {
    title: string;
    subtitle: string;
    body: string;
    closeAria: string;
    secondsUnit: string;
    emblemAlt: string;
    mascotAlt: string;
  };
  onomastics: {
    verdicts: {
      low: { title: string; summary: string; action: string };
      moderate: { title: string; summary: string; action: string };
      elevated: { title: string; summary: string; action: string };
      critical: { title: string; summary: string; action: string };
    };
    findings: {
      nonLatinOrSymbol: string;
      excessiveLength: string;
      tooShort: string;
      compoundOverload: string;
      exoticConsonants: string;
      doubleLetters: string;
      heavyDiacriticsOrPunctuation: string;
      awkwardInitials: (initials: string) => string;
      surnameRhyme: string;
      cleanClassic: string;
      internationalReadable: string;
    };
    whatsapp: {
      directMessage: string;
      dossierMessage: (params: {
        name: string;
        surname?: string;
        tierName: string;
        riskScore: number;
        severityLabel: string;
        dossierCode: string;
      }) => string;
    };
  };
}

export const TRANSLATIONS: Record<Language, TranslationBundle> = {
  pt: {
    htmlLang: 'pt-BR',
    metaTitle: 'Desnomeia Ltda — Desnomeia antes que seja tarde',
    metaDescription:
      'Consultoria personalizada para registro de novos nomes. Não vendemos nomes, evitamos 18 anos de bullying.',
    skipToContent: 'Pular para o conteúdo principal',
    brandName: 'DESNOMEIA',
    brandSuffix: 'LTDA.',
    nav: {
      precedents: 'Precedentes',
      protocol: 'Protocolo',
      advisory: 'Consultoria',
      directConcierge: 'Falar no WhatsApp',
      languageLabel: 'Selecionar idioma',
    },
    hero: {
      headlineStart: 'Desnomeia',
      headlineEmphasis: 'antes que seja tarde.',
      serviceLine: 'Consultoria personalizada para registro de novos nomes.',
      lead: 'Um impulso criativo no cartório atravessa décadas. Atuamos com discrição entre o entusiasmo da maternidade e a tinta definitiva da certidão de nascimento.',
      primaryCta: 'Iniciar consulta privada',
      secondaryCta: 'Ver precedentes',
      intakeTitle: 'Triagem Onomástica Imediata',
      intakeNameLabel: 'Nome cogitado',
      intakeNamePlaceholder: 'Ex.: Kallebhy, Brayan-Thierry, Helena...',
      intakeSurnameLabel: 'Sobrenome da família (opcional)',
      intakeSurnamePlaceholder: 'Ex.: Silva, Costa, Mendes',
      intakeAction: 'Emitir parecer preliminar',
      intakeEmptyError: 'Informe ao menos um prenome para iniciar a triagem.',
      intakeExampleLabel: 'Testar espécimes:',
      intakeExamples: ['Kallebhy', 'Braxleigh-Lynne', 'Helena'],
    },
    manifesto: {
      quoteLineOne: 'Não vendemos nomes.',
      quoteLineTwo: 'Evitamos 18 anos de bullying.',
      bodyLeft:
        'Cada geração acredita ter inventado uma grafia inesquecível. Cinco anos depois, a chamada escolar, o apelido irreversível e uma vida inteira soletrando consoantes mudas provam o contrário.',
      bodyRight:
        'A Desnomeia Ltda opera como um conselho privado de proteção biográfica. Não julgamos o amor dos pais — apenas auditamos, com rigor fonético e social, se o nome resiste do pátio do colégio ao cartão de visita internacional.',
      signature: 'Desnomeia Ltda · Conselho Onomástico Privado',
    },
    precedents: {
      title: 'Precedentes de Intervenção',
      subtitle:
        'Decisões cirúrgicas conduzidas antes do registro civil definitivo.',
      disclaimer:
        'Nota editorial: os registros abaixo são espécimes ilustrativos elaborados para demonstrar o método de análise da consultoria.',
      colCode: 'Dossiê',
      colProposed: 'Proposta Original',
      colRisk: 'Vetor de Risco Identificado',
      colApproved: 'Registro Aprovado',
      colIndex: 'Índice',
      cases: [
        {
          code: 'DSN-014',
          proposed: 'Kallebhy-Thierry',
          riskVector: 'Fricção ortográfica severa; soletração vitalícia garantida',
          approved: 'Caleb',
          riskScore: 91,
        },
        {
          code: 'DSN-027',
          proposed: 'Xäevier-Khaos',
          riskVector: 'Diacrítico ornamental e carga dramática incompatível com o 5º ano',
          approved: 'Xavier',
          riskScore: 96,
        },
        {
          code: 'DSN-039',
          proposed: 'Mhaylla-Stephanny',
          riskVector: 'Excesso de consoantes duplas e ambiguidade de acentuação',
          approved: 'Maitê',
          riskScore: 84,
        },
        {
          code: 'DSN-052',
          proposed: 'Yhonny-Bravø',
          riskVector: 'Referência pop literal com risco imediato de apelido perpétuo',
          approved: 'João Pedro',
          riskScore: 98,
        },
        {
          code: 'DSN-068',
          proposed: 'Clara Mendes',
          riskVector: 'Fonética limpa, baixa ambiguidade e excelente leitura internacional',
          approved: 'Clara Mendes',
          riskScore: 8,
        },
      ],
    },
    protocol: {
      title: 'O Protocolo de Quatro Estágios',
      lead: 'Antes de assinar qualquer folha de cartório, cada nome atravessa uma bateria silenciosa de validação.',
      stages: [
        {
          step: '01',
          title: 'Forense de Pátio Escolar',
          description:
            'Mapeamento de rimas involuntárias, trocadilhos de quinta série, abreviações hostis e iniciais constrangedoras com o sobrenome.',
        },
        {
          step: '02',
          title: 'Estresse Fonético Internacional',
          description:
            'Simulação de pronúncia em português, inglês e espanhol — do atendimento em aeroporto à chamada em universidade estrangeira.',
        },
        {
          step: '03',
          title: 'Auditoria de Soletração & Carreira',
          description:
            'Teste de atrito telefônico, preenchimento de formulários e projeção de dignidade em assinaturas executivas aos 35 anos.',
        },
        {
          step: '04',
          title: 'Parecer Soberano & Desnomeação',
          description:
            'Emissão do veredito confidencial com rota elegante de substituição, preservando o significado afetivo sem expor a criança.',
        },
      ],
    },
    advisory: {
      title: 'Mesa de Consultoria Privada',
      lead: 'Selecione o nível de acompanhamento, valide o nome cogitado e encaminhe o dossiê diretamente ao nosso consultor via WhatsApp.',
      selectTierLabel: 'Modalidades de Atendimento',
      selectedBadge: 'Selecionado',
      tiers: [
        {
          id: 'emergency',
          code: 'NIVEL I',
          name: 'Intervenção Emergencial de Cartório',
          turnaround: 'Resposta prioritária · Mesmo dia',
          summary:
            'Para pais já a caminho do registro civil ou familiares em missão diplomática urgente.',
          deliverables: [
            'Auditoria imediata de risco de bullying e apelidos',
            'Até 3 alternativas nobres preservando a sonoridade afetiva',
            'Orientação direta e confidencial pelo WhatsApp',
          ],
        },
        {
          id: 'gestation',
          code: 'NIVEL II',
          name: 'Curadoria Personalizada de Gestação',
          turnaround: 'Dossiê completo · 48 horas',
          summary:
            'Análise aprofundada da lista curta dos pais combinada com os sobrenomes da família.',
          deliverables: [
            'Avaliação comparativa de até 5 nomes candidatos',
            'Checagem de iniciais, cadência com sobrenome e homônimos',
            'Relatório de elegância fonética para toda a vida escolar',
          ],
        },
        {
          id: 'sovereign',
          code: 'NIVEL III',
          name: 'Conselho Privado Internacional',
          turnaround: 'Atendimento sob medida · PT / EN / ES',
          summary:
            'Para famílias bilíngues ou globais que exigem fluidez perfeita em múltiplos idiomas e passaportes.',
          deliverables: [
            'Estresse fonético em português, inglês e espanhol',
            'Verificação de conotações culturais indesejadas no exterior',
            'Sessão executiva de fechamento com o consultor sênior',
          ],
        },
      ],
      dossierTitle: 'Dossiê de Encaminhamento',
      dossierEmptyHint:
        'Digite um nome acima ou ao lado para gerar o parecer onomástico antes de acionar o WhatsApp.',
      dossierNameLabel: 'Nome para auditoria',
      dossierSurnameLabel: 'Sobrenome (opcional)',
      dossierEvaluateBtn: 'Atualizar parecer',
      dossierIndexLabel: 'Índice de Risco Escolar',
      dossierCodeLabel: 'Protocolo',
      dossierFindingsLabel: 'Observações do Conselho',
      dossierSendWhatsApp: 'Enviar Dossiê pelo WhatsApp',
      dossierDirectWhatsApp: 'Acionar Consultor Diretamente',
      dossierWhatsAppNote:
        'Atendimento direto via WhatsApp (+55 45 99132-5244) com mensagem pré-preenchida no idioma selecionado.',
      severityLabels: {
        low: 'Aprovado · Baixo Risco',
        moderate: 'Atenção Moderada',
        elevated: 'Risco Elevado · Revisar',
        critical: 'Intervenção Urgente',
      },
    },
    footer: {
      tagline: 'Desnomeia antes que seja tarde.',
      domainLabel: 'desnomeia.tccodes.com.br',
      conciergeLabel: 'Concierge WhatsApp',
      rights: 'Desnomeia Ltda. Todos os direitos reservados.',
      hiveAriaLabel: 'Selo secreto da colmeia JUSC',
      hiveHint: 'Selo da Colmeia',
    },
    easterEgg: {
      title: 'Origem da Colmeia · JUSC',
      subtitle: 'Jovens Unidos Seguindo Cristo',
      body: 'O preto, o amarelo e essa consultoria nasceram onde o Abelhhudo faz casa.',
      closeAria: 'Fechar homenagem JUSC',
      secondsUnit: 's',
      emblemAlt: 'Logo oficial do grupo de jovens JUSC — Jovens Unidos Seguindo Cristo',
      mascotAlt: 'Abelhhudo, mascote oficial do JUSC acenando',
    },
    onomastics: {
      verdicts: {
        low: {
          title: 'Perfil Clássico & Seguro',
          summary:
            'Estrutura fonética equilibrada, grafia transparente e excelente resistência ao pátio escolar pelos próximos 18 anos.',
          action:
            'Pronto para chancela final com análise de sobrenome no WhatsApp.',
        },
        moderate: {
          title: 'Revisão Ortográfica Recomendada',
          summary:
            'O nome possui charme, mas apresenta pontos de atrito na escrita espontânea ou na pronúncia cotidiana.',
          action:
            'Recomendamos um ajuste cirúrgico antes de protocolar no cartório.',
        },
        elevated: {
          title: 'Alto Potencial de Soletração Vitalícia',
          summary:
            'Combinação gráfica ou fonética com forte tendência a correções constantes em chamadas, cadastros e apelidos escolares.',
          action:
            'Consultoria fortemente recomendada antes do registro definitivo.',
        },
        critical: {
          title: 'Alerta Vermelho de Cartório',
          summary:
            'Risco crítico de 18 anos de bullying detectado. Intervenção imediata do conselho é imperativa antes que a tinta seque.',
          action:
            'Acione o consultor imediatamente pelo WhatsApp para contenção diplomática.',
        },
      },
      findings: {
        nonLatinOrSymbol:
          'Presença de números, símbolos ou caracteres incompatíveis com registros civis serenos.',
        excessiveLength:
          'Extensão acima do ideal: risco elevado de truncamento em documentos, crachás e listas de chamada.',
        tooShort:
          'Estrutura excessivamente curta: sujeita a confusão auditiva e apelidos improvisados.',
        compoundOverload:
          'Composição longa demais: múltiplas partículas aumentam o atrito na assinatura e no uso diário.',
        exoticConsonants:
          'Densidade elevada de grafias exóticas (K, W, Y, H silencioso ou agrupamentos raros) exigindo soletração recorrente.',
        doubleLetters:
          'Duplicação ornamental de letras detectada: forte risco de erros em cadastros bancários e escolares.',
        heavyDiacriticsOrPunctuation:
          'Uso incomum de hífens, apóstrofos ou sinais gráficos que elevam a fricção em sistemas internacionais.',
        awkwardInitials: (initials) =>
          `Alerta de iniciais combinadas (${initials}): combinação sensível identificada junto ao sobrenome.`,
        surnameRhyme:
          'Eco fonético ou rima involuntária detectada entre o prenome e o sobrenome informado.',
        cleanClassic:
          'Grafia direta, memorável e de leitura imediata sem necessidade de soletração.',
        internationalReadable:
          'Boa estabilidade de pronúncia entre português, inglês e espanhol.',
      },
      whatsapp: {
        directMessage:
          'Olá, equipe da Desnomeia Ltda. Gostaria de agendar uma consultoria personalizada confidencial para registro de novo nome antes que seja tarde.',
        dossierMessage: ({ name, surname, tierName, riskScore, severityLabel, dossierCode }) =>
          `Olá, Desnomeia Ltda! Solicito consultoria personalizada confidencial.\n\n• Protocolo: ${dossierCode}\n• Modalidade: ${tierName}\n• Nome cogitado: ${name}${surname ? ` ${surname}` : ''}\n• Índice preliminar de risco: ${riskScore}/100 (${severityLabel})\n\nPrecisamos desnomear antes que seja tarde.`,
      },
    },
  },

  en: {
    htmlLang: 'en',
    metaTitle: 'Desnomeia Ltda — Un-name before it is too late',
    metaDescription:
      'Bespoke advisory for new name registration. We do not sell names; we prevent 18 years of bullying.',
    skipToContent: 'Skip to main content',
    brandName: 'DESNOMEIA',
    brandSuffix: 'LTDA.',
    nav: {
      precedents: 'Precedents',
      protocol: 'Protocol',
      advisory: 'Advisory',
      directConcierge: 'WhatsApp Desk',
      languageLabel: 'Select language',
    },
    hero: {
      headlineStart: 'Desnomeia',
      headlineEmphasis: 'before it is too late.',
      serviceLine: 'Bespoke advisory for new name registration.',
      lead: 'A flash of civil-registry creativity lasts a lifetime. We intervene discreetly between parental euphoria and permanent ink on the birth certificate.',
      primaryCta: 'Request private advisory',
      secondaryCta: 'Review precedents',
      intakeTitle: 'Immediate Onomastic Screening',
      intakeNameLabel: 'Proposed given name',
      intakeNamePlaceholder: 'e.g. Braxleigh-Lynne, Xäevier, Clara...',
      intakeSurnameLabel: 'Family surname (optional)',
      intakeSurnamePlaceholder: 'e.g. Sterling, Vance, Silva',
      intakeAction: 'Issue preliminary verdict',
      intakeEmptyError: 'Enter at least one given name to initiate screening.',
      intakeExampleLabel: 'Test specimens:',
      intakeExamples: ['Braxleigh-Lynne', 'Kallebhy', 'Clara'],
    },
    manifesto: {
      quoteLineOne: 'We do not sell names.',
      quoteLineTwo: 'We prevent 18 years of bullying.',
      bodyLeft:
        'Every generation believes it has invented an unforgettable spelling. Five years later, classroom roll call, an inescapable nickname, and a lifetime of spelling silent consonants prove otherwise.',
      bodyRight:
        'Desnomeia Ltda operates as a private council for biographical protection. We never question parental devotion — we quietly audit whether a name endures from the schoolyard to an international boardroom.',
      signature: 'Desnomeia Ltda · Private Onomastic Council',
    },
    precedents: {
      title: 'Intervention Precedents',
      subtitle:
        'Surgical refinements delivered prior to civil registration.',
      disclaimer:
        'Editorial note: the cases below are illustrative specimens authored to demonstrate the advisory methodology.',
      colCode: 'Dossier',
      colProposed: 'Initial Proposal',
      colRisk: 'Identified Risk Vector',
      colApproved: 'Approved Registry',
      colIndex: 'Index',
      cases: [
        {
          code: 'DSN-014',
          proposed: 'Braxleigh-Lynne',
          riskVector: 'Severe orthographic friction; guaranteed lifelong spelling tax',
          approved: 'Beatrice',
          riskScore: 93,
        },
        {
          code: 'DSN-027',
          proposed: 'Xäevier-Khaos',
          riskVector: 'Ornamental diacritics and theatrical load unfit for fifth grade',
          approved: 'Xavier',
          riskScore: 96,
        },
        {
          code: 'DSN-039',
          proposed: 'Kallebhy-Thierry',
          riskVector: 'Clustered silent letters with high pronunciation drift',
          approved: 'Caleb',
          riskScore: 91,
        },
        {
          code: 'DSN-052',
          proposed: 'Yhonny-Bravø',
          riskVector: 'Literal pop-culture anchor triggering immediate nickname lock-in',
          approved: 'Julian',
          riskScore: 98,
        },
        {
          code: 'DSN-068',
          proposed: 'Clara Sterling',
          riskVector: 'Unimpeachable cadence, instant spelling, global poise',
          approved: 'Clara Sterling',
          riskScore: 7,
        },
      ],
    },
    protocol: {
      title: 'The Four-Stage Protocol',
      lead: 'Before a single registry signature is placed, every candidate passes through quiet stress-testing.',
      stages: [
        {
          step: '01',
          title: 'Schoolyard Forensics',
          description:
            'Exhaustive mapping of involuntary rhymes, playground taunts, hostile abbreviations, and unfortunate initials with the family surname.',
        },
        {
          step: '02',
          title: 'Cross-Border Phonetic Stress',
          description:
            'Pronunciation testing across English, Portuguese, and Spanish — from boarding gates to foreign university rosters.',
        },
        {
          step: '03',
          title: 'Spelling & Career Audit',
          description:
            'Phone-line friction checks, form-field durability, and executive-signature dignity projected thirty-five years forward.',
        },
        {
          step: '04',
          title: 'Sovereign Verdict & Un-Naming',
          description:
            'A confidential written verdict offering dignified replacements that honor the parents’ intent without exposing the child.',
        },
      ],
    },
    advisory: {
      title: 'Private Advisory Desk',
      lead: 'Select an engagement tier, screen your candidate name, and dispatch the dossier directly to our senior consultant on WhatsApp.',
      selectTierLabel: 'Engagement Tiers',
      selectedBadge: 'Selected',
      tiers: [
        {
          id: 'emergency',
          code: 'TIER I',
          name: 'Emergency Registry Intervention',
          turnaround: 'Priority desk · Same day',
          summary:
            'For expectant parents already en route to the civil registry or relatives on an urgent diplomatic rescue.',
          deliverables: [
            'Immediate bullying and nickname risk audit',
            'Up to 3 refined alternatives preserving emotional cadence',
            'Direct, discreet WhatsApp briefing',
          ],
        },
        {
          id: 'gestation',
          code: 'TIER II',
          name: 'Bespoke Pregnancy Curation',
          turnaround: 'Full dossier · 48 hours',
          summary:
            'Structured evaluation of your shortlist paired carefully against family surnames and sibling cadence.',
          deliverables: [
            'Comparative review of up to 5 candidate names',
            'Initials, rhyme-collision, and namesake verification',
            'End-to-end phonetic longevity report',
          ],
        },
        {
          id: 'sovereign',
          code: 'TIER III',
          name: 'International Private Council',
          turnaround: 'Tailored mandate · PT / EN / ES',
          summary:
            'Designed for multilingual families demanding effortless elegance across passports and continents.',
          deliverables: [
            'Tri-lingual phonetic stress test (EN / PT / ES)',
            'Cross-cultural double-meaning screening',
            'Private closing session with our lead advisor',
          ],
        },
      ],
      dossierTitle: 'Consultation Dossier',
      dossierEmptyHint:
        'Enter a candidate name to generate a live onomastic verdict before opening WhatsApp.',
      dossierNameLabel: 'Name to audit',
      dossierSurnameLabel: 'Surname (optional)',
      dossierEvaluateBtn: 'Update verdict',
      dossierIndexLabel: 'Schoolyard Risk Index',
      dossierCodeLabel: 'Reference',
      dossierFindingsLabel: 'Council Observations',
      dossierSendWhatsApp: 'Dispatch Dossier via WhatsApp',
      dossierDirectWhatsApp: 'Contact Consultant Directly',
      dossierWhatsAppNote:
        'Direct WhatsApp desk (+55 45 99132-5244) with a pre-composed message in your selected language.',
      severityLabels: {
        low: 'Approved · Low Risk',
        moderate: 'Moderate Caution',
        elevated: 'Elevated Risk · Revise',
        critical: 'Urgent Intervention',
      },
    },
    footer: {
      tagline: 'Desnomeia before it is too late.',
      domainLabel: 'desnomeia.tccodes.com.br',
      conciergeLabel: 'WhatsApp Concierge',
      rights: 'Desnomeia Ltda. All rights reserved.',
      hiveAriaLabel: 'Secret JUSC hive seal',
      hiveHint: 'Hive Seal',
    },
    easterEgg: {
      title: 'Origin of the Hive · JUSC',
      subtitle: 'Jovens Unidos Seguindo Cristo',
      body: 'The black, the yellow, and this entire advisory began where Abelhhudo calls home.',
      closeAria: 'Dismiss JUSC tribute',
      secondsUnit: 's',
      emblemAlt: 'Official JUSC emblem — Jovens Unidos Seguindo Cristo',
      mascotAlt: 'Abelhhudo, the official JUSC bee mascot waving',
    },
    onomastics: {
      verdicts: {
        low: {
          title: 'Timeless & Resilient Profile',
          summary:
            'Clean phonetic architecture, effortless spelling, and strong durability across the next eighteen school years.',
          action:
            'Ready for final surname verification with our advisor on WhatsApp.',
        },
        moderate: {
          title: 'Orthographic Refinement Advised',
          summary:
            'Distinguished intent, yet subtle friction points may invite repeated spelling clarifications.',
          action:
            'A discreet calibration is recommended prior to official filing.',
        },
        elevated: {
          title: 'High Lifelong Spelling Burden',
          summary:
            'Unusual letter combinations or cadence elevate the likelihood of roll-call mispronunciations and nicknames.',
          action:
            'Private advisory strongly recommended before civil registration.',
        },
        critical: {
          title: 'Civil Registry Red Alert',
          summary:
            'Critical 18-year bullying exposure detected. Immediate council intervention is advised before the ink dries.',
          action:
            'Summon our senior consultant on WhatsApp immediately.',
        },
      },
      findings: {
        nonLatinOrSymbol:
          'Digits, symbols, or ornamental glyphs detected — incompatible with dignified civil records.',
        excessiveLength:
          'Excessive character length: prone to truncation on passports, rosters, and official forms.',
        tooShort:
          'Overly brief structure: vulnerable to auditory confusion and impromptu nicknames.',
        compoundOverload:
          'Extended compound structure: multiple tokens add daily friction to signatures and introductions.',
        exoticConsonants:
          'High density of exotic lettering (K, W, Y, silent H, or rare clusters) driving lifelong spelling corrections.',
        doubleLetters:
          'Ornamental letter doubling detected: elevated risk of clerical errors across official databases.',
        heavyDiacriticsOrPunctuation:
          'Unusual hyphens, apostrophes, or diacritics creating cross-border registry friction.',
        awkwardInitials: (initials) =>
          `Combined initials alert (${initials}): sensitive monogram detected with the supplied surname.`,
        surnameRhyme:
          'Involuntary phonetic rhyme or echo detected between the given name and surname.',
        cleanClassic:
          'Transparent spelling and immediate visual poise with zero spelling friction.',
        internationalReadable:
          'Stable pronunciation profile across English, Portuguese, and Spanish.',
      },
      whatsapp: {
        directMessage:
          'Hello Desnomeia Ltda. I would like to schedule a confidential bespoke name-registration consultation before it is too late.',
        dossierMessage: ({ name, surname, tierName, riskScore, severityLabel, dossierCode }) =>
          `Hello Desnomeia Ltda! I am requesting a confidential private consultation.\n\n• Reference: ${dossierCode}\n• Tier: ${tierName}\n• Candidate Name: ${name}${surname ? ` ${surname}` : ''}\n• Preliminary Risk Index: ${riskScore}/100 (${severityLabel})\n\nPlease help us un-name before it is too late.`,
      },
    },
  },

  es: {
    htmlLang: 'es',
    metaTitle: 'Desnomeia Ltda — Desnombra antes de que sea tarde',
    metaDescription:
      'Consultoría personalizada para el registro de nuevos nombres. No vendemos nombres, evitamos 18 años de bullying.',
    skipToContent: 'Saltar al contenido principal',
    brandName: 'DESNOMEIA',
    brandSuffix: 'LTDA.',
    nav: {
      precedents: 'Precedentes',
      protocol: 'Protocolo',
      advisory: 'Consultoría',
      directConcierge: 'Hablar por WhatsApp',
      languageLabel: 'Seleccionar idioma',
    },
    hero: {
      headlineStart: 'Desnomeia',
      headlineEmphasis: 'antes de que sea tarde.',
      serviceLine: 'Consultoría personalizada para el registro de nuevos nombres.',
      lead: 'Un impulso creativo en el registro civil dura toda la vida. Intervenimos con discreción entre la emoción de la maternidad y la tinta definitiva del acta.',
      primaryCta: 'Iniciar consulta privada',
      secondaryCta: 'Ver precedentes',
      intakeTitle: 'Evaluación Onomástica Inmediata',
      intakeNameLabel: 'Nombre contemplado',
      intakeNamePlaceholder: 'Ej.: Yhonny-Bravø, Kallebhy, Mateo...',
      intakeSurnameLabel: 'Apellido familiar (opcional)',
      intakeSurnamePlaceholder: 'Ej.: Morales, Silva, Herrera',
      intakeAction: 'Emitir dictamen preliminar',
      intakeEmptyError: 'Ingrese al menos un nombre para iniciar la evaluación.',
      intakeExampleLabel: 'Probar especímenes:',
      intakeExamples: ['Yhonny-Bravø', 'Xäevier-Khaos', 'Mateo'],
    },
    manifesto: {
      quoteLineOne: 'No vendemos nombres.',
      quoteLineTwo: 'Evitamos 18 años de bullying.',
      bodyLeft:
        'Cada generación cree haber inventado una grafía inolvidable. Cinco años después, la lista escolar, un apodo irreversible y una vida entera deletreando consonantes mudas demuestran lo contrario.',
      bodyRight:
        'Desnomeia Ltda opera como un consejo privado de protección biográfica. Nunca cuestionamos el amor paterno — auditamos en silencio si el nombre resiste del patio escolar a una sala de juntas internacional.',
      signature: 'Desnomeia Ltda · Consejo Onomástico Privado',
    },
    precedents: {
      title: 'Precedentes de Intervención',
      subtitle:
        'Refinamientos quirúrgicos realizados antes del registro civil definitivo.',
      disclaimer:
        'Nota editorial: los expedientes siguientes son especímenes ilustrativos diseñados para demostrar nuestra metodología de consultoría.',
      colCode: 'Expediente',
      colProposed: 'Propuesta Original',
      colRisk: 'Vector de Riesgo Detectado',
      colApproved: 'Registro Aprobado',
      colIndex: 'Índice',
      cases: [
        {
          code: 'DSN-014',
          proposed: 'Yhonny-Bravø',
          riskVector: 'Referencia literal con fijación inmediata de apodo escolar',
          approved: 'Mateo',
          riskScore: 98,
        },
        {
          code: 'DSN-027',
          proposed: 'Xäevier-Khaos',
          riskVector: 'Diacríticos ornamentales y carga teatral incompatible con primaria',
          approved: 'Javier',
          riskScore: 96,
        },
        {
          code: 'DSN-039',
          proposed: 'Kallebhy-Thierry',
          riskVector: 'Fricción ortográfica severa y deletreo de por vida garantizado',
          approved: 'Caleb',
          riskScore: 91,
        },
        {
          code: 'DSN-052',
          proposed: 'Braxleigh-Lynne',
          riskVector: 'Alta ambigüedad fonética en contextos hispanohablantes',
          approved: 'Lucía',
          riskScore: 93,
        },
        {
          code: 'DSN-068',
          proposed: 'Mateo Herrera',
          riskVector: 'Cadencia impecable, lectura limpia y porte internacional',
          approved: 'Mateo Herrera',
          riskScore: 8,
        },
      ],
    },
    protocol: {
      title: 'El Protocolo de Cuatro Etapas',
      lead: 'Antes de firmar cualquier acta civil, cada candidato supera una auditoría silenciosa y exhaustiva.',
      stages: [
        {
          step: '01',
          title: 'Forense de Patio Escolar',
          description:
            'Mapeo de rimas involuntarias, juegos de palabras, abreviaturas hostiles e iniciales comprometedoras junto al apellido.',
        },
        {
          step: '02',
          title: 'Estrés Fonético Internacional',
          description:
            'Simulación de pronunciación en español, portugués e inglés — desde mostradores de aeropuerto hasta universidades extranjeras.',
        },
        {
          step: '03',
          title: 'Auditoría de Deletreo y Carrera',
          description:
            'Prueba de fricción telefónica, legibilidad en documentos oficiales y dignidad ejecutiva proyectada a los 35 años.',
        },
        {
          step: '04',
          title: 'Dictamen Soberano y Desnombramiento',
          description:
            'Entrega del veredicto confidencial con alternativas elegantes que honran el afecto familiar sin exponer al menor.',
        },
      ],
    },
    advisory: {
      title: 'Mesa de Consultoría Privada',
      lead: 'Seleccione la modalidad de acompañamiento, evalúe el nombre propuesto y envíe el expediente directamente a nuestro consultor por WhatsApp.',
      selectTierLabel: 'Modalidades de Servicio',
      selectedBadge: 'Seleccionado',
      tiers: [
        {
          id: 'emergency',
          code: 'NIVEL I',
          name: 'Intervención de Emergencia en Registro',
          turnaround: 'Atención prioritaria · Mismo día',
          summary:
            'Para padres camino al registro civil o familiares en una misión diplomática de último minuto.',
          deliverables: [
            'Auditoría inmediata de riesgo de bullying y apodos',
            'Hasta 3 alternativas nobles preservando la musicalidad',
            'Asesoría directa y confidencial por WhatsApp',
          ],
        },
        {
          id: 'gestation',
          code: 'NIVEL II',
          name: 'Curaduría Personalizada de Gestación',
          turnaround: 'Expediente completo · 48 horas',
          summary:
            'Análisis profundo de su lista corta combinada con los apellidos familiares.',
          deliverables: [
            'Evaluación comparativa de hasta 5 nombres candidatos',
            'Revisión de iniciales, cadencia con apellidos y homónimos',
            'Informe de elegancia fonética para toda la etapa escolar',
          ],
        },
        {
          id: 'sovereign',
          code: 'NIVEL III',
          name: 'Consejo Privado Internacional',
          turnaround: 'Mandato a medida · PT / EN / ES',
          summary:
            'Para familias bilingües o globales que exigen fluidez natural en múltiples idiomas y pasaportes.',
          deliverables: [
            'Estrés fonético trilingüe (ES / PT / EN)',
            'Control de connotaciones culturales no deseadas en el exterior',
            'Sesión ejecutiva de cierre con nuestro consultor sénior',
          ],
        },
      ],
      dossierTitle: 'Expediente de Remisión',
      dossierEmptyHint:
        'Escriba un nombre para generar el dictamen onomástico antes de abrir WhatsApp.',
      dossierNameLabel: 'Nombre para auditar',
      dossierSurnameLabel: 'Apellido (opcional)',
      dossierEvaluateBtn: 'Actualizar dictamen',
      dossierIndexLabel: 'Índice de Riesgo Escolar',
      dossierCodeLabel: 'Expediente',
      dossierFindingsLabel: 'Observaciones del Consejo',
      dossierSendWhatsApp: 'Enviar Expediente por WhatsApp',
      dossierDirectWhatsApp: 'Contactar al Consultor Directamente',
      dossierWhatsAppNote:
        'Atención directa vía WhatsApp (+55 45 99132-5244) con mensaje redactado automáticamente en su idioma.',
      severityLabels: {
        low: 'Aprobado · Riesgo Bajo',
        moderate: 'Precaución Moderada',
        elevated: 'Riesgo Elevado · Revisar',
        critical: 'Intervención Urgente',
      },
    },
    footer: {
      tagline: 'Desnomeia antes de que sea tarde.',
      domainLabel: 'desnomeia.tccodes.com.br',
      conciergeLabel: 'Concierge WhatsApp',
      rights: 'Desnomeia Ltda. Todos los derechos reservados.',
      hiveAriaLabel: 'Sello secreto de la colmena JUSC',
      hiveHint: 'Sello Colmena',
    },
    easterEgg: {
      title: 'Origen de la Colmena · JUSC',
      subtitle: 'Jovens Unidos Seguindo Cristo',
      body: 'El negro, el amarillo y esta consultoría nacieron donde Abelhhudo tiene su hogar.',
      closeAria: 'Cerrar homenaje JUSC',
      secondsUnit: 's',
      emblemAlt: 'Emblema oficial del grupo JUSC — Jovens Unidos Seguindo Cristo',
      mascotAlt: 'Abelhhudo, mascota oficial de JUSC saludando',
    },
    onomastics: {
      verdicts: {
        low: {
          title: 'Perfil Clásico y Seguro',
          summary:
            'Arquitectura fonética equilibrada, grafía transparente y excelente solidez para los próximos 18 años escolares.',
          action:
            'Listo para validación final con apellido a través de WhatsApp.',
        },
        moderate: {
          title: 'Ajuste Ortográfico Recomendado',
          summary:
            'Propuesta con personalidad, pero con fricciones sutiles que pueden requerir aclaraciones de escritura.',
          action:
            'Recomendamos una calibración discreta antes de acudir al registro.',
        },
        elevated: {
          title: 'Alto Riesgo de Deletreo de por Vida',
          summary:
            'Combinaciones poco habituales elevan la probabilidad de errores al pasar lista y apodos persistentes.',
          action:
            'Se recomienda firmemente consultoría privada antes del registro definitivo.',
        },
        critical: {
          title: 'Alerta Roja de Registro Civil',
          summary:
            'Exposición crítica a 18 años de bullying detectada. Se aconseja intervención inmediata del consejo antes de firmar.',
          action:
            'Contacte a nuestro consultor sénior por WhatsApp de inmediato.',
        },
      },
      findings: {
        nonLatinOrSymbol:
          'Se detectaron números, símbolos o glifos ornamentales incompatibles con un registro civil sereno.',
        excessiveLength:
          'Extensión excesiva: alto riesgo de truncamiento en pasaportes, listas y documentos oficiales.',
        tooShort:
          'Estructura demasiado breve: vulnerable a confusiones auditivas y apodos improvisados.',
        compoundOverload:
          'Estructura compuesta extensa: múltiples partículas añaden fricción diaria a la firma y al trato cotidiano.',
        exoticConsonants:
          'Alta densidad de grafías exóticas (K, W, Y, H muda o combinaciones inusuales) que obligan a deletrear constantemente.',
        doubleLetters:
          'Duplicación ornamental de letras detectada: elevado riesgo de errores en registros escolares y bancarios.',
        heavyDiacriticsOrPunctuation:
          'Uso inusual de guiones, apóstrofos o diacríticos que generan fricción en sistemas internacionales.',
        awkwardInitials: (initials) =>
          `Alerta de iniciales combinadas (${initials}): sigla sensible detectada junto al apellido.`,
        surnameRhyme:
          'Rima o eco fonético involuntario detectado entre el nombre propuesto y el apellido.',
        cleanClassic:
          'Grafía directa, memorable y de lectura inmediata sin necesidad de deletreo.',
        internationalReadable:
          'Pronunciación estable entre español, portugués e inglés.',
      },
      whatsapp: {
        directMessage:
          'Hola, equipo de Desnomeia Ltda. Quisiera agendar una consultoría personalizada confidencial para registro de nuevo nombre antes de que sea tarde.',
        dossierMessage: ({ name, surname, tierName, riskScore, severityLabel, dossierCode }) =>
          `¡Hola, Desnomeia Ltda! Solicito una consultoría personalizada confidencial.\n\n• Expediente: ${dossierCode}\n• Modalidad: ${tierName}\n• Nombre contemplado: ${name}${surname ? ` ${surname}` : ''}\n• Índice preliminar de riesgo: ${riskScore}/100 (${severityLabel})\n\nNecesitamos desnombrar antes de que sea tarde.`,
      },
    },
  },
};
