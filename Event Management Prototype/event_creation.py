from flask import Flask, render_template, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# In-memory storage for events (you can replace this with a database)
events = []

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/events')
def events_page():
    return render_template('events.html', events=events)

@app.route('/admin')
def admin_page():
    return render_template('admin.html')

@app.route('/create_event', methods=['POST'])
def create_event():
    data = request.json
    new_event = {
        'id': len(events) + 1,
        'link': data['link'],
        'description': data['description'],
        'image': data['image']
    }
    events.append(new_event)
    return jsonify(new_event), 201

@app.route('/api/events', methods=['GET'])
def get_events():
    return jsonify(events)

if __name__ == '__main__':
    app.run(debug=True)
