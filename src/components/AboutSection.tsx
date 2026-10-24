import { photos } from '../config/business'

export default function AboutSection() {
  return (
    <section id="sobre" className="bg-ink-soft py-20 md:py-28" aria-labelledby="sobre-titulo">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:gap-20 md:px-8">
        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <div className="absolute -left-3 -top-3 h-full w-full border border-gold/60 md:-left-5 md:-top-5" aria-hidden="true" />
          <img
            src={photos.about.src}
            alt={photos.about.alt}
            loading="lazy"
            decoding="async"
            className="relative aspect-[4/5] w-full object-cover grayscale"
          />
        </div>
        <div>
          <p className="eyebrow mb-5">Sobre</p>
          <h2 id="sobre-titulo" className="text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Estilo em cada <span className="text-gold">detalhe.</span>
          </h2>
          <span className="gold-rule my-7" aria-hidden="true" />
          <p className="max-w-lg text-base leading-relaxed text-ash md:text-lg">
            A Dom Bassilio é uma barbearia para quem valoriza estilo, personalidade e cuidado com a própria imagem. Um
            espaço dedicado a renovar o visual e proporcionar uma experiência agradável em cada atendimento.
          </p>
        </div>
      </div>
    </section>
  )
}
