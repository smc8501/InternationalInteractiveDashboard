from flask import *


app = Flask(__name__)



@app.route("/")
def main_dashboard(): 
    return render_template("timeline3.html")


if __name__ == "__main__":
    app.run()