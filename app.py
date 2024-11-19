from flask import Flask, render_template, url_for, redirect, request
import os
from pymongo import MongoClient
import requests
import json
from dotenv import load_dotenv, dotenv_values 

##########
# Global Variables
##########
app = Flask(__name__)
api_key = os.getenv("API_KEY")
headers = {"Authorization": api_key}
load_dotenv() 

##########
# Functions
##########
def player_stats(username):
    r = requests.get("https://fortniteapi.io/v1/lookup?username={}".format(username), headers=headers)
    r = requests.get("https://fortniteapi.io/v1/stats?account={}".format(r.json()["account_id"]), headers=headers)
    return json.dumps(r.json())

def sort_items(data, selected_rarity):
    print(selected_rarity)
    keepers = []
    for item in data:
        if item["rarity"].lower() in selected_rarity:
            keepers.append(item)
    return keepers

##########
# View Routes
##########
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/items")
def items():
    return render_template("items.html")

##########
# Data Routes
##########
@app.route("/player")
def player():
    username = request.args.get('username')
    print(username)
    data = player_stats(username)
    return data

@app.route("/all_items")
def all_items():
    rarity = request.args.get("rarity")
    rarity = [x for x in rarity.split(",")]
    if len(rarity) < 1:
        return json.dumps({"response": "Make a Selection"})
    else:
        r = requests.get("https://fortniteapi.io/v1/loot/list?lang=en", headers=headers)
        
        first_items = []
        data = sort_items(r.json()["weapons"], rarity)

        i = int(request.args.get("offset"))
        N = int(request.args.get("limit"))
        while True:
            first_items.append(data[i])
            i = i + 1
            if i == N:
                break
        return json.dumps(first_items)

if __name__=="__main__":
    app.run(debug=True)