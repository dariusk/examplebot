#ExampleBot

This bot retweets the latest tweet using the "#mediaarts" hashtag. It attempts to retweet once per hour.

##Installation

If you don't already have have them, please install [Node.js](http://nodejs.org/). This will install two programs: `node`, which runs JavaScript from the command line, and `npm`, which helps you install software that Node.js can run.

Make an empty project directory somewhere convenient for you, [download this file](https://github.com/dariusk/examplebot/archive/master.zip), and unzip the contents to your project directory. Go to your project directory in the command line. There should be four files there: `.gitignore`, `README.md`, `bot.js`In that directory type:

npm install request
npm install twit

This installs some code to the `npm_modules` subdirectory, which you don't need to worry about.

You also need a Twitter App access token, consumer key, and associated secrets. [You can get those here](https://dev.twitter.com/apps/new). You'll probably also want a fresh twitter account for your bot, though you could have it post to one you already own, too!

Clone the repo, then in your project directory, install the dependencies:

`$ npm install`

Next, edit `config.js` to include your Twitter App access token, consumer key, and associated secrets. This is important! Without this you'll be unable to tweet.

`$ node latourswag.js`

This will give you some output, including, after a bit, a bunch of text that is the tweet that's just been tweeted. You can check the twitter account to see if it's updated to verify that it actually works.