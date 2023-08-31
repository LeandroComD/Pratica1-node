module.exports = function(application){
    application.get('/', function(req, res){
      application.src.controllers.bank.index(application, req, res);
    });
  }