const AUTH_TOKEN_INVALID = {
    code: '500',
    message: 'The auth token provided is invalid'
};

const DATABASE_CONN_ERROR = {
    code: '500',
    message: 'Database connection refused'
};

const NO_AUTH = {
    code: '401',
    message: 'Auth token empty/undefined'
}

const NO_INSERT = {
    code: '200',
    message: 'Faild to create'
}

const ALREADY_EXIST = {
    code: '409',
    message: 'Record Already exits!'
}

const GENERIC_ERROR = {
    code: '400',
    message: 'Error Occurred'
}

const USERNAME_PASSWORD_NO_MATCH = {
    code: '204',
    message: 'Username and password does not match'
}

const USERNAME_DOES_NOT_EXIST = {
    code: '404',
    message: 'User doesnot exist'
}

const ERROR_CREATING_JWT = {
    code: '500',
    message: "Error creating token"
}

const PHONE_NOT_VALID = {
    code: '404',
    message: 'Phone number not valid'
}
 
module.exports = {
    AUTH_TOKEN_INVALID,
    DATABASE_CONN_ERROR,
    NO_AUTH,
    NO_INSERT,
    ALREADY_EXIST,
    GENERIC_ERROR,
    USERNAME_PASSWORD_NO_MATCH,
    USERNAME_DOES_NOT_EXIST,
    ERROR_CREATING_JWT,
    PHONE_NOT_VALID
};