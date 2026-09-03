import React, { useState } from 'react'
import styles from './Galerie.module.css'

const galleryItems = [
  {
    id: 1,
    src: '/images/hero_facade_nuit.jpg',
    category: 'ambiance',
    title: 'Façade Mythique · Nuits de Fête',
    safeScriptText: 'nuits de fete',
    format: 'wide'
  },
  {
    id: 2,
    src: '/images/tataki_thon.jpg',
    category: 'plats',
    title: 'Tataki de Thon Rouge au Sésame',
    safeScriptText: 'saveurs du sud',
    format: 'tall'
  },
  {
    id: 3,
    src: '/images/chef_pizzaiolo.jpg',
    category: 'savoir_faire',
    title: 'Le Chef au Four à Pizza',
    safeScriptText: 'passion & geste',
    format: 'tall'
  },
  {
    id: 4,
    src: '/images/terrasse_soleil.jpg',
    category: 'ambiance',
    title: 'Terrasse Sous l’Olivier',
    safeScriptText: 'douceur tropezienne',
    format: 'tall'
  },
  {
    id: 5,
    src: '/images/pizza_truffe.jpg',
    category: 'pizzas',
    title: 'Pizza à la Truffe & Copeaux',
    safeScriptText: 'maturation lente',
    format: 'wide'
  },
  {
    id: 6,
    src: '/images/salle_restaurant.jpg',
    category: 'ambiance',
    title: 'La Salle & Suspensions Tressées',
    safeScriptText: 'lumieres du soir',
    format: 'standard'
  },
  {
    id: 7,
    src: '/images/burger_papum.jpg',
    category: 'plats',
    title: 'Burger PAPÜM Signature & Frites',
    safeScriptText: 'le grand classique',
    format: 'standard'
  },
  {
    id: 8,
    src: '/images/linguines_truffe.jpg',
    category: 'plats',
    title: 'Linguines Burrata & Truffe',
    safeScriptText: 'generosite italienne',
    format: 'tall'
  },
  {
    id: 9,
    src: '/images/decoupe_pizza.jpg',
    category: 'pizzas',
    title: 'Découpe Minute au Four',
    safeScriptText: 'croute doree',
    format: 'standard'
  },
  {
    id: 10,
    src: '/images/table_festive_sporting.jpg',
    category: 'ambiance',
    title: 'La Table & Convivialité',
    safeScriptText: 'comptoir vivant',
    format: 'wide'
  },
  {
    id: 11,
    src: '/images/gnocchis_mozzarella.jpg',
    category: 'plats',
    title: 'Gnocchis Gratinés au Feu de Bois',
    safeScriptText: 'au feu de bois',
    format: 'standard'
  },
  {
    id: 12,
    src: '/images/huitres.jpg',
    category: 'plats',
    title: 'Bourriche d’Huîtres Fraîches',
    safeScriptText: 'fraicheur marine',
    format: 'tall'
  },
  {
    id: 13,
    src: '/images/coupe_fraises.jpg',
    category: 'plats',
    title: 'Coupe de Fraises & Chantilly',
    safeScriptText: 'douceur sucree',
    format: 'tall'
  },
  {
    id: 14,
    src: '/images/terrasse_soiree_ambiance.jpg',
    category: 'ambiance',
    title: 'Soirée Festive Place des Lices',
    safeScriptText: 'ambiance tropézienne',
    safeScriptText: 'les lices en fete',
    format: 'wide'
  },
  {
    id: 15,
    src: '/images/cocktail_bar_sporting.jpg',
    category: 'plats',
    title: 'Cocktails Signatures & Créations',
    safeScriptText: 'cocktails d exception',
    format: 'tall'
  },
  {
    id: 16,
    src: '/images/interieur_lumieres_nuit.jpg',
    category: 'ambiance',
    title: 'Atmosphère Nocturne & Intimiste',
    safeScriptText: 'climat feutre',
    format: 'wide'
  },
  {
    id: 17,
    src: '/images/planche_aperitif_terrasse.jpg',
    category: 'plats',
    title: 'Planche de Partage & Vins de Provence',
    safeScriptText: 'partage & saveurs',
    format: 'standard'
  },
  {
    id: 18,
    src: '/images/ambiance_place_des_lices.jpg',
    category: 'ambiance',
    title: 'Le Cœur Vibrant de Saint-Tropez',
    safeScriptText: 'esprit du sud',
    format: 'standard'
  }
]

const filterTabs = [
  { id: 'all', label: 'Toutes les photos' },
  { id: 'ambiance', label: 'Ambiance & Terrasse' },
  { id: 'plats', label: 'La Table & Plats' },
  { id: 'pizzas', label: 'Pizzas & Four' },
  { id: 'savoir_faire', label: 'Le Savoir-Faire' }
]

export default function Galerie() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

  const openLightbox = (index) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const prevPhoto = (e) => {
    e.stopPropagation()
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1))
  }

  const nextPhoto = (e) => {
    e.stopPropagation()
    setLightboxIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0))
  }

  return (
    <section className={styles.galerieSection} id="galerie">
      <div className="container">
        
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.tagline}>MOMENTS & ATMOSPHÈRE</span>
          <h2 className={styles.title}>
            L’art de vivre <br />
            <span className={styles.scriptHighlight}>au Sporting</span>
          </h2>
          <p className={styles.description}>
            Immersion dans l'élégance tropézienne, nos créations culinaires et la vie vibrante de la Place des Lices.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className={styles.filterBar}>
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              className={`${styles.filterBtn} ${selectedCategory === tab.id ? styles.activeFilter : ''}`}
              onClick={() => setSelectedCategory(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Magazine-Style Fluid Editorial Layout (Varied Shapes, Zero Holes) */}
        <div className={styles.editorialGrid}>
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.gridCard} ${styles[item.format]}`}
              onClick={() => openLightbox(index)}
            >
              <div className={styles.cardInner}>
                <img
                  src={item.src}
                  alt={item.title}
                  className={styles.galleryImg}
                  loading="lazy"
                />
                <div className={styles.cardOverlay}>
                  <span className="scriptAccent" style={{ fontSize: '2.1rem', lineHeight: 1 }}>
                    {item.safeScriptText}
                  </span>
                  <span className={styles.cardTitle}>{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.closeBtn} onClick={closeLightbox} aria-label="Fermer">✕</button>
          <button className={styles.prevBtn} onClick={prevPhoto} aria-label="Précédent">‹</button>
          
          <div className={styles.lightboxContent} onClick={e => e.stopPropagation()}>
            <img
              src={filteredItems[lightboxIndex].src}
              alt={filteredItems[lightboxIndex].title}
              className={styles.lightboxImg}
            />
            <div className={styles.lightboxCaption}>
              <span className="scriptAccent" style={{ fontSize: '2.6rem' }}>
                {filteredItems[lightboxIndex].safeScriptText}
              </span>
              <span className={styles.lightboxTitle}>{filteredItems[lightboxIndex].title}</span>
            </div>
          </div>

          <button className={styles.nextBtn} onClick={nextPhoto} aria-label="Suivant">›</button>
        </div>
      )}
    </section>
  )
}
