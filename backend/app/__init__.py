from flask import Flask
from app.config.database import db

def create_app():
    app = Flask(__name__)
    app.config.from_object('app.config.settings')
    
    db.init_app(app)
    
    from app.routes.books import books_bp
    from app.routes.members import members_bp
    app.register_blueprint(books_bp)
    app.register_blueprint(members_bp)
    
    return app
