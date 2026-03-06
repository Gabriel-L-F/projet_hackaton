// src/app/page.tsx
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"; // L'import était déjà bon

export default function Page() {
  return (
    <>
      <Header />

      <main style={{ minHeight: "80vh", padding: "2rem" }}>
        <h1>FitNexus</h1>
        <p>Votre site de suivi sportif</p>
      </main>

      <Footer />
    </>
  );
}
