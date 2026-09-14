export const blogPosts = [
  {
    slug: 'depilacao-a-laser-doi',
    date: '09 de julho de 2026',
    isoDate: '2026-07-09',
    category: 'Depilação a laser',
    title: 'Depilação a Laser dói? Descubra o que realmente influencia o desconforto',
    excerpt: 'A sensação varia de pessoa para pessoa, mas entender os fatores que influenciam o desconforto ajuda a começar o tratamento com mais segurança.',
    sections: [
      ['Depilação a laser dói?', 'O medo da dor é um dos principais motivos que fazem as pessoas adiarem o início do tratamento de depilação a laser. É muito comum ouvir relatos variados: enquanto algumas pessoas afirmam que o procedimento é totalmente tranquilo, outras mencionam um incômodo agudo. A sensação varia de pessoa para pessoa, mas com as tecnologias atuais o procedimento está longe daquele sofrimento associado aos métodos antigos. O laser age diretamente na raiz do pelo e, a cada aplicação, os fios tendem a nascer mais finos, em menor quantidade e com crescimento lento.'],
      ['Por que algumas pessoas sentem desconforto?', 'O pequeno incômodo que pode ocorrer acontece porque o feixe de luz do laser gera um aquecimento rápido focado na raiz do pelo. Essa sensação costuma ser descrita como uma leve picada quente ou um leve beliscão que dura apenas uma fração de segundo. Assim que a ponteira se move para a próxima área, a sensação desaparece.'],
      ['O que influencia na intensidade da dor?', 'A sensibilidade individual, o limiar de dor, a região do corpo, a espessura e a cor do pelo influenciam a percepção. Áreas como virilha, região perianal e buço tendem a ser mais sensíveis do que pernas, braços e costas. Na primeira sessão, fios grossos e densos podem gerar maior percepção de calor; conforme o tratamento evolui, o desconforto tende a diminuir.'],
      ['Como diminuir o desconforto durante as sessões?', 'Na clínica de estética Grazielle Diniz, na Enseada, Guarujá, o conforto é priorizado com equipamento moderno equipado com ponteira de resfriamento. A tecnologia resfria a superfície da pele antes e durante o disparo, ajudando a reduzir o incômodo e proteger a derme.']
    ]
  },
  {
    slug: 'quantas-sessoes-depilacao-laser',
    date: '05 de julho de 2026',
    isoDate: '2026-07-05',
    category: 'Depilação a laser',
    title: 'Quantas sessões de depilação a laser são necessárias para ter bons resultados?',
    excerpt: 'O número de sessões depende do ciclo de crescimento dos pelos, da área tratada e das características individuais de cada pessoa.',
    sections: [
      ['Quantas sessões são necessárias?', 'Uma das primeiras perguntas de quem decide iniciar o tratamento é: “Quantas sessões vou precisar fazer?”. Em média, são necessárias de 8 a 10 sessões para obter uma redução importante e duradoura dos pelos. Esse número não é uma regra rígida e pode variar conforme a área tratada, o tipo de pelo e as características hormonais de cada cliente.'],
      ['O ciclo de crescimento do pelo', 'Nossos pelos passam por três fases distintas: crescimento ativo, repouso e queda. O laser consegue atingir e enfraquecer o folículo com mais eficiência quando o pelo está na fase de crescimento ativo. Como nem todos os pelos estão na mesma fase ao mesmo tempo, são necessárias múltiplas sessões.'],
      ['Por que os intervalos são importantes?', 'Cada sessão é planejada para atingir os pelos que entraram na fase ativa naquele momento. Por isso, é indispensável respeitar intervalos que geralmente ficam entre 30 e 45 dias, conforme a área e a avaliação.'],
      ['O que esperar de cada fase?', 'Nas primeiras sessões, os pelos começam a nascer de forma mais lenta, falhada e fina. Entre as sessões intermediárias, grandes áreas podem ficar sem crescimento. Nas sessões finais, a aplicação é direcionada aos pelos remanescentes mais resistentes.']
    ]
  },
  {
    slug: 'praia-depilacao-a-laser-cuidados',
    date: '03 de julho de 2026',
    isoDate: '2026-07-03',
    category: 'Cuidados antes e depois',
    title: 'Pode ir à praia depois da depilação a laser? Saiba quais cuidados tomar',
    excerpt: 'No Guarujá, sol e mar fazem parte da rotina. Veja como conciliar a praia com o tratamento de depilação a laser.',
    sections: [
      ['Praia e depilação a laser combinam?', 'Não é recomendado ir à praia, tomar sol diretamente ou entrar no mar logo após uma sessão. O ideal é manter um intervalo seguro, conforme a orientação recebida na avaliação, para reduzir o risco de manchas ou irritações na pele sensibilizada.'],
      ['Por que o sol e o laser não combinam de imediato?', 'O laser é atraído pela melanina. Quando a pele está bronzeada ou queimada, há mais pigmento na superfície, o que pode aumentar o risco de uma reação indesejada. Após os disparos, a região também fica levemente aquecida e sensibilizada.'],
      ['Cuidados fundamentais no Guarujá', 'Use protetor solar de alto fator nas áreas expostas, evite sol intenso e siga o intervalo indicado pela profissional. Regiões cobertas, como virilha e axilas, ainda devem seguir as orientações específicas para a pele tratada.']
    ]
  },
  {
    slug: 'laser-ou-cera',
    date: '01 de julho de 2026',
    isoDate: '2026-07-01',
    category: 'Comparativos',
    title: 'Laser ou cera: qual método de remoção de pelos vale mais a pena?',
    excerpt: 'Compare rotina, frequência, conforto e cuidados para escolher o método que faz mais sentido para você.',
    sections: [
      ['Laser ou cera?', 'A escolha envolve dor, custo e o tempo gasto mensalmente. A cera é um método tradicional e acessível, enquanto a depilação a laser é procurada por quem busca praticidade e redução duradoura dos pelos.'],
      ['O custo-benefício', 'Uma sessão de cera pode parecer mais barata, mas exige repetição a cada 20 ou 30 dias. O laser envolve um ciclo planejado de sessões e, depois, possíveis manutenções esporádicas. A melhor escolha depende da avaliação, do objetivo e do planejamento individual.'],
      ['Saúde da pele e foliculite', 'A cera pode provocar atrito, irritação, queimaduras e manchas em algumas pessoas. Ao reduzir a necessidade de arrancar os pelos pela raiz, o laser pode ajudar quem sofre com foliculite, sempre com parâmetros adequados e avaliação profissional.']
    ]
  }
];

export const getBlogPost = (slug: string) => blogPosts.find((post) => post.slug === slug);
