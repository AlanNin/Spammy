"use server";
import axios from "axios";

export async function ClassifyEmail(email: string) {
  try {
    const result = await axios.post(
      "https://spammy-api.onrender.com/classify",
      {
        email: email,
      }
    );

    const resultado = result.data;

    return resultado;
  } catch (error) {
    console.log(error);
    throw new Error("Error al ejecutar o procesar el script de Python");
  }
}
