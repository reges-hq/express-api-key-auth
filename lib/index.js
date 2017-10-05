const { HttpError } = require('./http-error');

module.exports = API_KEY => {
    return (req, res, next) => {
        try {
            const authorizationData = req.query.api_key;

            if (authorizationData === undefined) {
                throw new HttpError(401, 'Missing api_key in query');
            }

            if (authorizationData !== API_KEY) {
                throw new HttpError(403, 'Not a valid key');
            }

            next();
        } catch (err) {
            next(err);
        }
    };
};
