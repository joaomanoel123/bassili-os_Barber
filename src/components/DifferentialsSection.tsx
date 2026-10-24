import { Scissors, Sparkles, HeartHandshake, Armchair, type LucideIcon } from 'lucide-react'
import { differentials } from '../config/business'

const icons: Record<string, LucideIcon> = {
  detalhes: Scissors,
  estilo: Sparkles,
  cuidado: HeartHandshake,
  acolhedora: Armchair,
}

export default function DifferentialsSection() {
  return (
    <section className="bg-ink py-20 md:py-24" aria-label="Diferenciais">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((d) => {
            const Icon = icons[d.id] ?? Sparkles
            return (
              <li key={d.id} className="border-t border-gold/40 pt-6">
                <Icon className="text-gold" size={28} strokeWidth={1.25} aria-hidden="true" />
                <h3 className="mt-5 text-xl leading-snug text-bone">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ash">{d.text}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
