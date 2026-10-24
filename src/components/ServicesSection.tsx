import { MessageCircle } from 'lucide-react'
import { business, services } from '../config/business'
import { buildWhatsAppLink, serviceMessage } from '../lib/whatsapp'

export default function ServicesSection() {
  return (
    <section id="servicos" className="bg-ink py-20 md:py-28" aria-labelledby="servicos-titulo">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="eyebrow mb-5">Serviços</p>
        <h2 id="servicos-titulo" className="max-w-2xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
          Encontre seu <span className="text-gold">estilo.</span>
        </h2>
        <span className="gold-rule my-7" aria-hidden="true" />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.id} className="flex flex-col border border-bone/10 bg-ink-soft/40 p-7 transition-colors hover:border-gold/50 md:p-9">
              <h3 className="text-2xl text-bone">{s.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ash">{s.description}</p>
              <dl className="mt-6 space-y-1 border-t border-bone/10 pt-5 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="sr-only">Preço</dt>
                  <dd className={s.price ? 'font-semibold text-gold' : 'text-ash'}>{s.price ?? business.priceFallback}</dd>
                </div>
                {s.duration && (
                  <div className="flex justify-between gap-4">
                    <dt className="text-ash">Duração</dt>
                    <dd className="text-bone">{s.duration}</dd>
                  </div>
                )}
              </dl>
              <a
                href={buildWhatsAppLink(serviceMessage(s.name))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline mt-6 w-full"
                aria-label={`Agendar ${s.name} pelo WhatsApp`}
              >
                <MessageCircle size={16} aria-hidden="true" />
                Agendar
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
