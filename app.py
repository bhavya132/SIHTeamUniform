import re
from datetime import datetime
import pandas as pd
from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def main():
    return "Hi"

@app.route("/hello/<name>")
def hello_there(name = None):
    return render_template(
        "hello_there.html",
        name=name,
        date=datetime.now()
    )

@app.route("/test")
def test_georaster():
    return render_template("load-via-script-tag.html")

@app.route("/floodmap")
def test_floodmap():
    return render_template("floodmap.html")

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

if __name__ == "__main__":
    app.run()