from flask import Flask, render_template, url_for


app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/menu")
def menu():
    return render_template("menu.html")


@app.route("/opinion")
def opinion():
    return render_template("index.html")


@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/gallery")
def gallery():
    return render_template("gallery.html")