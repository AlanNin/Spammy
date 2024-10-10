import sys
import joblib
import json
import os

# Obtener el directorio raíz del proyecto
current_dir = os.path.dirname(os.path.abspath(__file__))
root_dir = os.path.join(current_dir, '..', '..')

# Cargar el modelo y el vectorizador desde el directorio raíz
model_path = os.path.join(root_dir, 'src', 'model', 'Modelo_Clasificacion_Spam.pkl')
vectorizer_path = os.path.join(root_dir, 'src', 'model', 'CountVectorizer_Spam.pkl')

model = joblib.load(model_path)
vectorizer = joblib.load(vectorizer_path)

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
