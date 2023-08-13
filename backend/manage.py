from app import create_app, db
from flask_cors import CORS

app = create_app()
CORS(app)  # Enable CORS for the entire app

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run()
