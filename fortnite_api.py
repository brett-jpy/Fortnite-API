import requests
import json
import os

"""
https://fortniteapi.io/
"""


##########
# Global
##########
api_key = "key-goes-here"
headers = {"Authorization": api_key}

#########
# Helper Functions
#########
def pretty_print(func):
    def wrapper():
        return json.dumps(func(), indent=4)
    return wrapper

def download_file(func):
    def wrapper():
        with open("current_map.png", "wb") as f:
            f.write(func())
            f.close()
        return None
    return wrapper

#########
# API Requests
#########
def player_stats(idd):
    r = requests.get("https://fortniteapi.io/v1/stats?account={}".format(idd), headers=headers)
    return r
    
def player_id(player):
    r = requests.get("https://fortniteapi.io/v1/lookup?username={}".format(player), headers=headers)
    return r

@pretty_print
def items():
    r = requests.get("https://fortniteapi.io/v2/items/list?lang=en", headers=headers)
    return r.json()

@pretty_print
def daily_shop():
    r = requests.get("https://fortniteapi.io/v2/shop?lang=en", headers=headers)
    return r.json()

@download_file
def current_map():
    r = requests.get("https://media.fortniteapi.io/images/map.png", headers=headers)
    return r.content

@download_file
def current_map_poi():
    r = requests.get("https://media.fortniteapi.io/images/map.png?showPOI=true", headers=headers)
    return r.content
