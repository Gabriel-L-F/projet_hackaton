// Ajoute cette ligne en haut du fichier :
import { db } from '@/lib/db'; 

import { SeanceHistorique } from '@/types/workout';

interface SQLRow {
    id: number;
    nom: string;
    date: string | Date;
    exo_nom: string | null;
    nb_series: number;
    nb_reps: number;
    poids: number;
    ordre: number;
}

export async function getHistorique(): Promise<SeanceHistorique[]> {
    // Maintenant 'db' est reconnu !
    const [rows] = await db.query<any[]>(`
        SELECT 
            s.id, 
            s.nom, 
            s.date, 
            e.nom as exo_nom, 
            se.nb_series, 
            se.nb_reps, 
            se.poids, 
            se.ordre
        FROM seance s
        LEFT JOIN seance_exercice se ON s.id = se.seance_id
        LEFT JOIN exercice e ON se.exercice_id = e.id
        ORDER BY s.date DESC, se.ordre ASC
    `);

    // ... reste du code pour transformer les rows ...
    const historique: Record<number, SeanceHistorique> = {};
    rows.forEach(row => {
        if (!historique[row.id]) {
            historique[row.id] = {
                id: row.id,
                nom: row.nom,
                date: new Date(row.date).toLocaleDateString('fr-FR'),
                exercices: []
            };
        }
        if (row.exo_nom) {
            historique[row.id].exercices.push({
                exercice_nom: row.exo_nom,
                nb_series: row.nb_series,
                nb_reps: row.nb_reps,
                poids: Number(row.poids),
                ordre: row.ordre
            });
        }
    });

    return Object.values(historique);
}