import React, { useState } from 'react'
import OfficialLogo from './OfficialLogo'
import styles from './Menu.module.css'

const menuData = [
  {
    id: 'entrees',
    title: 'LES ENTRÉES',
    subtitle: 'Pour commencer',
    image: '/images/huitres.jpg',
    imageAlt: 'Bourriche d’huîtres fraîches & entrées',
    items: [
      { name: 'Nems de volaille', desc: 'Chicken spring rolls', price: 16 },
      { name: 'Moules gratinées', desc: 'Gratinated mussels', price: 19 },
      { name: 'Tomates anciennes, pesto & Stracciatella', desc: 'Tomates & stracciatella, pesto', price: 24 },
      { name: 'Œufs Mimosa', desc: 'Eggs Mimosa', price: 14 },
      { name: 'Salade César', desc: 'Romaine, parmesan, tomates cerises, œufs, anchois, poulet pané', price: 25 },
      { name: 'Salade de St-Marcellin chaud à notre façon', desc: 'Jambon cru, salade, crème balsamique', price: 25 },
      { name: 'Tartine Avocat & Saumon', desc: 'Pain de campagne, avocat, saumon, feta, baies de grenade', price: 24 }
    ]
  },
  {
    id: 'viandes',
    title: 'LES PLATS',
    subtitle: 'Viandes & burgers',
    image: '/images/burger_papum.jpg',
    imageAlt: 'Burger PAPÜM frites maison',
    items: [
      { name: 'Foie de veau persillé', desc: 'Jus court à l’ail doux & persil, purée maison', price: 29 },
      { name: 'Tartare de bœuf au couteau', desc: 'Frites maison, salade', price: 24 },
      { name: 'Escalope de veau à la milanaise', desc: 'Linguines à la tomate, copeaux de parmesan', price: 34 },
      { name: 'Belle Entrecôte Simmental', desc: 'Frites maison & salade', price: 38 },
      { name: 'Brochette de bœuf Black Angus', desc: 'Sauce poivre ou gorgonzola, frites maison, salade', price: 35 },
      { name: 'Burger PAPÜM', desc: 'Steak haché 180g, sauce burger, cheddar, salade, tomates, oignons crispy', price: 27 },
      { name: 'Maxi Burger PAPÜM', desc: '2 steaks hachés 180g, rösti, cheddar, salade, tomates, oignons crispy', price: 35 },
      { name: 'CRUZ Burger', desc: 'Steak haché 180g, foie gras, sauce morille', price: 44 }
    ]
  },
  {
    id: 'poissons',
    title: 'LES PLATS',
    subtitle: 'Poisson & pâtes',
    image: '/images/tataki_thon.jpg',
    imageAlt: 'Tataki de thon aux graines de sésame',
    items: [
      { name: 'Tataki de Thon sauce asiatique', desc: 'Wok de légumes de saison', price: 34 },
      { name: 'Pâtes à l’ail', desc: 'Linguines, ail doux, tomates, huile d’olive de Provence', price: 24 },
      { name: 'Coquillettes au Jambon & Truffe', desc: 'Pecorino cheese affiné & brisures de truffe', price: 28 },
      { name: 'Linguines Burrata, sauce truffe', desc: 'Burrata crémeuse & sauce à la truffe noire', price: 29 },
      { name: 'Gnocchis à la Sorrentina', desc: 'Mozzarella di bufala gratinée, basilic frais', price: 26 }
    ]
  },
  {
    id: 'pizzas',
    title: 'LES PIZZAS',
    subtitle: 'Supplément +2€ · Truffe +4€',
    image: '/images/pizza_truffe.jpg',
    imageAlt: 'Pizza à la truffe et copeaux de parmesan',
    items: [
      { name: 'MARGUERITE', desc: 'Sauce tomate, mozzarella, olives, origan', price: 17 },
      { name: 'REINE', desc: 'Sauce tomate, mozzarella, jambon, champignons, olives, origan', price: 18 },
      { name: 'CALZONE', desc: 'Sauce tomate, mozzarella, jambon, champignons, œuf', price: 19 },
      { name: 'VÉGÉTARIENNE', desc: 'Sauce tomate, tomates cerise, mozzarella, aubergines, parmesan', price: 22 },
      { name: 'PAPÜM', desc: 'Viande hachée, sauce tomate, mozzarella, oignons rouges, œuf', price: 22 },
      { name: '4 FROMAGES', desc: 'Crème, mozzarella, gorgonzola, chèvre, parmesan, olives', price: 22 },
      { name: 'SICILIENNE', desc: 'Sauce tomate, mozzarella, câpres, anchois, olives, origan', price: 18 },
      { name: 'MIA', desc: 'Jambon cru, burrata, roquette, pesto, crème balsamique', price: 22 },
      { name: 'DIAVOLA', desc: 'Sauce tomate, poivrons, spianata piquante, mozzarella, olives', price: 21 },
      { name: 'TRUFFE', desc: 'Crème, mozzarella, truffe, parmesan, roquette fraîche', price: 26 }
    ]
  },
  {
    id: 'desserts',
    title: 'LES DESSERTS',
    subtitle: 'La touche sucrée',
    image: '/images/coupe_fraises.jpg',
    imageAlt: 'Coupe de fraises fraîches et chantilly maison',
    items: [
      { name: 'Tiramisu', desc: 'Recette traditionnelle fait maison', price: 12 },
      { name: 'Brioche maison façon pain perdu', desc: 'Caramel au beurre salé & glace vanille Bourbon', price: 12 },
      { name: 'Crème brûlée', desc: 'Vanilla custard & caramelized sugar crust', price: 12 },
      { name: 'Coupe de fraise au sucre & chantilly', desc: 'Fraises fraîches sélectionnées, sucre & crème fouettée', price: 12 },
      { name: 'Profiteroles au chocolat', desc: 'Choux croustillants, glace vanille, chocolat chaud', price: 13 }
    ]
  }
]

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(0)
  const current = menuData[activeCategory]

  return (
    <section className={styles.menuSection} id="menu">
      <div className="container">
        
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.tagline}>CARTE & GASTRONOMIE</span>
          <h2 className={styles.title}>
            Une cuisine <br />
            <span className={styles.scriptHighlight}>sincere & genereuse</span>
          </h2>
          <p className={styles.description}>
            Retrouvez tous les classiques de notre brasserie et nos pizzas artisanales, élaborées à partir de produits frais et locaux.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className={styles.tabsWrapper}>
          {menuData.map((cat, idx) => (
            <button
              key={cat.id}
              className={`${styles.tabBtn} ${activeCategory === idx ? styles.activeTab : ''}`}
              onClick={() => setActiveCategory(idx)}
            >
              {cat.id === 'entrees' && 'Entrées'}
              {cat.id === 'viandes' && 'Viandes & Burgers'}
              {cat.id === 'poissons' && 'Poissons & Pâtes'}
              {cat.id === 'pizzas' && 'Pizzas Artisanales'}
              {cat.id === 'desserts' && 'Desserts'}
            </button>
          ))}
        </div>

        {/* Authentic Menu Card Presentation (exact look of the restaurant card) */}
        <div className={styles.menuLayout}>
          
          {/* Card Presentation (Reproducing the exact Le Sporting menu design) */}
          <div className={styles.menuCard}>
            
            {/* Card Header with Official Logo */}
            <div className={styles.cardHeader}>
              <OfficialLogo height={52} />
              <h3 className={styles.cardTitle}>{current.title}</h3>
              <div className={styles.cardOliveBar} />
              <p className={styles.cardSubtitle}>{current.subtitle}</p>
            </div>

            {/* Menu Items List with Official Capsule Pills */}
            <div className={styles.itemsList}>
              {current.items.map((item, i) => (
                <div key={i} className={styles.menuItemRow}>
                  <div className={styles.itemDot} />
                  <div className={styles.itemDetails}>
                    <div className={styles.itemHeaderLine}>
                      <h4 className={styles.itemName}>{item.name}</h4>
                    </div>
                    {item.desc && <p className={styles.itemDesc}>{item.desc}</p>}
                  </div>
                  {/* The official olive price capsule pill from the menu */}
                  <div className={styles.pricePill}>
                    <span>{item.price}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Card Footer */}
            <div className={styles.cardFooter}>
              <div className={styles.footerDecorativeDot} />
              <p className={styles.footerTerms}>
                Prix net en euros · Service compris · Boissons non comprises
              </p>
              <p className={styles.footerAllergenes}>
                Liste des allergènes disponible sur demande
              </p>
            </div>

          </div>

          {/* Dish Showcase Feature (Photo of actual dish) */}
          <div className={styles.dishShowcase}>
            <div className={styles.dishImageWrap}>
              <img
                src={current.image}
                alt={current.imageAlt}
                className={styles.dishImg}
              />
              <div className={styles.dishOverlay}>
                <span className={styles.dishTag}>Le Goût du Fait Maison</span>
                <span className="scriptAccent" style={{ fontSize: '2.4rem', lineHeight: 1 }}>
                  fraicheur & passion
                </span>
              </div>
            </div>

            <div className={styles.cardHighlightBox}>
              <h4 className={styles.highlightTitle}>✦ Pizzas au feu de bois & Produits frais</h4>
              <p className={styles.highlightText}>
                Toutes nos pâtes à pizza sont pétries et levées quotidiennement selon la tradition italienne, garnies d'ingrédients nobles rigoureusement sélectionnés.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
