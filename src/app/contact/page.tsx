// src/app/contact/page.tsx
import Header from "../../components/Header/Header"; // Vérifiez bien le chemin relatif
import Footer from "../../components/Footer/Footer"; // Import du Footer
import styles from "./contact.module.scss"; // Import du fichier SCSS

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.formCard}>
          <h2 className={styles.title}>Contactez FitNexus</h2>
          <p className={styles.subtitle}>
            Une question ? Notre équipe vous répond en moins de 24h.
          </p>

          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Nom complet</label>
              <input type="text" id="name" placeholder="Votre nom" required />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="votre@email.com"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="subject">Sujet</label>
              <select id="subject">
                <option value="info">Informations générales</option>
                <option value="support">Support technique</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Message..."
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.button}>
              Envoyer le message
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
