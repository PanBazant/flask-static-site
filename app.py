from flask import Flask, render_template, url_for, json
from itsdangerous import encoding


app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/menu")
def menu():
    with open('static/data/menu.json', 'r', encoding="utf-8") as myfile:
        data = myfile.read()
    print(data)
    return render_template("menu.html", title="page", jsonfile=json.dumps(data))


@app.route("/reservation")
def reservation():
    return render_template("reservation.html")


@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/gallery")
def gallery():
    return render_template("gallery.html")