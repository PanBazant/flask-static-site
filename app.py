from flask import Flask, render_template, url_for


app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/offert")
def offert():
    return render_template("index.html")


@app.route("/opinion")
def opinion():
    return render_template("index.html")


@app.route("/about_us")
def about_us():
    return render_template("index.html")