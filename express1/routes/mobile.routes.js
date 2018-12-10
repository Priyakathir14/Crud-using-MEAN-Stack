var express = require('express');
var mobiles = require('../controllers/mobile.controller');
var router = express.Router();


      router.route('/getMobiles').get(mobiles.getMobiles);
      router.route('/addMobiles').post(mobiles.addMobiles);
      router.route('/mobile/:id')
      .get(mobiles.getMobile)
      .delete(mobiles.deleteMobiles)
      .put(mobiles.updateMobiles);


  // // Single article routes
  // app.route('/api/articles/:articleId').
  //   .get(articles.read)
  //   .put(articles.update)
  //   .delete(articles.delete);

  // // Finish by binding the article middleware
  // app.param('articleId', articles.articleByID);
module.exports = router;

