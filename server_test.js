var http = require('http');
var time = require('./firstModule');
http.createServer(function(req,res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('aaa');
  res.write('<br/>');
  res.write('<div class="name">sdsd</div>');
  res.write(req.url);

  res.write('now time is:'+time.myDateTime());
  console.log('aaa');
  res.end();
}).listen(8080);
