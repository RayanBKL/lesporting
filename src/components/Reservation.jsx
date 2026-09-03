import React, { useState } from 'react'
import styles from './Reservation.module.css'

export default function Reservation() {
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    date: '',
    heure: '20:00',
    personnes: '2',
    zone: 'terrasse',
    notes: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className={styles.reservationSection} id="reservation">
      <div className="container">
        
        <div className={styles.reservationGrid}>
          {/* Left Column: Information & Direct Contact */}
          <div className={styles.infoCol}>
            <span className={styles.tagline}>RÉSERVATIONS & PRIVATISATION</span>
            
            <h2 className={styles.title}>
              Réservez votre table
              <span className={styles.scriptWrapper}>
                <span className={styles.scriptLine}>au coeur de</span>
                <span className={styles.scriptLine}>Saint Tropez</span>
              </span>
            </h2>
            
            <p className={styles.leadText}>
              Pour un déjeuner ensoleillé sur la Place des Lices ou une soirée animée autour de nos spécialités méditerranéennes.
            </p>

            <div className={styles.contactCards}>
              <a href="tel:+33494970065" className={styles.contactCard}>
                <div className={styles.cardIcon}>📞</div>
                <div>
                  <span className={styles.cardLabel}>Réservation directe par téléphone</span>
                  <span className={styles.cardVal}>04 94 97 00 65</span>
                </div>
              </a>

              <div className={styles.contactCardStatic}>
                <div className={styles.cardIcon}>📍</div>
                <div>
                  <span className={styles.cardLabel}>Adresse</span>
                  <span className={styles.cardVal}>42 Place des Lices, 83990 Saint-Tropez</span>
                </div>
              </div>
            </div>

            <div className={styles.hoursNotice}>
              <span className={styles.noticeDot} />
              <span>Ouvert 7j/7 de 8h00 à 3h00 du matin · Service continu</span>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>Demande de Réservation</h3>
                <p className={styles.formSub}>Confirmation rapide par notre équipe</p>
              </div>

              {submitted ? (
                <div className={styles.successBox}>
                  <span className={styles.successIcon}>✓</span>
                  <h4 className={styles.successTitle}>Demande transmise avec succès</h4>
                  <p className={styles.successText}>
                    Merci {formData.nom || 'cher client'}, nous avons bien reçu votre demande pour le {formData.date} à {formData.heure} ({formData.personnes} pers.). Notre équipe vous recontacte dans les plus brefs délais.
                  </p>
                  <button
                    className={styles.resetBtn}
                    onClick={() => setSubmitted(false)}
                  >
                    Nouvelle demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Nom & Prénom</label>
                    <input
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      className={styles.input}
                      value={formData.nom}
                      onChange={e => setFormData({ ...formData, nom: e.target.value })}
                    />
                  </div>

                  <div className={styles.rowTwo}>
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Téléphone</label>
                      <input
                        type="tel"
                        required
                        placeholder="+33 6 12 34 56 78"
                        className={styles.input}
                        value={formData.telephone}
                        onChange={e => setFormData({ ...formData, telephone: e.target.value })}
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Couverts</label>
                      <select
                        className={styles.select}
                        value={formData.personnes}
                        onChange={e => setFormData({ ...formData, personnes: e.target.value })}
                      >
                        <option value="1">1 Personne</option>
                        <option value="2">2 Personnes</option>
                        <option value="3">3 Personnes</option>
                        <option value="4">4 Personnes</option>
                        <option value="5">5 Personnes</option>
                        <option value="6">6 Personnes</option>
                        <option value="7+">Groupe (7+ personnes)</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.rowTwo}>
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Date souhaitée</label>
                      <input
                        type="date"
                        required
                        className={styles.input}
                        value={formData.date}
                        onChange={e => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Horaire</label>
                      <select
                        className={styles.select}
                        value={formData.heure}
                        onChange={e => setFormData({ ...formData, heure: e.target.value })}
                      >
                        <optgroup label="Petit-Déjeuner & Déjeuner">
                          <option value="09:00">09:00</option>
                          <option value="12:00">12:00</option>
                          <option value="12:30">12:30</option>
                          <option value="13:00">13:00</option>
                          <option value="13:30">13:30</option>
                          <option value="14:00">14:00</option>
                        </optgroup>
                        <optgroup label="Apéritif & Dîner">
                          <option value="19:00">19:00</option>
                          <option value="19:30">19:30</option>
                          <option value="20:00">20:00</option>
                          <option value="20:30">20:30</option>
                          <option value="21:00">21:00</option>
                          <option value="21:30">21:30</option>
                          <option value="22:00">22:00</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Emplacement souhaité</label>
                    <div className={styles.zoneCardsRow}>
                      <button
                        type="button"
                        className={`${styles.zoneCard} ${formData.zone === 'terrasse' ? styles.activeZoneCard : ''}`}
                        onClick={() => setFormData({ ...formData, zone: 'terrasse' })}
                      >
                        <div className={styles.zoneCardTop}>
                          <span className={styles.zoneIcon}>🌿</span>
                          <span className={styles.zoneCheckmark}>
                            {formData.zone === 'terrasse' ? '✓' : ''}
                          </span>
                        </div>
                        <span className={styles.zoneName}>Terrasse</span>
                        <span className={styles.zoneDesc}>Place des Lices</span>
                      </button>

                      <button
                        type="button"
                        className={`${styles.zoneCard} ${formData.zone === 'interieur' ? styles.activeZoneCard : ''}`}
                        onClick={() => setFormData({ ...formData, zone: 'interieur' })}
                      >
                        <div className={styles.zoneCardTop}>
                          <span className={styles.zoneIcon}>🏛️</span>
                          <span className={styles.zoneCheckmark}>
                            {formData.zone === 'interieur' ? '✓' : ''}
                          </span>
                        </div>
                        <span className={styles.zoneName}>Salle Intérieure</span>
                        <span className={styles.zoneDesc}>Climatisée & boisée</span>
                      </button>
                    </div>
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    Confirmer la Demande
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
