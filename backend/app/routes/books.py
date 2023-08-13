from flask import Blueprint, request
import requests  # Add this line to import the 'requests' module
from app.models.book import Book
from app import db
from app.utils.api_utils import success_response, error_response

books_bp = Blueprint('books', __name__)

@books_bp.route('/import_books', methods=['POST'])
def import_books():
    try:
        page = request.args.get('page', default=2, type=int)
        title_query = request.args.get('title', default='and', type=str)
        
        url = f'https://frappe.io/api/method/frappe-library?page={page}&title={title_query}'
        response = requests.get(url)
        books_data = response.json()['message']

        books_to_import = [
            Book(
                isbn=book_data[0],  # Assuming ISBN is the 1st column
                title=book_data[1],  # Assuming title is the 2nd column
                authors=book_data[2],  # Assuming authors is the 3rd column
                quantity=book_data[3]  # Assuming quantity is the 4th column
            )
            for book_data in books_data
        ]
        
        db.session.add_all(books_to_import)
        db.session.commit()
        
        return success_response(message="Books imported successfully.")
    except Exception as e:
        return error_response(str(e), 500)
