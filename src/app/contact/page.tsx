import Header from "../../components/Header";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main style={styles.container}>
        <div style={styles.formCard}>
          <h2 style={styles.title}>Contactez FitNexus</h2>
          <p style={styles.subtitle}>
            Une question ? Notre équipe vous répond en moins de 24h.
          </p>

          <form style={styles.form}>
            <div style={styles.inputGroup}>
              <label htmlFor="name">Nom complet</label>
              <input
                type="text"
                id="name"
                placeholder="Votre nom"
                style={styles.input}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="votre@email.com"
                style={styles.input}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="subject">Sujet</label>
              <select id="subject" style={styles.input}>
                <option value="info">Informations générales</option>
                <option value="support">Support technique</option>
                <option value="partnership">Partenariat</option>
              </select>
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Comment pouvons-nous vous aider ?"
                style={styles.textarea}
                required
              ></textarea>
            </div>

            <button type="submit" style={styles.button}>
              Envoyer le message
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

// Styles rapides pour le centrage et le look
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh", // Centre verticalement par rapport à la vue
    padding: "20px",
  },
  formCard: {
    backgroundColor: "#f9f9f9",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "500px",
  },
  title: {
    textAlign: "center",
    marginBottom: "10px",
    color: "#333",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "14px",
    color: "#666",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  input: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "16px",
  },
  textarea: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "16px",
    resize: "none",
  },
  button: {
    backgroundColor: "#0070f3",
    color: "white",
    padding: "14px",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background 0.2s",
  },
};
