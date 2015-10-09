module.exports = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", process.env.CORS_URL);
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET");
    next();
}
