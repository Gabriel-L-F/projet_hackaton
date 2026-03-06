import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import WorkoutForm from "@/components/WorkoutForm/WorkoutForm";
import { db } from "@/lib/db";
import styles from "./page.module.scss";

export default async function Page() {
  const [exercices]: any = await db.query("SELECT id, nom FROM exercice");

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main className={styles.mainContent}>
        <div className={styles.heroSection}>
          <h1 className={styles.title}>
            FIT<span>NEXUS</span>
          </h1>

          <p className={styles.accroche}>
            Dépasse tes limites : enregistre ta séance et forge ton Nexus dès
            maintenant.
          </p>
        </div>

        <div className={styles.formContainer}>
          <WorkoutForm exercicesInitial={exercices} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
