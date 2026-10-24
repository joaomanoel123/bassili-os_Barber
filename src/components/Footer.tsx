import { business, navLinks } from '../config/business'
import { buildWhatsAppLink } from '../lib/whatsapp'
import { InstagramIcon, WhatsAppIcon } from './icons'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-gold/20 bg-ink pb-24 pt-14 md:pb-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-2xl font-bold uppercase tracking-brand">
            DOM <span className="text-gold">BASSILIO</span>
          </p>
          <p className="mt-2 text-sm text-ash">
            {business.city} - {business.state}
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex min-h-[44px] items-center text-sm text-ash transition-colors hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex flex-col gap-1">
          <li>
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-3 text-sm text-ash transition-colors hover:text-gold"
            >
              <InstagramIcon className="h-4 w-4" /> Instagram {business.instagramHandle}
            </a>
          </li>
          <li>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-3 text-sm text-ash transition-colors hover:text-gold"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp
            </a>
          </li>
        </ul>
      </div>
      <p className="mx-auto mt-10 max-w-7xl border-t border-bone/10 px-5 pt-6 text-xs text-ash/70 md:px-8">
        © {year} {business.brand}. Todos os direitos reservados.
      </p>
    </footer>
  )
}
