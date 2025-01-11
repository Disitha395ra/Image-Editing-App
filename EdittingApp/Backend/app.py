from flask import Flask, request, jsonify
import os
from werkzeug.utils import secure_filename
import matlab.engine

app = Flask(__name__)

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
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/apply-tint', methods=['POST'])
def apply_tint():
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
            if tint_type == "red":
                eng.applyRedTint(file_path, tinted_path, nargout=0)
            elif tint_type == "green":
                eng.applyGreenTint(file_path, tinted_path, nargout=0)
            elif tint_type == "blue":
                eng.applyBlueTint(file_path, tinted_path, nargout=0)
            elif tint_type == "yellow":
                eng.applyYellowTint(file_path, tinted_path, nargout=0)
            elif tint_type == "gray":
                eng.applyGrayTint(file_path, tinted_path, nargout=0)
            else:
                return jsonify({"success": False, "message": "Invalid tint type."}), 400

            return jsonify({
                "success": True,
                "message": f"{tint_type} tint applied successfully.",
                "tintedImageUrl": f"/{tinted_path}"
            }), 200
        except Exception as e:
            return jsonify({"success": False, "message": str(e)}), 500
    else:
        return jsonify({"success": False, "message": "Invalid file type."}), 400

@app.route('/tinted_images/<filename>', methods=['GET'])
def serve_tinted_image(filename):
    return send_from_directory(app.config['TINTED_FOLDER'], filename)

if __name__ == "__main__":
    app.run(debug=True)
