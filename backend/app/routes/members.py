from flask import Blueprint, request
from app.utils.api_utils import success_response, error_response
from app.config.database import db
from app.models.member import Member
from app.routes import members_bp

@members_bp.route('/members', methods=['GET'])
def get_members():
    members = Member.query.all()
    return success_response(data=[member.serialize() for member in members])

@members_bp.route('/members', methods=['POST'])
def create_member():
    data = request.get_json()
    new_member = Member(name=data['name'])
    db.session.add(new_member)
    db.session.commit()
    return success_response(message='Member created successfully')

@members_bp.route('/members/<int:member_id>', methods=['PUT'])
def update_member(member_id):
    member = Member.query.get(member_id)
    if not member:
        return error_response('Member not found', 404)
    
    data = request.get_json()
    member.name = data.get('name', member.name)
    
    db.session.commit()
    return success_response(message='Member updated successfully')

@members_bp.route('/members/<int:member_id>', methods=['DELETE'])
def delete_member(member_id):
    member = Member.query.get(member_id)
    if not member:
        return error_response('Member not found', 404)
    
    db.session.delete(member)
    db.session.commit()
    return success_response(message='Member deleted successfully')

@members_bp.route('/members/search', methods=['GET'])
def search_members():
    keyword = request.args.get('keyword')
    if not keyword:
        return error_response('Keyword parameter is required', 400)
    
    members = Member.search_members(keyword)
    return success_response(data=[member.serialize() for member in members])

@members_bp.route('/members/filter', methods=['GET'])
def filter_members_by_name():
    name = request.args.get('name')
    if not name:
        return error_response('Name parameter is required', 400)
    
    members = Member.filter_members_by_name(name)
    return success_response(data=[member.serialize() for member in members])
