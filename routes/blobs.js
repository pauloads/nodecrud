var express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');

router.use(bodyParser.urlencoded({ extended: true}))

router.use(methodOverride(function(req, res){
	if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
       }
}))

router.route('/').get(function(req, res, next){

	mongoose.model('Blob').find({}. function(err, blobs){

		if(err){

			return console.log(err);

		} else {

			res.format({

				html: function(){

					res.render('blobs/index', {
						title: 'All  my blobs',
						"blobs" : blobs
					});
				},

				json: function(){
					res.json(infophotos);
				}

			});
		}
	});
})