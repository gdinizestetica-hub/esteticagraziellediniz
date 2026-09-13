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
  { slug: '/depilacao-laser-guaruja/', number: '01', name: 'Depilação a laser', short: 'Tratamento para redução duradoura dos pelos, com avaliação e parâmetros ajustados a cada sessão.', cover: '/images/capa-depilacao-laser.jpg', cta: 'Conhecer a depilação' },
  { slug: '/drenagem-linfatica-guaruja/', number: '02', name: 'Drenagem Linfática', short: 'Drenagem Linfática Premium ou Tradicional, com atendimento corporal direcionado.', cover: '/images/capa-drenagem-linfatica.jpg', cta: 'Conhecer a drenagem' },
  { slug: '/limpeza-de-pele-guaruja/', number: '03', name: 'Limpeza de pele', short: 'Protocolo facial definido a partir das necessidades e do momento da sua pele.', cover: '/images/capa-limpeza-de-pele.jpg', cta: 'Conhecer a limpeza' }
];

export const whatsapp = (message: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
