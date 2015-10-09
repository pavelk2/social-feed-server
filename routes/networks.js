var express = require('express');
var router = express.Router();
var req = require("request");

router.route('/facebook/')
    .get(function(request, response) {
        // generate a url with access_token added
        var url_with_access_token = request.query.url + "&access_token=" + process.env.FACEBOOK_TOKEN;
        req(url_with_access_token, function(error, resp, body) {
            console.log(body)
            response.json(JSON.parse(body));
        });
    });
router.route('/instagram/')
    .get(function(request, response) {
        // generate a url with access_token added
        var url_with_access_token = request.query.url + "&client_id=" + process.env.INSTAGRAM_CLIENT_ID;
        req(url_with_access_token, function(error, resp, body) {
            console.log(body)
            response.json(JSON.parse(body));
        });
    });
router.route('/google/')
    .get(function(request, response) {
        // generate a url with access_token added
        var url_with_access_token = request.query.url + "&access_token=" + process.env.GOOGLE_TOKEN;
        req(url_with_access_token, function(error, resp, body) {
            console.log(body)
            response.json(JSON.parse(body));
        });
    });
module.exports = router;
