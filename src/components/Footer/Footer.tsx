import styles from "./Footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Rappel du Logo */}
        <div className={styles.colonne}>
          <div className={styles.logo}>
            Fit<span>Nexus</span>
          </div>
          <p style={{ color: "#94a3b8", fontSize: "14px", marginTop: "10px" }}>
            Suivi sportif intelligent.
          </p>
        </div>

        {/* Liens de navigation */}
        <div className={styles.colonne}>
          <h4>Navigation</h4>
          <ul>
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/historique">Historique</Link>
            </li>
            <li>
              <Link href="/about">À propos</Link>
            </li>
          </ul>
        </div>

        {/* Section Créateurs (demandée) */}
        <div className={styles.colonne}>
          <h4>L'Équipe</h4>
          <div className={styles.creators}>
            <p>Gabriel L.F</p>
            <p>Jessé Lazare K.T</p>
            <p style={{ fontSize: "11px", marginTop: "10px" }}>
              Projet Bachelor A2
            </p>
          </div>
        </div>

        {/* Copyright (demandé) */}
        <div className={styles.copyright}>
          © 2026 FitNexus. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
