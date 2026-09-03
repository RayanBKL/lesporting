import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY
        heroRef.current.style.transform = `translateY(${scrolled * 0.25}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className={styles.hero}>
      {/* Background Image with Authentic Night Atmosphere */}
      <div className={styles.bgContainer} ref={heroRef}>
        <img
          src="/images/hero_facade_nuit.jpg"
          alt="Le Sporting Place des Lices Saint-Tropez"
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>

      {/* Hero Content: Strictly Logo with Pixel-Masked Light Shimmer + 2 Action Buttons */}
      <div className={styles.content}>
        
        {/* Le Logo Officiel avec Faisceau de Lumière Masqué UNIQUEMENT sur les Lettres */}
        <div className={styles.logoShineContainer}>
          <img
            src="/logo-official.png"
            alt="Le Sporting by Papüm"
            className={styles.baseLogo}
          />
          {/* Couche de lumière masquée au pixel près sur la forme du logo */}
          <div className={styles.logoMaskShine} aria-hidden="true">
            <div className={styles.shineBeam} />
          </div>
        </div>

        {/* Action Buttons : Réserver & La Carte */}
        <div className={styles.ctaGroup}>
          <a
            href="#reservation"
            className={styles.primaryCta}
            onClick={e => {
              e.preventDefault()
              document.querySelector('#reservation')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Réserver
          </a>
          <a
            href="#menu"
            className={styles.secondaryCta}
            onClick={e => {
              e.preventDefault()
              document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            La Carte
          </a>
        </div>

      </div>
    </section>
  )
}
