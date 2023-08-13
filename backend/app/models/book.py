from app.config.database import db

class Book(db.Model):
    isbn = db.Column(db.String(255), primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    authors = db.Column(db.String(255), nullable=False)
    quantity = db.Column(db.Integer, default=0)

    def serialize(self):
        return {
            'isbn': self.isbn,
            'title': self.title,
            'authors': self.authors,
            'quantity': self.quantity
        }

    def update_book(self, title=None, authors=None, quantity=None):
        if title:
            self.title = title
        if authors:
            self.authors = authors
        if quantity is not None:
            self.quantity = quantity
        db.session.commit()

    def delete_book(self):
        db.session.delete(self)
        db.session.commit()

    @classmethod
    def search_books(cls, keyword):
        return cls.query.filter(
            db.or_(cls.title.ilike(f"%{keyword}%"), cls.authors.ilike(f"%{keyword}%"))
        ).all()

    @classmethod
    def filter_books_by_author(cls, authors):
        return cls.query.filter_by(authors=authors).all()
