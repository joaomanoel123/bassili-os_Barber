import { business } from '../config/business'
import { buildWhatsAppLink } from '../lib/whatsapp'
import { InstagramIcon, WhatsAppIcon } from './icons'

export default function ContactSection() {
  return (
    <section id="contato" className="grain relative bg-ink-soft py-24 md:py-32" aria-labelledby="contato-titulo">
      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="eyebrow mb-5">Contato</p>
        <h2 id="contato-titulo" className="text-4xl leading-tight sm:text-5xl lg:text-6xl">
          Seu próximo visual <span className="text-gold">começa aqui.</span>
        </h2>
        <span className="gold-rule mx-auto my-7" aria-hidden="true" />
        <p className="mx-auto max-w-xl text-base leading-relaxed text-ash md:text-lg">
          Entre em contato com a Dom Bassilio e consulte a disponibilidade para seu próximo horário.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={buildWhatsAppLink(business.defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold w-full sm:w-auto"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Falar pelo WhatsApp
          </a>
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline w-full sm:w-auto"
          >
            <InstagramIcon className="h-4 w-4" />
            {business.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  )
}
