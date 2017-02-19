#ExampleBot

This bot retweets the latest tweet using the "#whateverhashtagyouwant" hashtag. It attempts to retweet once per second for testing.



##Installation


`npm install twit`

This installs some code to the `npm_modules` subdirectory, which you don't need to worry about. (It's Twit, the library that lets us talk to Twitter.)

##Connecting to Twitter



https://dev.twitter.com/apps/new



```javascript
module.exports = {
  consumer_key:         'blah',
  consumer_secret:      'blah',
  access_token:         'blah',
  access_token_secret:  'blah'
}
```



`node bot.js`

Hopefully at this point you see a message like "Success! Check your bot, it should have retweeted something." Check the Twitter account for your bot, and it should have retweeted a tweet with the #whateverhashtagyouwant hashtag.
