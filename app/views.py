from importlib.resources import path
from app import app
from flask import render_template, request, json, g
import os
import sqlite3


app_info = { #struktura konfiguracyjna aplikacji
    'db_file': 'C:/Users/Bazant/Documents/strony/kurs flask/fl/data/cantor.db'
}



def get_db():
    if not hasattr(g, 'sqlite_db'):
        conn = sqlite3.connect(app_info['db_file'])
        conn.row_factory = sqlite3.Row # zwraca dane w postaci słowników, inaczej zwraca tuple
        g.sqlite_db = conn
        print("polaczono")
    return g.sqlite_db

@app.teardown_appcontext
def close_db(error):
        if hasattr(g, 'sqlite3_db'):
            print("koniec")
            g.sqlite_db.close()



@app.route("/")
def index():
    return render_template("index.html")


@app.route("/menu")
def menu():
    print(os.curdir)
    with open('app/static/data/menu.json', 'r', encoding="utf-8") as myfile:
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

@app.route("/sign_in", methods=["GET", "POST"])
def sign_in():
    if request.method == "GET":
        return render_template("sign_in.html")
    else:
        for i in request.form:
           print("{} {}".format(request.form[i], i))
        
        return render_template("sign_in_post.html")

@app.route("/sign_up", methods=["GET", "POST"])
def sign_up():
    if request.method == "GET":
        return render_template("sign_up.html")
    else:
        for i in request.form:
           print("{} {}".format(request.form[i], i))
        
        return render_template("sign_up_post.html")

@app.route("/gallery")
def gallery():
    path_to_images = os.path.join("app", "static")
    path_to_images = os.path.join(path_to_images, 'images')
    images_file_list = os.listdir(path_to_images)
    return render_template("gallery.html", images_file_list=images_file_list)