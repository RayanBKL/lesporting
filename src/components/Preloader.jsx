import React, { useState, useEffect } from 'react'
import OfficialLogo from './OfficialLogo'
import styles from './Preloader.module.css'

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Start fade out at 1.1s
    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
    }, 1100)

    // Completely remove from DOM at 1.6s
    const removeTimer = setTimeout(() => {
      setLoading(false)
    }, 1600)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!loading) return null

  return (
    <div className={`${styles.preloader} ${fadeOut ? styles.fadeOut : ''}`}>
      <div className={styles.loaderContent}>
        
        {/* Centered Logo with Ambient Glow */}
        <div className={styles.logoWrapper}>
          <OfficialLogo height={120} className={styles.loaderLogo} />
          <div className={styles.logoAura} />
        </div>

        {/* Brand Tagline */}
        <div className={styles.brandTagline}>
          <span>Brasserie & Pizzeria</span>
          <em>Place des Lices · Saint-Tropez</em>
        </div>

        {/* Elegant Minimal Olive Progress Hairline */}
        <div className={styles.progressBar}>
          <div className={styles.progressFill} />
        </div>

      </div>
    </div>
  )
}
