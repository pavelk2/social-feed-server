var credentials = require('../settings/credentials');
var req = require("request");

function SocialNetworkPost() {

}

module.exports = {
    /*
    facebook: {
        protocol: 'https://',
        domain: 'graph.facebook.com/',
        version: 'v1.0/',
        url_base: function() {
            return this.protocol + this.domain + this.version;
        },
        endpoint: function(type, keyword, count) {
            var path = '',
                parameters = '?access_token=' + credentials.facebook.app_id + '|' + credentials.facebook.app_secret + '&limit=' + count;
            if (type == 'tag') {
                path = 'search/';
                parameters += '&q=%23' + keyword;
            } else if (type == 'user') {
                path = keyword + '/posts/';
            }
            return this.url_base() + path + parameters;
        }
    },
    twitter: {

    },
    google: {
        protocol: 'https://',
        domain: 'www.googleapis.com/plus/',
        version: 'v1/',
        url_base: function() {
            return this.protocol + this.domain + this.version;
        },
        endpoint: function(type, keyword, count) {
            var path = '',
                parameters = '?key=' + credentials.google.access_token+ '&maxResults=' + count;
            if (type == 'tag') {
                path = 'activities/';
                parameters += '&query=' + keyword;
            } else if (type == 'user') {
                path = 'people/'+keyword + '/activities/public/';
            }
            return this.url_base() + path + parameters;
        }
    },*/
    instagram: {
        protocol: 'https://',
        domain: 'api.instagram.com/',
        version: 'v1/',
        url_base: function() {
            return this.protocol + this.domain + this.version;
        },
        endpoint: function(action, type, keyword, count) {
            var path = '',
                parameters = '?client_id=' + credentials.instagram.client_id + '&count=' + count;
            // to show a user feed or a feed of posts with a hashstag
            if (action == 'feed') {
                path = type + 's/';
                path += keyword + '/media/recent';
            }
            // to search for a user or a hashtag 
            else if (action == 'search') {
                path = type + 's/search/';
                parameters += '&q=' + keyword
            }
            return this.url_base() + path + parameters;
        },
        getUserId: function(username, callback) {
            var request_url = this.endpoint('search', 'user', username, 1);

            req(url, function(error, resp, body) {
                if (body['data'].length>0){
                    callback(body['data'][0]['id']);
                }
            });
        },
        unify: function(data) {
            posts = [];
            console.log(data['data']);
            data['data'].forEach(function(element) {
                var post = {};
                post.id = element.id;
                //post.dt_create = moment(element.created_time * 1000);
                post.author_link = 'http://instagram.com/' + element.user.username;
                post.author_picture = element.user.profile_picture;
                post.author_name = element.user.full_name;
                post.message = (element.caption && element.caption) ? element.caption.text : '';
                post.description = '';
                post.link = element.link;
                //if (options.show_media) {
                post.attachment = '<img class="attachment" src="' + element.images.standard_resolution.url + '' + '" />';
                //}
                posts.push(post);
            });


            return posts;
        }

    }
    /*,
    vk: {
        protocol: 'https://',
        domain: 'api.vk.com/method/',
        version: '',
        url_base: function() {
            return this.protocol + this.domain + this.version;
        },
        endpoint: function(type, keyword, count) {
            var path = '',
                parameters = '?count=' + count;
            if (type == 'tag') {
                path = 'newsfeed.search';
                parameters += '&q=' + keyword;
            } else if (type == 'user') {
                path = 'wall.get';
                parameters += '&owner_id=' + keyword+'&source=owner';
            }
            return this.url_base() + path + parameters;
        }
    }*/
};
