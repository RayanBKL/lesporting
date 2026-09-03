import React from 'react'
import styles from './Esprit.module.css'

export default function Esprit() {
  return (
    <section className={styles.espritSection} id="esprit">
      <div className="container">
        
        {/* Main Editorial Header matching the exact user image requirement */}
        <div className={styles.mainHeader}>
          <div className={styles.locationTag}>
            <span>SAINT-TROPEZ · PLACE DES LICES</span>
          </div>

          <h2 className={styles.mainTitle}>
            Là où la journée <br />
            <span className="scriptAccent" style={{ fontSize: 'clamp(3.2rem, 6.5vw, 5.2rem)', lineHeight: 0.95, marginTop: '8px' }}>
              refuse de finir
            </span>
          </h2>
        </div>

        {/* 2-Column Story Grid with Authentic Restaurant Photos */}
        <div className={styles.storyGrid}>
          {/* Left Column: Visual Storytelling Collage */}
          <div className={styles.visualCol}>
            <div className={styles.mainImageCard}>
              <img
                src="/images/salle_restaurant.jpg"
                alt="Intérieur raffiné du Sporting à Saint-Tropez"
                className={styles.mainImg}
              />
              <div className={styles.imageBadge}>
                <span className="scriptAccent" style={{ fontSize: '2.4rem', lineHeight: 1 }}>
                  la table & la fete
                </span>
                <span className={styles.badgeSub}>Depuis le matin jusqu’au bout de la nuit</span>
              </div>
            </div>

            <div className={styles.secondaryImageGrid}>
              <div className={styles.smallImgCard}>
                <img
                  src="/images/terrasse_soleil.jpg"
                  alt="Terrasse sous les oliviers de la Place des Lices"
                />
                <span className={styles.cardTag}>La Terrasse</span>
              </div>
              <div className={styles.smallImgCard}>
                <img
                  src="/images/chef_pizzaiolo.jpg"
                  alt="Le chef pizzaiolo au four à pizza"
                />
                <span className={styles.cardTag}>Le Savoir-Faire</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Values */}
          <div className={styles.textCol}>
            <div className={styles.quoteBox}>
              <p className={styles.quoteText}>
                « Une véritable institution de la Place des Lices, où l'élégance tropézienne rencontre la chaleur d'une brasserie authentique. »
              </p>
            </div>

            <p className={styles.leadParagraph}>
              Le Sporting by Papüm, c'est l'âme festive et chaleureuse de Saint-Tropez. Un décor soigné aux teintes végétales et boisées, un comptoir vivant et une terrasse baignée de lumière sur la place la plus emblématique du village.
            </p>

            <p className={styles.bodyParagraph}>
              Dès 8 heures du matin pour le premier espresso, jusqu'à 3 heures dans l'effervescence des soirées musicales, notre équipe vous accueille en continu avec une cuisine maison généreuse, des pizzas cuites avec passion et les meilleurs crus de Provence.
            </p>

            {/* Feature Pills */}
            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>✦</div>
                <div>
                  <h4 className={styles.featureTitle}>Service Continu 8h – 23h</h4>
                  <p className={styles.featureDesc}>Du petit-déjeuner au dîner tardif sans interruption</p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>✦</div>
                <div>
                  <h4 className={styles.featureTitle}>Pizzas Artisanales & Truffe</h4>
                  <p className={styles.featureDesc}>Farines sélectionnées, maturation lente et garnitures d'exception</p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>✦</div>
                <div>
                  <h4 className={styles.featureTitle}>DJ Sets & Soirées Festives</h4>
                  <p className={styles.featureDesc}>Ambiance festive chaque samedi et programmation musicale</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
