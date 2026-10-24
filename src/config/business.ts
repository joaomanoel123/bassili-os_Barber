/**
 * Configuração central da Dom Bassilio.
 * Edite SOMENTE este arquivo para atualizar textos comerciais, serviços e imagens.
 * Campos opcionais (price, duration) ficam ocultos enquanto não forem preenchidos.
 */

/** Resolve arquivos de /public respeitando o caminho base (necessário no GitHub Pages). */
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export interface Service {
  id: string
  name: string
  description: string
  /** Opcional. Ex.: "R$ 00,00". Se vazio, exibe "Consulte pelo WhatsApp". */
  price?: string
  /** Opcional. Ex.: "40 min". Se vazio, a duração não é exibida. */
  duration?: string
}

export interface PhotoSlot {
  src: string
  alt: string
  /** true enquanto a imagem for de demonstração (substitua por fotos reais). */
  placeholder: boolean
}

export const business = {
  name: 'Dom Bassilio',
  brand: 'DOM BASSILIO',
  segment: 'Barbearia',
  city: 'Campinas',
  state: 'SP',
  tagline: 'Estilo, personalidade e cuidado em cada detalhe.',

  whatsappNumber: '5519992752154',
  whatsappDisplay: '+55 19 99275-2154',
  instagramHandle: '@dom.bassilio',
  instagramUrl: 'https://www.instagram.com/dom.bassilio/',

  defaultMessage: 'Olá! Vim pelo site da Dom Bassilio e gostaria de agendar um horário.',

  // URL pública do site (preencha após publicar, usada em Open Graph/canonical).
  siteUrl: '',

  /** Exibido quando o serviço não tem preço confirmado. */
  priceFallback: 'Consulte pelo WhatsApp',
}

/** Exemplos editáveis — não confirmam que todos os serviços são oferecidos. */
export const services: Service[] = [
  {
    id: 'corte-masculino',
    name: 'Corte masculino',
    description: 'Corte pensado para o seu estilo, com atenção às proporções e ao acabamento.',
  },
  {
    id: 'degrade-fade',
    name: 'Degradê / Fade',
    description: 'Transições limpas e precisas, ajustadas ao formato do seu rosto.',
  },
  {
    id: 'barba',
    name: 'Barba',
    description: 'Contorno e alinhamento da barba para um visual marcante e bem definido.',
  },
  {
    id: 'cabelo-barba',
    name: 'Cabelo + barba',
    description: 'O conjunto completo para renovar o visual em um único atendimento.',
  },
  {
    id: 'acabamento',
    name: 'Acabamento',
    description: 'Detalhes finais nas linhas do corte para manter o visual em dia.',
  },
]

/**
 * Imagens de demonstração (ilustrações locais em /public/images).
 * Para usar fotos reais: coloque os arquivos em public/images e troque `src`,
 * `alt` e `placeholder: false`.
 */
export const photos = {
  hero: {
    src: asset('images/hero-demo.svg'),
    alt: 'Ilustração de demonstração: barbeiro atendendo um cliente na cadeira, em preto e branco',
    placeholder: true,
  } satisfies PhotoSlot,
  about: {
    src: asset('images/about-demo.svg'),
    alt: 'Ilustração de demonstração: ferramentas clássicas de barbearia sobre fundo escuro',
    placeholder: true,
  } satisfies PhotoSlot,
  gallery: [
    {
      src: asset('images/gallery-1.svg'),
      alt: 'Ilustração de demonstração: tesoura e pente de barbeiro',
      placeholder: true,
    },
    {
      src: asset('images/gallery-2.svg'),
      alt: 'Ilustração de demonstração: navalha clássica',
      placeholder: true,
    },
    {
      src: asset('images/gallery-3.svg'),
      alt: 'Ilustração de demonstração: poste de barbearia listrado',
      placeholder: true,
    },
    {
      src: asset('images/gallery-4.svg'),
      alt: 'Ilustração de demonstração: cadeira de barbeiro em silhueta',
      placeholder: true,
    },
    {
      src: asset('images/gallery-5.svg'),
      alt: 'Ilustração de demonstração: máquina de corte',
      placeholder: true,
    },
  ] satisfies PhotoSlot[],
}

export const differentials = [
  { id: 'detalhes', title: 'Atenção aos detalhes', text: 'Cada linha e cada acabamento pensados com cuidado.' },
  { id: 'estilo', title: 'Estilo e personalidade', text: 'Um visual que conversa com a sua identidade.' },
  { id: 'cuidado', title: 'Cuidado em cada atendimento', text: 'Um momento dedicado a você, sem pressa.' },
  { id: 'acolhedora', title: 'Experiência acolhedora', text: 'Um ambiente pensado para você se sentir à vontade.' },
]

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
]
