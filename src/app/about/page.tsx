import Header from "../../components/Header/Header"; // Vérifiez bien le chemin relatif
import Footer from "../../components/Footer/Footer"; // Import du Footer
import styles from "./about.module.scss"; // Import du fichier SCSS

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h1 className={styles.title}>À Propos de FitNexus</h1>
        <p className={styles.description}>
          FitNexus est une plateforme innovante pour suivre et améliorer votre
          performance sportive.
        </p>
      </main>
      <Footer />
    </>
  );
}
