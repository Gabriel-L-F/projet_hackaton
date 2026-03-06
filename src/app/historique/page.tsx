import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { getHistorique } from "@/services/workoutService";
import { SeanceHistorique } from "@/types/workout";
import styles from "./historique.module.scss";

export default async function HistoriquePage() {
  const seances: SeanceHistorique[] = await getHistorique();

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>
          MON <span>HISTORIQUE</span>
        </h1>

        {!seances || seances.length === 0 ? (
          <p className={styles.emptyMsg}>
            Aucune séance enregistrée dans le Nexus.
          </p>
        ) : (
          <div className={styles.timeline}>
            {seances.map((seance) => (
              <div key={seance.id} className={styles.workoutCard}>
                <div className={styles.cardHeader}>
                  <h2>{seance.nom}</h2>
                  <span className={styles.dateBadge}>{seance.date}</span>
                </div>

                <div className={styles.tableWrapper}>
                  <table className={styles.historyTable}>
                    <thead>
                      <tr>
                        <th>Exercice</th>
                        <th>Séries</th>
                        <th>Reps</th>
                        <th>Poids</th>
                      </tr>
                    </thead>
                    <tbody>
                      {seance.exercices.map((exo, index) => (
                        <tr key={index}>
                          <td className={styles.exoName}>{exo.exercice_nom}</td>
                          <td>{exo.nb_series}</td>
                          <td>{exo.nb_reps}</td>
                          <td className={styles.weightColumn}>
                            {exo.poids} <span>kg</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
