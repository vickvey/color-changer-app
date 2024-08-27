from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='public')

@app.route('/')
@app.route('/<path:filename>')
def serve_file(filename=None):
    if filename is None:
        filename = 'index.html'
    return send_from_directory(app.static_folder, filename)

if __name__ == '__main__':
    app.run(port=3000)
