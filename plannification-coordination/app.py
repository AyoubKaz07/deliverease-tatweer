from flask import Flask, request, jsonify, render_template
import numpy as np
import pandas as pd
# from tensorflow import keras
import h5py
import pickle

# Initialize Flask app
app = Flask(__name__)

# Load trained model
with h5py.File("../lgbm_model.h5", "r") as f:
    model_bytes = f["model"][()]

# Deserialize the model
model = pickle.loads(model_bytes.tobytes())  # Convert back to bytes and load




FEATURES = ['item_cluster', 'sales_roll_mean_30', 'store_cluster', 'item', 'store', 'day_of_week', 'season', 'sales_ewm_alpha_05_lag_105', 'sales_ewm_alpha_05_lag_112', 'sales_ewm_alpha_05_lag_91', 'sales_ewm_alpha_05_lag_98', 'sales_ewm_alpha_05_lag_180', 'week_of_year', 'sales_ewm_alpha_05_lag_270', 'month', 'sales_ewm_alpha_05_lag_365', 'sales_ewm_alpha_05_lag_546', 'sales_ewm_alpha_05_lag_728', 'day_of_year']

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get JSON data
        data = request.get_json()

        # Ensure input is in correct format
        if not isinstance(data, (list, dict)):
            return jsonify({"error": "Input must be a list of dictionaries or a single dictionary"}), 400

        # Convert single object into list
        if isinstance(data, dict):
            data = [data]

        # Convert input to DataFrame
        df = pd.DataFrame(data)

        # Define expected features (replace with actual feature names)

        # Remove unexpected features
        df = df[[col for col in df.columns if col in FEATURES]]

        # Check if all required features are present
        missing_features = [feature for feature in FEATURES if feature not in df.columns]
        print(missing_features)
        if missing_features:
            return jsonify({"error": f"Missing features: {missing_features}"}), 400
        print(df)
        # Predict using the model
        predictions = model.predict(df)
        print(predictions)

        return jsonify({"predictions": predictions})

    except Exception as e:
        print(e)
        return jsonify({"error": str(e)}), 500



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
