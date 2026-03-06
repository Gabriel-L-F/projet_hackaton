import { getHistorique } from '@/services/workoutService';
import { SeanceHistorique } from '@/types/workout';

export default async function HistoriquePage() {
    // On appelle la fonction SQL directement ici
    // Pas de useEffect, pas de useState, pas de fetch !
    const seances: SeanceHistorique[] = await getHistorique();

    if (!seances || seances.length === 0) {
        return <p>Aucune séance trouvée dans la base de données.</p>;
    }

    return (
        <div>
            <h1>Historique des entraînements</h1>
            
            {seances.map((seance) => (
                <div key={seance.id}>
                    <h2>{seance.nom}</h2>
                    <p>Date : {seance.date}</p>

                    <table border={1}>
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
                                    <td>{exo.exercice_nom}</td>
                                    <td>{exo.nb_series}</td>
                                    <td>{exo.nb_reps}</td>
                                    <td>{exo.poids} kg</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <br />
                </div>
            ))}
        </div>
    );
}