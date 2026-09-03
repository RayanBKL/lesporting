import { useState, useEffect } from 'react'
import OfficialLogo from './OfficialLogo'
import styles from './Nav.module.css'

const navLinks = [
  { label: 'L’Esprit', href: '#esprit' },
  { label: 'La Carte', href: '#menu' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Avis', href: '#avis' },
  { label: 'Accès', href: '#acces' },
  { label: 'Réservation', href: '#reservation' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollTo = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
        <div className={styles.container}>
          {/* Logo gauche */}
          <a
            href="#"
            className={styles.logoLink}
            onClick={e => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <OfficialLogo height={44} />
          </a>

          {/* Navigation Links */}
          <nav className={styles.desktopNav}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.navLink}
                onClick={e => handleScrollTo(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className={styles.actions}>
            <a
              href="https://www.instagram.com/lesporting_sainttropez/?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instaBtn}
              aria-label="Instagram @lesporting_sainttropez"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            <a
              href="#reservation"
              className={styles.bookBtn}
              onClick={e => handleScrollTo(e, '#reservation')}
            >
              Réserver
            </a>

            {/* Mobile Hamburger */}
            <button
              className={`${styles.hamburger} ${menuOpen ? styles.hamburgerActive : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`${styles.mobileDrawer} ${menuOpen ? styles.mobileDrawerOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className={styles.drawerHeader}>
          <OfficialLogo height={65} />
        </div>
        <nav className={styles.drawerNav}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.drawerLink}
              onClick={e => handleScrollTo(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className={styles.drawerFooter}>
          <p className={styles.drawerAddress}>42 Place des Lices · 83990 Saint-Tropez</p>
          <a href="tel:+33494970065" className={styles.drawerPhone}>04 94 97 00 65</a>
        </div>
      </div>
    </>
  )
}
