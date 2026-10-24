import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { business, navLinks } from '../config/business'
import { buildWhatsAppLink } from '../lib/whatsapp'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-ink/95 backdrop-blur border-b border-gold/20' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#inicio" className="font-display text-xl font-bold uppercase tracking-brand text-bone md:text-2xl" aria-label={`${business.name} — início`}>
          DOM <span className="text-gold">BASSILIO</span>
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-bone/80 transition-colors hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={buildWhatsAppLink(business.defaultMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold hidden !min-h-[44px] !px-5 lg:inline-flex"
        >
          Agendar horário
        </a>

        <button
          ref={buttonRef}
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center text-bone lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Menu mobile" className="border-t border-gold/20 bg-ink lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={close}
                  className="flex min-h-[52px] items-center border-b border-bone/10 text-sm font-medium uppercase tracking-[0.22em] text-bone"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-5">
              <a
                href={buildWhatsAppLink(business.defaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="btn-gold w-full"
              >
                Agendar horário
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
