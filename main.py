from flask import Flask, request, jsonify

app = Flask(__name__)

FILE_NAME = "responses.txt"

@app.route("/save", methods=["POST"])
def save_response():
    data = request.get_json()
    response = data.get("answer")

    if response:
        with open(FILE_NAME, "a") as file:
            file.write(response + "\n")  

    return jsonify({"message": "Response saved!"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
