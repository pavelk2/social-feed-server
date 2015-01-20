module.exports = {
	facebook:{
		app_id: process.env.FACEBOOK_APP_ID,
		app_secret: process.env.FACEBOOK_APP_SECRET
	},
	twitter:{
		consumer_key: process.env.TWITTER_CONSUMER_KEY, // make sure to have your app read-only
		consumer_secret: process.env.TWITTER_CONSUMER_SECRET, // make sure to have your app read-only
	},
	google:{
		access_token: process.env.GOOGLE_ACCESS_TOKEN
	},
	instagram: {
		client_id: process.env.INSTAGRAM_CLIENT_ID
	},
	vk:{

	}
};