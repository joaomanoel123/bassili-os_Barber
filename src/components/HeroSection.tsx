import { business, photos } from '../config/business'
import { buildWhatsAppLink } from '../lib/whatsapp'
import { WhatsAppIcon } from './icons'

export default function HeroSection() {
  return (
    <section id="inicio" className="grain relative isolate overflow-hidden bg-ink">
      <div className="grid min-h-[100svh] grid-rows-[auto_1fr] md:grid-cols-2 md:grid-rows-1">
        {/* Imagem: topo no mobile, direita no desktop */}
        <div className="relative order-1 h-[34svh] md:order-2 md:h-auto">
          <img
            src={photos.hero.src}
            alt={photos.hero.alt}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/40 md:bg-gradient-to-r md:from-ink md:via-ink/10 md:to-transparent" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 to-transparent md:hidden" aria-hidden="true" />
        </div>

        {/* Texto */}
        <div className="relative order-2 flex flex-col justify-center px-5 pb-28 pt-6 md:order-1 md:py-32 md:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] md:pr-8 md:pb-32">
          <p className="eyebrow mb-6 flex items-center gap-4">
            <span className="gold-rule" aria-hidden="true" />
            Barbearia • {business.city}, {business.state}
          </p>
          <h1 className="text-[2.6rem] leading-[0.98] tracking-tight text-bone sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            Seu estilo.
            <span className="block text-gold">Sua identidade.</span>
            Seu melhor corte.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ash md:text-lg">
            Mais do que um corte, um momento para cuidar do seu estilo. Conheça a Dom Bassilio.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={buildWhatsAppLink('Olá! Vim pelo site da Dom Bassilio e gostaria de agendar um horário.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Agendar pelo WhatsApp
            </a>
            <a href="#sobre" className="btn-outline">
              Conhecer a barbearia
            </a>
          </div>
          {photos.hero.placeholder && (
            <p className="mt-8 text-[0.65rem] uppercase tracking-[0.2em] text-ash/60">Imagem de demonstração</p>
          )}
        </div>
      </div>
    </section>
  )
}
