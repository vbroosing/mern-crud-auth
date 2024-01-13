// A module thats converts a token's cookie in an object
// { 'cookie': token }

const jCookie = (cookie) => {

    if (cookie == undefined) return undefined;

    const parsedCookie = cookie.substring(6);

    const jsonCookie = {
        'cookie': parsedCookie
    };

    return jsonCookie;
};

module.exports = {
    jCookie,
}