import { useState } from 'react'
const links = [['Projects', '#projects'], ['About', '#about'], ['Résumé', '#resume'], ['Contact', '#contact']]
export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="shell flex min-h-22 flex-wrap items-center justify-between gap-4">
        <a href="#home" className="wordmark" aria-label="Avi Patel, back to top">avi patel<span>.</span></a>
        <button className="menu-button md:hidden" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'} <span aria-hidden="true">{open ? '−' : '+'}</span>
        </button>
        <nav id="main-navigation" aria-label="Main navigation" className={(open ? 'flex' : 'hidden') + ' w-full flex-col gap-5 pb-6 md:flex md:w-auto md:flex-row md:items-center md:gap-9 md:pb-0'} onKeyDown={(event) => {
          if (event.key === 'Escape') {
            setOpen(false)
            document.querySelector<HTMLButtonElement>('.menu-button')?.focus()
          }
        }}>
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="nav-link">{label}</a>)}
        </nav>
      </div>
    </header>
  )
}