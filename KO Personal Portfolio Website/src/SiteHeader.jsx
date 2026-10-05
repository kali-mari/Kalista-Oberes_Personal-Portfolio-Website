import { useState } from 'react'

const links = [
  ['#experience', 'Experience'],
  ['#projects', 'Projects'],
  ['#skills', 'Skills'],
  ['#about', 'About'],
  ['#contact', 'Contact'],
]

// Sticky site header with section links. Used on the home page and on every project page.
function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-bar">
      <div className="site-header page-width">
        <a className="logo" href="#top">KO<span>.</span></a>
        <button className="menu-toggle" type="button" aria-label="Menu" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
        <nav id="site-nav" className={menuOpen ? 'open' : ''} aria-label="Main navigation" onClick={() => setMenuOpen(false)}>
          {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
