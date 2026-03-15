"use server";
import axios from "axios";
import { env } from "~/env";

export async function ClassifyEmail(email: string) {
  try {
    const result = (await axios.post(`${env.API_URL}/classify`, { email }))
      .data;

    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Error al ejecutar o procesar el script de Python");
  }
}
