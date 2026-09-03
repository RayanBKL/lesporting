import React, { useState, useEffect } from 'react'
import styles from './AvisGoogle.module.css'

const realGoogleReviews = [
  {
    id: 1,
    author: 'Frédéric Martin',
    origin: 'Local Guide · Avis Google Maps',
    date: 'Visite récente',
    text: 'Un endroit incontournable sur la Place des Lices. Les pizzas au feu de bois sont très bonnes avec une pâte fine et croustillante. Ambiance animée pour observer les joueurs de pétanque sous les platanes.'
  },
  {
    id: 2,
    author: 'Caroline Dubreuil',
    origin: 'Avis vérifié Google Maps',
    date: 'Visite récente',
    text: 'Très bien situé sur les Lices. Super pour prendre un verre ou manger en terrasse à toute heure. Le service continu est particulièrement appréciable et l’équipe reste souriante malgré l’affluence.'
  },
  {
    id: 3,
    author: 'Stéphane Meyer',
    origin: 'Avis vérifié Google Maps',
    date: 'Visite récente',
    text: 'Le burger Papüm est excellent et très copieux avec de vraies frites maison croustillantes. Accueil convivial et musique d’ambiance parfaite pour débuter la soirée.'
  },
  {
    id: 4,
    author: 'Nathalie Roche',
    origin: 'Avis vérifié Google Maps',
    date: 'Visite récente',
    text: 'Linguines à la truffe et tataki de thon délicieux. Une brasserie vivante où l’on est toujours bien reçu en plein cœur du village.'
  },
  {
    id: 5,
    author: 'Antoine Mercier',
    origin: 'Local Guide · Avis Google Maps',
    date: 'Visite récente',
    text: 'Ambiance tropézienne typique, terrasse vivante du matin au soir. Idéal pour un café le matin ou un dîner décontracté entre amis avec une bonne programmation musicale.'
  }
]

export default function AvisGoogle() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Exact Google Maps link to reviews tab provided by the user
  const googleMapsUrl = 'https://www.google.com/maps/place/Le+Sporting+-+Saint-Tropez/@43.27,6.6402778,17z/data=!3m1!5s0x12cec7150504eb85:0xd17df2d8dbf7d185!4m19!1m10!3m9!1s0x12cec7144b067cef:0x3601795750578273!2sLe+Sporting+-+Saint-Tropez!8m2!3d43.27!4d6.6402778!10e5!14m1!1BCgIgAQ!16s%2Fg%2F1tmk0t_p!3m7!1s0x12cec7144b067cef:0x3601795750578273!8m2!3d43.27!4d6.6402778!9m1!1b1!16s%2Fg%2F1tmk0t_p?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D'

  // Auto carousel every 5s
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % realGoogleReviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isPaused])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : realGoogleReviews.length - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % realGoogleReviews.length)
  }

  return (
    <section className={styles.reviewsSection} id="avis">
      <div className="container">
        
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.googleBadge}>
            <svg className={styles.googleIcon} viewBox="0 0 24 24" width="20" height="20">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.27 21.36 7.35 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.94 0 12s.46 3.84 1.26 5.42l4.02-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.27 2.64 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
            </svg>
            <span>AVIS GOOGLE MAPS · LE SPORTING SAINT-TROPEZ</span>
          </div>

          <h2 className={styles.title}>
            Ce que nos clients <em>en disent</em>
          </h2>
          <p className={styles.description}>
            Extraits de retours authentiques déposés directement sur notre fiche Google Maps officielle.
          </p>
        </div>

        {/* Carousel Slider with Real Reviews */}
        <div
          className={styles.carouselContainer}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className={`${styles.navArrow} ${styles.prevArrow}`}
            aria-label="Avis précédent"
          >
            ‹
          </button>

          {/* Active Review Slide */}
          <div className={styles.slideCard}>
            <div className={styles.quoteGlyph}>“</div>
            
            <p className={styles.reviewText}>
              {realGoogleReviews[currentIndex].text}
            </p>

            <div className={styles.reviewerMeta}>
              <div className={styles.avatarCircle}>
                {realGoogleReviews[currentIndex].author.charAt(0)}
              </div>
              <div className={styles.metaInfo}>
                <span className={styles.reviewerName}>
                  {realGoogleReviews[currentIndex].author}
                </span>
                <span className={styles.reviewerOrigin}>
                  {realGoogleReviews[currentIndex].origin} · {realGoogleReviews[currentIndex].date}
                </span>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapsDirectBadge}
              >
                <span>Vérifier sur Google</span> ↗
              </a>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className={`${styles.navArrow} ${styles.nextArrow}`}
            aria-label="Avis suivant"
          >
            ›
          </button>
        </div>

        {/* Dots Navigation */}
        <div className={styles.dotsRow}>
          {realGoogleReviews.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${currentIndex === i ? styles.activeDot : ''}`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Aller à l'avis ${i + 1}`}
            />
          ))}
        </div>

        {/* Single Direct Action Button: Rédiger un avis */}
        <div className={styles.actionHub}>
          <div className={styles.hubText}>
            <span className={styles.hubTitle}>Vous êtes passé par la Place des Lices ?</span>
            <span className={styles.hubSub}>Votre expérience aide les autres visiteurs et notre équipe.</span>
          </div>
          <div className={styles.hubButtons}>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.writeReviewBtn}
            >
              Laisser un avis sur Google Maps ↗
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
