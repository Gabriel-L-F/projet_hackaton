// src/app/page.tsx
import WorkoutForm from "@/components/WorkoutForm/WorkoutForm"; 
import { db } from "@/lib/db";


export default async function Page() {
  // Récupère les exercices pour le select
  const [exercices]: any = await db.query("SELECT id, nom FROM exercice");

  return (
    <div>
      <h1>Nouvelle Séance</h1>
      <WorkoutForm exercicesInitial={exercices} />
    </div>
  );
}