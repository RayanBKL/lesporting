import React from 'react'
import OfficialLogo from './OfficialLogo'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        
        {/* Top Brand Block with Official Logo */}
        <div className={styles.brandBlock}>
          <OfficialLogo height={95} className={styles.footerLogo} />
          <div className={styles.brandTaglines}>
            <span className={styles.taglineMain}>Brasserie & Pizzeria</span>
            <span className={styles.taglinePlace}>Place des Lices · Saint-Tropez</span>
          </div>
        </div>

        {/* Footer Navigation & Information Grid */}
        <div className={styles.footerGrid}>
          
          <div className={styles.footerCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon}>📍</span>
              <h4 className={styles.colTitle}>Localisation</h4>
            </div>
            <p className={styles.colText}>
              <strong>Le Sporting by Papüm</strong><br />
              42 Place des Lices · Bd Vasserot<br />
              83990 Saint-Tropez, France
            </p>
            <a
              href="https://maps.google.com/?q=42+Place+des+Lices+83990+Saint-Tropez"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapPillBtn}
            >
              Google Maps ↗
            </a>
          </div>

          <div className={styles.footerCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon}>🕐</span>
              <h4 className={styles.colTitle}>Horaires</h4>
            </div>
            <p className={styles.colText}>
              <strong>Ouvert 7j/7 — Tous les jours</strong><br />
              08h00 — 03h00 du matin<br />
              <em>Cuisine en service continu 8h à 23h</em>
            </p>
            <p className={styles.colNotice}>
              DJ Sets & Soirées Festives chaque samedi
            </p>
          </div>

          <div className={styles.footerCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon}>📞</span>
              <h4 className={styles.colTitle}>Contact Direct</h4>
            </div>
            <p className={styles.colText}>
              Téléphone : <a href="tel:+33494970065" className={styles.contactLink}>04 94 97 00 65</a><br />
              Réservations : <a href="#reservation" className={styles.contactLink}>En ligne ou par appel</a><br />
              Email : <a href="mailto:contact@lesporting-sainttropez.com" className={styles.contactLink}>contact@lesporting-sainttropez.com</a>
            </p>
          </div>

          <div className={styles.footerCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon}>📸</span>
              <h4 className={styles.colTitle}>Instagram Officiel</h4>
            </div>
            <p className={styles.colText}>
              Retrouvez l'atmosphère, les vidéos et nos actualités en direct.
            </p>
            <div className={styles.socialRow}>
              <a
                href="https://www.instagram.com/lesporting_sainttropez/?hl=fr"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.instaPillBtn}
                aria-label="Instagram @lesporting_sainttropez"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>@lesporting_sainttropez</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Le Sporting Saint-Tropez · By Papüm. Tous droits réservés.
          </p>
          <div className={styles.legalLinks}>
            <a href="#">Mentions Légales</a>
            <span>·</span>
            <a href="#">Politique de Confidentialité</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
