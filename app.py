from flask import Flask, render_template, url_for, json, request
import json


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


@app.route("/reservation", methods=["GET", "POST"])
def reservation():
    if request.method == "GET":
        return render_template("reservation.html")
    else:
        
        # for i in request.form:
        #     print("{} {}".format(request.form[i], i))

        json_object = json.dumps(request.form, indent = 4)

        with open("sample.json", "w") as outfile:
            outfile.write(json_object)

        return render_template("reservation_post.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/gallery")
def gallery():
    return render_template("gallery.html")