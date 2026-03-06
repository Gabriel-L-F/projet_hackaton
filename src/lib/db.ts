// src/lib/db.ts
import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'salle_ms', 
});

export async function getExercices() {
  const [rows] = await db.query("SELECT id, nom, muscle FROM exercice ORDER BY nom ASC");
  return rows as any[];
}