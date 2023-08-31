module.exports.index = function(application, req, res) {
    var newsModel = new application.src.models.bank();
  
    newsModel.getLastNews(function(err, result) {
      console.log(result)
      res.render("bancos/index", {bank : result});
    });
  }