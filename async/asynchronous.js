// http://vimeo.com/19519289
var instertEleemnt = function(data, callback) {
 	var timeout = Math.ceil(Math.random() * 3000);
 	setTimeout(function(){
 		callback(null,data);

 	}, timeout);
 }

var insertAll = function(coll, callback) {
	var queue = coll.slice(0),
	elem;


}