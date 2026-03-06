"use client";
import React, { useState } from "react";
import { saveWorkout } from "@/app/actions";

export default function WorkoutForm({ exercicesInitial }: { exercicesInitial: any[] }) {
  const [rows, setRows] = useState([{ id: Date.now() }]);

  return (
    <form action={saveWorkout}>
      {/* Champs Table seance */}
      <label>Nom :</label>
      <input type="text" name="nom_seance" required />
      
      <label>Date :</label>
      <input type="date" name="date_seance" required />

      <hr />

      {/* Champs Table seance_exercice */}
      {rows.map((row, index) => (
        <div key={row.id}>
          <select name={`exercice_id_${index}`} required>
            <option value="">Choisir exercice</option>
            {exercicesInitial.map(ex => (
              <option key={ex.id} value={ex.id}>{ex.nom}</option>
            ))}
          </select>

          <input type="number" name={`series_${index}`} placeholder="Séries" />
          <input type="number" name={`reps_${index}`} placeholder="Reps" />
          <input type="number" step="0.5" name={`poids_${index}`} placeholder="Poids" />

          <button type="button" onClick={() => setRows(rows.filter(r => r.id !== row.id))}>
            Supprimer
          </button>
        </div>
      ))}

      <button type="button" onClick={() => setRows([...rows, { id: Date.now() }])}>
        Ajouter exercice
      </button>

      <button type="submit">Enregistrer</button>
    </form>
  );
}