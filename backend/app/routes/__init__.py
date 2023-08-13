from flask import Blueprint

books_bp = Blueprint('books', __name__)
members_bp = Blueprint('members', __name__)

from app.routes import books, members  # Import your route files
