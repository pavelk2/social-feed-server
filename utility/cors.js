module.exports = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://pavelk2.github.io");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET");
    next();
}
