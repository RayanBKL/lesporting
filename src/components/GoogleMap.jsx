import React from 'react'
import styles from './GoogleMap.module.css'

export default function GoogleMap() {
  return (
    <section className={styles.mapSection} id="acces">
      <div className="container">
        
        <div className={styles.mapCard}>
          {/* Header Info */}
          <div className={styles.mapHeader}>
            <div className={styles.headerLeft}>
              <span className={styles.overline}>Accès & Situation</span>
              <h2 className={styles.title}>
                Au cœur de la <em>Place des Lices</em>
              </h2>
              <p className={styles.address}>
                42 Place des Lices, 83990 Saint-Tropez
              </p>
            </div>

            <div className={styles.headerRight}>
              <a
                href="https://maps.google.com/?q=42+Place+des+Lices+83990+Saint-Tropez"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.directionBtn}
              >
                Itinéraire Google Maps ↗
              </a>
              <div className={styles.infoBadge}>
                <span>Parking des Lices à 50 mètres</span>
              </div>
            </div>
          </div>

          {/* Interactive Google Maps Frame */}
          <div className={styles.iframeWrapper}>
            <iframe
              title="Carte Google Maps - Le Sporting Saint-Tropez"
              src="https://maps.google.com/maps?q=42+Place+des+Lices,+83990+Saint-Tropez&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className={styles.iframe}
              loading="lazy"
              allowFullScreen
            />
            {/* Subtle luxury vignette effect on borders */}
            <div className={styles.mapVignette} />
          </div>
        </div>

      </div>
    </section>
  )
}
