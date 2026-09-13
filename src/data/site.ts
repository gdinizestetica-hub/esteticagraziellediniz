export const site = {
  name: 'Grazielle Diniz Estética',
  professional: 'Grazielle Diniz',
  domain: 'https://esteticagraziellediniz.com.br',
  phone: '(13) 99163-0136',
  whatsapp: '5513991630136',
  address: 'Av. Dom Pedro I, 1785, sala 406 — Enseada, Guarujá/SP',
  hours: 'Segunda a sexta: 08h às 21h; sábado: 08h às 18h',
  reference: 'Próximo ao Extra, com elevador, ambiente climatizado e fácil acesso.',
  image: '/images/foto-da-profissional-esteticista-grazielle-diniz-guaruja.png',
  logo: '/images/logotipo-fundo-transparente.png'
};

export const treatments = [
  { slug: '/depilacao-laser-guaruja/', number: '01', name: 'Depilação a laser', short: 'Sessões planejadas para diferentes fototipos, com avaliação e orientação em cada etapa.', cta: 'Conhecer a depilação' },
  { slug: '/drenagem-linfatica-guaruja/', number: '02', name: 'Drenagem premium', short: 'Manobras manuais e atendimento direcionado para quem busca aliviar a sensação de inchaço.', cta: 'Conhecer a drenagem' },
  { slug: '/limpeza-de-pele-guaruja/', number: '03', name: 'Limpeza de pele', short: 'Um protocolo facial definido a partir das necessidades e do momento da sua pele.', cta: 'Conhecer a limpeza' }
];

export const whatsapp = (message: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
