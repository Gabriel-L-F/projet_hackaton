import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./about.module.scss";

export default function AboutPage() {
  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>
            L'ÉCOSYSTÈME <span>FITNEXUS</span>
          </h1>

          <div className={styles.conceptCard}>
            <p className={styles.description}>
              FitNexus n'est pas qu'un simple tracker. C'est le{" "}
              <strong>point de convergence</strong> entre ta sueur et tes
              statistiques. Nous avons créé cet espace pour les athlètes qui
              exigent de la clarté : enregistre tes séances, analyse ta
              progression et forge ton propre Nexus de performance.
            </p>
            <p className={styles.motto}>
              Ta seule limite est celle que tu refuses de noter.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
