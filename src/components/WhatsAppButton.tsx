import { business } from '../config/business'
import { buildWhatsAppLink } from '../lib/whatsapp'
import { WhatsAppIcon } from './icons'

export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppLink(business.defaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Dom Bassilio pelo WhatsApp"
      className="fixed bottom-4 right-4 z-40 flex h-12 w-12 md:bottom-6 md:right-6 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-offset-4"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
