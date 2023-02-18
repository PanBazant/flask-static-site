from flask import Flask


app = Flask(__name__)


from app import views



class User:

    def __init__(self):
        self.id = 0
        self.name = ""
        self.password = ""
        self.reservation = []
        self.order = []
        self.phone = ""
        self.mail = ""

    def login(self):
        pass

    def make_order(self):
        pass

    def make_reservation(self):
        pass


class Order:

    def __init__(self):
        self.id = 0
        self.size = 0
        self.total_price = 0
        self.status = 0


class Pizzas:

    def __init__(self):
        self.id = 0
        self.name = ""
        self.ingredients = []
        self.spiciness = 0
        self.vegetarian = False
        self.size = "S"

class PizzaSizes:

    def __init__(self):
        self.name = ""
        self.size = "S"
        self.price = 30

class Reservation:
    
    def __init__(self):
        self.id = 0
        self.time = 0
        self.people = 0
        self.email = ""
        self.user_id = 0
        self.remarks = ""
        self.status = "start"




