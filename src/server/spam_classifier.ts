"use server";

import { exec } from "child_process";
import { promisify } from "util";
import path from "path";

const execAsync = promisify(exec);

export async function ClasifyEmail(email: string) {
  try {
    const scriptPath = path.resolve(
      __dirname,
      "../../../src/model/spam_classifier.py"
    );

    // Ejecutar el script de Python de manera asíncrona
    const { stdout } = await execAsync(`python3 "${scriptPath}" "${email}"`);

    // Parsear la salida del script (que es JSON)
    const resultado = JSON.parse(stdout);

    return resultado;
  } catch (error) {
    console.error("Error al ejecutar o procesar el script de Python:", error);
    throw new Error("Error al ejecutar o procesar el script de Python");
  }
}
