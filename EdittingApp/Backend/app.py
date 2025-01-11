from flask import Flask, request, jsonify
import matlab.engine

app = Flask(__name__)

# Start MATLAB Engine
print("Starting MATLAB engine...")
eng = matlab.engine.start_matlab()
print("MATLAB engine started successfully.")

@app.route('/apply-tint', methods=['POST'])
def apply_tint():
    try:
        # Get data from request
        data = request.json
        tint_color = data.get('tint_color')
        image_path = data.get('image_path')  # Path to the uploaded image

        if not tint_color or not image_path:
            return jsonify({"error": "Missing tint_color or image_path"}), 400

        # Call MATLAB function for red tint as an example
        if tint_color == "red":
            output_path = eng.applyRedTint(image_path, nargout=1)
        elif tint_color == "green":
            output_path = eng.applyGreenTint(image_path, nargout=1)
        elif tint_color == "blue":
            output_path = eng.applyBlueTint(image_path, nargout=1)
        else:
            return jsonify({"error": "Invalid tint color"}), 400

        return jsonify({"message": "Tint applied successfully", "output_path": output_path})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/health-check', methods=['GET'])
def health_check():
    return jsonify({"message": "Backend is running!"})

if __name__ == '__main__':
    app.run(debug=True)
