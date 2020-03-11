const express = require('express')
const app = express();
var request = require('request');

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers",
	  "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods",
	  "GET, POST, PUT, DELETE, OPTIONS");
	next();
  })


app.get('/', (req, res) => {
  res.send('Hello World!')
});


app.get('/:subreddit/', (req, res) => {
	var url = 'https://www.reddit.com/r/' + req.params.subreddit + '/.json';
	let filteredResult = [];

	request(url, function(err, response, body) {
		let item = JSON.parse(body);
		if(item.data) {
			item.data.children.forEach(child => {
				var obj = {
					subreddit: child.data.subreddit,
					title: child.data.title,
					author: child.data.author,
					content: child.data.selftext,
					commentUrl: child.data.url
				}
				filteredResult.push(obj);
			})
		} else {
			filteredResult.push(item);
		}
		res.send(filteredResult);
	})
})


app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});