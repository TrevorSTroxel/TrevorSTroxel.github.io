var http = require ('http');
fs = require('fs');
var server = http.createServer (function(request, response){
		if(request.url == '/' ){
			response.setHeader('Content-Type','text/html');
			//response.end('<hr /> <strong> Industrdy Stantard </strong><hr />');
			fs.createReadStream('index.html').pipe(response);
		}
		
		console.log(request.url);
});
server.listen(8080,function(){
		console.log('Delta port 8080 listen');
});
