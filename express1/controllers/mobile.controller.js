var express = require('express');
var mongoose = require('mongoose');
var mobile = mongoose.model('mobile');
var router=express.Router();

 // errorHandler = require(path.resolve('./errors.server.controller'));



module.exports.addMobiles = function (req, res) {
  var newMobile = new mobile({
  		MobileName: req.body.MobileName,
        Memory: req.body.Memory,
        OS: req.body.OS,
        Color: req.body.Color,
        Price: req.body.Price
  });
  // mobile.user = req.user;

  newMobile.save(function (err,mobile) {
    if (err) {
      res.status(404).json({msg: ' Failed to add'});
    } else {
      res.json({msg:'Product details added',mobile});
    }
  });
};

module.exports.getMobiles = function (req, res) {
   mobile.find({}, function (err,mobile) {
        if (err) {
            res.status(404).json({msg: ' Failed to get'});
        }
        else {
        	res.status(200).send(mobile);
        	console.log(mobile);
        }
        
    });
};
module.exports.getMobile = function (req,res) {
	 mobile.findById({"_id":req.params.id}, function (err,mobile) {
        if (err) {
            console.log('Failed to find');
            res.status(404).json({msg:'Failed to find'});
        }
        else {
            console.log(mobile);
            res.status(200).json({msg:'Success',mobile});
        }
   });
};
module.exports.deleteMobiles = function(req,res) {
	mobile.remove({"_id": req.params.id},function(err,mobile) {
        if (err) {
            res.status(404).json({msg:'Failed to remove'});
        }
        else {
            res.status(200).json({msg:'Product details removed'});
            console.log('Product details  removed');
        }
    });
};
module.exports.updateMobiles = function(req,res) {
	mobile.findOneAndUpdate({"_id": req.params.id},req.body, function (err,mobile) {
        if (err) {
            res.status(404).json({msg:'Failed to update'});
        }
        else {
            res.status(200).json({msg:'Product details updated',mobile});

        }

    });
};



