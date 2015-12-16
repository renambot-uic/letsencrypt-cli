'use strict';

var handlers = module.exports.create = function (defaults) {
  var fs = require('fs');
  var path = require('path');
  var mkdirp = require('mkdirp');

  return {
    //
    // set,get,remove challenges
    //
    _challenges: {}
  , setChallenge: function (args, key, value, cb) {
      mkdirp(defaults.webrootPath, function (err) {
        if (err) {
          console.error("Could not create --webroot-path '" + defaults.webrootPath + "':", err.code);
          console.error("Try checking the permissions, maybe?");
          cb(err);
          return;
        }

        var keyfile = path.join(defaults.webrootPath, key);

        fs.writeFile(keyfile, value, 'utf8', function (err) {
          if (err) {
            console.error("Could not write '" + keyfile + "':", err.code);
            cb(err);
            return;
          }

          cb(null);
        });
      });
    }
  // handled as file read by web server
  // , getChallenge: function (args, key, cb) {}
  , removeChallenge: function (args, key, cb) {
      var keyfile = path.join(defaults.webrootPath, key);

      fs.unlink(keyfile, function (err) {
        if (err) {
          console.error("Could not unlink '" + keyfile + "':", err.code);
          cb(err);
          return;
        }

        cb(null);
      });
    }
  };
};
