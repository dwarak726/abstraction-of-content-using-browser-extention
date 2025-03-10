import firebase_admin
from firebase_admin import credentials, firestore
import joblib
import numpy as np
import tensorflow as tf
from tensorflow.keras.preprocessing.sequence import pad_sequences

# Load the trained model
model = tf.keras.models.load_model("rnn_emotion_classifier.h5")

# Load the tokenizer and label encoder
tokenizer = joblib.load("tokenizer.pkl")
label_encoder = joblib.load("label_encoder.pkl")

# Initialize Firebase Admin SDK
cred = credentials.Certificate("path/to/your/firebase-service-account.json")  # Replace with your Firebase credentials
firebase_admin.initialize_app(cred)

# Connect to Firestore
db = firestore.client()

# Fetch text data from Firebase Firestore
def fetch_text_from_firebase(collection_name):
    docs = db.collection(collection_name).stream()
    texts = []
    for doc in docs:
        data = doc.to_dict()
        if "text" in data:  # Assuming text is stored under the key 'text'
            texts.append(data["text"])
    return texts

# Preprocess text for model prediction
def preprocess_text(texts, tokenizer, max_len=100):
    sequences = tokenizer.texts_to_sequences(texts)
    padded_sequences = pad_sequences(sequences, maxlen=max_len, padding="post")
    return padded_sequences

# Predict the class of text
def predict_text_sensitivity(texts):
    processed_texts = preprocess_text(texts, tokenizer)
    predictions = model.predict(processed_texts)
    predicted_labels = np.argmax(predictions, axis=1)
    decoded_labels = label_encoder.inverse_transform(predicted_labels)  # Convert index back to label
    return decoded_labels

# Fetch, process, and classify text
firebase_texts = fetch_text_from_firebase("your-collection-name")  # Replace with your Firestore collection name
if firebase_texts:
    results = predict_text_sensitivity(firebase_texts)
    for text, label in zip(firebase_texts, results):
        print(f"Text: {text[:50]}... | Predicted Sensitivity: {label}")
else:
    print("No text data found in Firebase.")
