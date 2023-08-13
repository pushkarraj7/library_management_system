from app.config.database import db

class Member(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    # Add more member-related fields here

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            # Add other fields here
        }

    def update_member(self, name=None):
        if name:
            self.name = name
        db.session.commit()

    def delete_member(self):
        db.session.delete(self)
        db.session.commit()

    # Add more methods for additional functionality as needed
