// types/workout.ts

export interface ExerciceDetail {
    exercice_nom: string;
    nb_series: number;
    nb_reps: number;
    poids: number;
    ordre: number;
}

export interface SeanceHistorique {
    id: number;
    nom: string;
    date_seance: string;
    exercices: ExerciceDetail[];
}