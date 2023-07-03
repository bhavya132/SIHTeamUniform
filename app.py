import re
from datetime import datetime
import base64
import pandas as pd
from flask import Flask, render_template, request
import firebase_admin
from firebase_admin import credentials, firestore, storage

cred_obj = credentials.Certificate('floodbase.json')
default_app = firebase_admin.initialize_app(cred_obj, {
    'databaseURL':'https://floodbase-15dfb.firebaseio.com'
})

db = firestore.client()
# read data
# get a document with known id # ID generated by firebase
# result = db.collection('floods').document("wxYseYm1bcltmQ4hiGtq").get()
result = db.collection('floods').stream()
# print(default_app.name)
# ref = db.reference("/floods/wxYseYm1bcltmQ4hiGtq")
# print(ref.get())

app = Flask(__name__)
# Ensure templates are auto-reloaded


@app.route("/")
def main():
    result = db.collection('floods').stream()
    flooded_results = dict()
    if result:
        for i,r in enumerate(result):
            db_result = r.to_dict()
            if ('flood' in list(db_result)) and (db_result['flood'] is True):
                flooded_results[i] = db_result
    print(flooded_results)
    return render_template("index.html",flooded_results = flooded_results)

@app.route("/hello/<name>")
def hello_there(name = None):
    return render_template(
        "hello_there.html",
        name=name,
        date=datetime.now()
    )

@app.route("/test")
def test_georaster():
    mumbai_land_sub_fp = r'mumbai_land_subsidence_clipped.tif'
    # with open(mumbai_land_sub_fp, "rb") as image_file:
    #     encoded_string = base64.b64encode(image_file.read())

    return render_template("load-via-script-tag.html",mumbai_land_sub_fp=mumbai_land_sub_fp)

@app.route("/my_map")
def my_map():
    result = db.collection('floods').stream()
    flooded_results = dict()
    if result:
        for i,r in enumerate(result):
            db_result = r.to_dict()
            if ('flood' in list(db_result)) and (db_result['flood'] is True):
                flooded_results[i] = db_result
    print(flooded_results)

    df = pd.read_csv('https://gist.githubusercontent.com/mickeykedia/9d9144072c5f637c26995569dd347614/raw/b65134846607235adf4ad6498713deed77d3b4b5/ward_level_collated.csv')
    df_cropped = df.loc[:,['Ward_Alphabet','Ward_Names','TOT_P_DEN']].set_index(['Ward_Alphabet'])
    mumbai_dict = df_cropped.to_dict('index')

    return render_template("coastmap.html",flooded_results = flooded_results, mumbai_dict=mumbai_dict)
    # return render_template("my_map.html")

@app.route("/floodmap")
def test_floodmap():
    result = db.collection('floods').stream()
    flooded_results = []
    if result:
        for r in result:
            db_result = r.to_dict()
            if ('flood' in list(db_result)) and (db_result['flood'] is True):
                flooded_results.append(db_result)
    print(flooded_results)

    df = pd.read_csv('https://gist.githubusercontent.com/mickeykedia/9d9144072c5f637c26995569dd347614/raw/b65134846607235adf4ad6498713deed77d3b4b5/ward_level_collated.csv')
    df_cropped = df.loc[:,['Ward_Alphabet','Ward_Names','TOT_P_DEN']].set_index(['Ward_Alphabet'])
    mumbai_dict = df_cropped.to_dict('index')

    return render_template("floodmap.html",flooded_results = flooded_results, mumbai_dict=mumbai_dict)

@app.route("/geemap")
def test_geemap():
    return render_template("floodmap_gee.html")

@app.route("/mumbaiward")
def test_mumbai():
    return render_template("mumbai_ward.html")

@app.route("/topojson")
def test_topojson():
    return render_template("test_topojson.html")

@app.route("/mumbaipopn")
def test_mumbaipopn():
    df = pd.read_csv('https://gist.githubusercontent.com/mickeykedia/9d9144072c5f637c26995569dd347614/raw/b65134846607235adf4ad6498713deed77d3b4b5/ward_level_collated.csv')
    df_cropped = df.loc[:,['Ward_Alphabet','Ward_Names','TOT_P_DEN']].set_index(['Ward_Alphabet'])
    mumbai_dict = df_cropped.to_dict('index')
    return render_template("mumbaipopn.html",mumbai_dict=mumbai_dict)

@app.route("/wms_test")
def wms_test():
    return render_template("wms_test.html")

@app.route("/svg_test")
def svg_test():
    return render_template("svg_test.html")

if __name__ == "__main__":
    # for r in result:
    #     print(r.to_dict())
    app.jinja_env.auto_reload = True
    app.config["TEMPLATES_AUTO_RELOAD"] = True
    app.run(debug=True)
    # flooded_results = dict()
    # if result:
    #     for i,r in enumerate(result):
    #         db_result = r.to_dict()
    #         if ('flood' in list(db_result)) and (db_result['flood'] is True):
    #             flooded_results[i] = db_result
    # print(flooded_results)
    # app.run(port=1111)