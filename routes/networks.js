// Instagram

var express = require('express');
var router = express.Router();
var req = require("request");
var api = require('../settings/social-api');

router.route('/:network/:action/:type/:keyword')
    .get(function(request, response) {

        var keyword = (request.params.type == 'user')

        var url = api[request.params.network].endpoint(request.params.action, request.params.type, request.params.keyword, request.query.count);
        console.log(url);
        req(url, function(error, resp, body) {
            if (request.params.action == 'feed') {
                response.json(api[request.params.network].unify(JSON.parse(body)));
            } else {
                response.json(JSON.parse(body));
            }
        });
    });

module.exports = router;
