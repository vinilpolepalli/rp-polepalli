from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/authors')
def authors():
    return render_template('authors.html')

@app.route('/procedure')
def procedure():
    return render_template('procedure.html')

@app.route('/results')
def results():
    return render_template('results.html')

if __name__ == '__main__':
    app.run(debug=True)
