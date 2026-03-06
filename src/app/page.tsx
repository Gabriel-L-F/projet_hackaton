// src/app/page.tsx
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"; // L'import était déjà bon
import WorkoutForm from "@/components/WorkoutForm/WorkoutForm"; 
import { db } from "@/lib/db";


export default async function Page() {
  // Récupère les exercices pour le select
  const [exercices]: any = await db.query("SELECT id, nom FROM exercice");

  return (
    <>
      <Header />

      <main style={{ minHeight: "80vh", padding: "2rem" }}>
        <h1>FitNexus</h1>
        <p>Votre site de suivi sportif</p>
      </main>

    <div>
      <h1>Nouvelle Séance</h1>
      <WorkoutForm exercicesInitial={exercices} />
    </div>
      <Footer />
    </>
  );
}