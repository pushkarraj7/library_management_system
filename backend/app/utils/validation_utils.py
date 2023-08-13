def validate_positive_integer(value):
    try:
        value = int(value)
        if value < 0:
            raise ValueError("Value must be a positive integer")
        return value
    except ValueError:
        raise ValueError("Invalid positive integer value")

def validate_non_empty_string(value):
    if not value or not isinstance(value, str):
        raise ValueError("Value must be a non-empty string")
    return value
