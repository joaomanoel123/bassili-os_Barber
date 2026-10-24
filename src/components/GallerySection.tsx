import { photos } from '../config/business'

const layout = [
  'col-span-2 md:row-span-2',
  '',
  '',
  '',
  '',
]

export default function GallerySection() {
  return (
    <section id="galeria" className="bg-ink-soft py-20 md:py-28" aria-labelledby="galeria-titulo">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="eyebrow mb-5">Galeria</p>
        <h2 id="galeria-titulo" className="max-w-2xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
          Cortes, barba e <span className="text-gold">detalhes.</span>
        </h2>
        <span className="gold-rule my-7" aria-hidden="true" />

        <ul className="mt-10 grid grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {photos.gallery.map((p, i) => (
            <li key={p.src} className={`group relative overflow-hidden ${layout[i] ?? ''}`}>
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                decoding="async"
                className="aspect-square h-full w-full object-cover grayscale transition-transform duration-700 md:aspect-auto md:group-hover:scale-105"
              />
              <span
                className="pointer-events-none absolute inset-2 border border-gold/0 transition-colors duration-300 group-hover:border-gold/70"
                aria-hidden="true"
              />
            </li>
          ))}
        </ul>
        {photos.gallery.some((p) => p.placeholder) && (
          <p className="mt-6 text-[0.65rem] uppercase tracking-[0.2em] text-ash/60">
            Imagens de demonstração — serão substituídas por fotos reais
          </p>
        )}
      </div>
    </section>
  )
}
