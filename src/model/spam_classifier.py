import sys
import joblib
import json

# Cargar el modelo y el vectorizador
model = joblib.load('Modelo_Clasificación_Spam.pkl')
vectorizer = joblib.load('CountVectorizer_Spam.pkl')

# Tomar el correo como argumento
correo = sys.argv[1]

# Procesar y predecir
correo_vectorizado = vectorizer.transform([correo])
prediccion = model.predict(correo_vectorizado)
probabilidad = model.predict_proba(correo_vectorizado)

# Resultado de la predicción
resultado = {
    "resultado": "Spam" if prediccion[0] == 1 else "No Spam",
    "probabilidad_spam": probabilidad[0][1],
    "probabilidad_no_spam": probabilidad[0][0]
}

# Imprimir el resultado como JSON
print(json.dumps(resultado))
