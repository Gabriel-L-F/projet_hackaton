// src/app/page.tsx
import Header from "../components/Header/Header"; // Vérifiez bien le chemin relatif

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <h1>FitNexus</h1>
        <p>Votre site de suivi sportif</p>
      </main>
    </>
  );
}
