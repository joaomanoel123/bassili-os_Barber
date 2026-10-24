import { business } from '../config/business'

/** Monta um link wa.me com a mensagem corretamente codificada. */
export function buildWhatsAppLink(message?: string, number: string = business.whatsappNumber): string {
  const base = `https://wa.me/${number}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message).replace(/!/g, '%21')}`
}

export function serviceMessage(serviceName: string): string {
  return `Olá! Vim pelo site da Dom Bassilio e gostaria de agendar um horário para: ${serviceName}.`
}
