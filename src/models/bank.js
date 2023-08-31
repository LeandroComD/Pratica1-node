var fs = require('fs');

function bank() {}

bank.prototype.getLastNews = function(callback) {
  fs.readFile('./data/bancos.json', 'utf8', function(err, result) {
    var data = [];
  
    if (!err) {
      var obj = JSON.parse(result);
      
      if (obj.length > 4) {
        var i = 4;
      } else {
        var i = (obj.length - 1);
      }
    
      obj.forEach(function(bancos) {
        if (i >=  0) {
          data[i] = bancos;
	  i--;
        }
      });
    }	   
    callback(err, data);
  });
};

module.exports = function(){
  return bank;
}