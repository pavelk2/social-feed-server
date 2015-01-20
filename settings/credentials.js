module.exports = {
	facebook:{
		app_id: process.env.facebook_app_id,
		app_secret: process.env.facebook_app_secret
	},
	twitter:{
		consumer_key: process.env.twitter_consumer_key, // make sure to have your app read-only
		consumer_secret: process.env.twitter_consumer_secret, // make sure to have your app read-only
	},
	google:{
		access_token: process.env.google_access_token
	},
	instagram: {
		client_id: process.env.INSTAGRAM_CLIENT_ID
	},
	vk:{

	}
};