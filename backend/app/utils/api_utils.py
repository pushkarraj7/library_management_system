from flask import jsonify

def success_response(data=None, message=None):
    response = {'success': True}
    if data:
        response['data'] = data
    if message:
        response['message'] = message
    return jsonify(response), 200

def error_response(message, status_code):
    response = {'success': False, 'message': message}
    return jsonify(response), status_code
