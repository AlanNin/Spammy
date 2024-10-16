"use server";
import axios from "axios";

export async function ClassifyEmail(email: string) {
  try {
    const result = (
      await axios.post(
        "https://territorial-ariel-alan-organization-edc3cd2e.koyeb.app/classify",
        { email },
      )
    ).data;

    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Error al ejecutar o procesar el script de Python");
  }
}
