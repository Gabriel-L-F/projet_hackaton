import React, { useEffect, useState } from 'react';
import { SeanceHistorique } from '@/types/workout';

const HistoriquePage: React.FC = () => {
    const [seances, setSeances] = useState<SeanceHistorique[]>([]);

    useEffect(() => {
        // Ta logique de fetch ici
    }, []);

    return (
        <div>
            <h1>Historique des entraînements</h1>

            {seances.length === 0 ? (
                <p>Aucune séance enregistrée.</p>
            ) : (
                seances.map((seance) => (
                    <div key={seance.id}>
                        <hr />
                        <div>
                            <h2>{seance.nom}</h2>
                            <p>Date : {seance.date_seance}</p>
                        </div>

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
                    </div>
                ))
            )}
        </div>
    );
};

export default HistoriquePage;