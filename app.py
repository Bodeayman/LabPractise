from flask import Flask, render_template,request,redirect

app = Flask(__name__)


@app.route('/')
def main():
    return render_template("index.html")
@app.route("/submit",methods=['GET','POST'])
def submit():
    if request.method == 'POST':
        name = request.form["name"]
        email = request.form["email"]
        faculty = request.form["fac"]
        uni = request.form["uni"]
        return render_template("results.html",name=name,email=email,faculty = faculty , university = uni)
    elif request.method == 'GET':
        return render_template("index.html")



if __name__ == '__main__':
    app.run(debug=True)
