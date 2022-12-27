module.exports = password => {
    if ( password.length < 6 ) {
        return Promise.reject({
            message: 'La password es muy corta'
        })
    }
    return Promise.resolve('Password valida');
};