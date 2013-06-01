// Our Twitter library
var Twit = require('twit');
// A library that lets us grab data from the web via HTTP
var request = require('request');

// We need to include our configuration file
var T = new Twit(require('./config.js'));

// This is the URL of a search for the latest tweets on the '#mediaarts' hashtag.
// Note that '%23' is the hexadecimal code for '#', and 'rpp=10' means we get 10 results (maximum of 20 allowed)
var mediaArtsSearch = "https://search.twitter.com/search.json?callback=?&rpp=10&q=%23mediaarts&result_type=recent";

// This function finds the latest tweet with the #mediaarts hashtag, and retweets it.
function retweetLatest() {
	request({url: mediaArtsSearch, json: true}, function (error, response, body) {
	  // If our search request to the server had no errors...
	  if (!error && response.statusCode == 200) {
	  	// ...then we grab the ID of the tweet we want to retweet...
		var retweetId = body.results[0].id_str;
		// ...and then we tell Twitter we want to retweet it!
		T.post('statuses/retweet/' + retweetId, { }, function (error, response) {
			if (response) {
				console.log('Success! Check your bot, it should have retweeted something.')
			}
			// If there was an error with our Twitter call, we print it out here.
			if (error) {
				console.log('There was an error with Twitter:', error);
			}
		})
	  }
	  // However, if our original search request had an error, we want to print it out here.
	  else {
	  	console.log('There was an error with your hashtag search:', error);
	  }
	});
}

// Try to retweet something as soon as we run the program...
retweetLatest();
// ...and then every hour after that. Time here is in milliseconds, so
// 1000 ms = 1 second, 1 sec * 60 = 1 min, 1 min * 60 = 1 hour --> 1000 * 60 * 60
setInterval(retweetLatest, 1000 * 60 * 60);