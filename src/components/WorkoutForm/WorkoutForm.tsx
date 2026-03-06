"use client";
import React, { useState } from "react";
import { saveWorkout } from "@/app/actions";
import styles from "./WorkoutForm.module.scss";

export default function WorkoutForm({
  exercicesInitial,
}: {
  exercicesInitial: any[];
}) {
  const [rows, setRows] = useState([{ id: Date.now() }]);

  return (
    <div className={styles.pageCenter}>
      <div className={styles.formWrapper}>
        <form action={saveWorkout} className={styles.workoutForm}>
          <h1>
            Nouvelle <span>Séance</span>
          </h1>

          <div>
            <label>Nom de la séance :</label>
            <input
              type="text"
              name="nom_seance"
              placeholder="Ex: Musculation Dos"
              required
            />
          </div>

          <div>
            <label>Date :</label>
            <input type="date" name="date_seance" required />
          </div>

          <hr style={{ borderColor: "#333", margin: "20px 0" }} />

          {rows.map((row, index) => (
            <div key={row.id} className={styles.exerciceRow}>
              <select name={`exercice_id_${index}`} required>
                <option value="">Exercice</option>
                {exercicesInitial.map((ex) => (
                  <option key={ex.id} value={ex.id}>
                    {ex.nom}
                  </option>
                ))}
              </select>

              <input
                type="number"
                name={`series_${index}`}
                placeholder="Séries"
              />
              <input type="number" name={`reps_${index}`} placeholder="Reps" />
              <input
                type="number"
                step="0.5"
                name={`poids_${index}`}
                placeholder="Poids"
              />

              <button
                type="button"
                className={styles.btnDelete}
                onClick={() => setRows(rows.filter((r) => r.id !== row.id))}
              >
                ×
              </button>
            </div>
          ))}

          <button
            type="button"
            className={styles.btnAdd}
            onClick={() => setRows([...rows, { id: Date.now() }])}
          >
            + Ajouter un exercice
          </button>

          <button type="submit" className={styles.btnSubmit}>
            Enregistrer la séance
          </button>
        </form>
      </div>
    </div>
  );
}
