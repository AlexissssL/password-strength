const zxcvbn = require("zxcvbn");

module.exports = password => {
    const score = zxcvbn(password).score
    if ( score < 2 ) {
        return Promise.reject({
            message: 'Muy débil',
            score
        })
    }
    return Promise.resolve({
        message: 'Password fuerte',
        score
    });
};