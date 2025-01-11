from flask import Flask, request, jsonify, send_from_directory
import os
from werkzeug.utils import secure_filename
import matlab.engine
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Configurations
UPLOAD_FOLDER = "uploads"
TINTED_FOLDER = "tinted_images"
ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg"}
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
app.config["TINTED_FOLDER"] = TINTED_FOLDER

# Ensure directories exist
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(TINTED_FOLDER, exist_ok=True)

# Start MATLAB Engine
eng = matlab.engine.start_matlab()

def allowed_file(filename):
    """Check if the file has a valid extension."""
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/apply-tint', methods=['POST'])
def apply_tint():
    """Handle the tint application request."""
    if 'photo' not in request.files or 'tint' not in request.form:
        return jsonify({"success": False, "message": "Missing photo or tint type."}), 400

    file = request.files['photo']
    tint_type = request.form['tint']

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)

        try:
            # Define MATLAB output path
            tinted_filename = f"{os.path.splitext(filename)[0]}_{tint_type}.jpg"
            tinted_path = os.path.join(app.config['TINTED_FOLDER'], tinted_filename)

            # Call MATLAB function
            tint_functions = {
                "red": "applyRedTint",
                "green": "applyGreenTint",
                "blue": "applyBlueTint",
                "yellow": "applyYellowTint",
                "gray": "applyGrayTint",
            }

            if tint_type in tint_functions:
                matlab_func = getattr(eng, tint_functions[tint_type])
                matlab_func(file_path, tinted_path, nargout=0)
            else:
                return jsonify({"success": False, "message": "Invalid tint type."}), 400

            return jsonify({
                "success": True,
                "message": f"{tint_type} tint applied successfully.",
                "tintedImageUrl": f"/tinted_images/{tinted_filename}"
            }), 200
        except matlab.engine.MatlabExecutionError as e:
            return jsonify({"success": False, "message": f"MATLAB Error: {str(e)}"}), 500
        except Exception as e:
            return jsonify({"success": False, "message": f"Error: {str(e)}"}), 500
    else:
        return jsonify({"success": False, "message": "Invalid file type."}), 400

@app.route('/tinted_images/<filename>', methods=['GET'])
def serve_tinted_image(filename):
    """Serve tinted images from the tinted folder."""
    try:
        return send_from_directory(app.config['TINTED_FOLDER'], filename)
    except FileNotFoundError:
        return jsonify({"success": False, "message": "File not found."}), 404

if __name__ == "__main__":
    app.run(debug=True)
