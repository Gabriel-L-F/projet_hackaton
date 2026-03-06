// src/app/actions.ts
"use server";

import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export async function saveWorkout(formData: FormData) {
  const nom = formData.get("nom_seance") as string;
  const date = formData.get("date_seance") as string;

  // Insertion de la séance
  const [result]: any = await db.query(
    "INSERT INTO seance (nom, date) VALUES (?, ?)",
    [nom, date + " 00:00:00"]
  );
  
  const seanceId = result.insertId;

  // Filtrer les exercices dynamiques
  const keys = Array.from(formData.keys()).filter(k => k.startsWith("exercice_id_"));

  for (const key of keys) {
    const index = key.split("_").pop();
    const exId = formData.get(`exercice_id_${index}`);
    const series = formData.get(`series_${index}`) || 0;
    const reps = formData.get(`reps_${index}`) || 0;
    const poids = formData.get(`poids_${index}`) || 0;

    if (exId) {
      await db.query(
        "INSERT INTO seance_exercice (seance_id, exercice_id, ordre, nb_series, nb_reps, poids) VALUES (?, ?, ?, ?, ?, ?)",
        [seanceId, exId, parseInt(index!) + 1, series, reps, poids]
      );
    }
  }

  redirect("/");
}