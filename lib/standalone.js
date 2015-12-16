'use strict';

var handlers = module.exports = {
  //
  // set,get,remove challenges
  //
  _challenges: {}
, setChallenge: function (args, key, value, cb) {
    handlers._challenges[key] = value;
    cb(null);
  }
, getChallenge: function (args, key, cb) {
    cb(null, handlers._challenges[key]);
  }
, removeChallenge: function (args, key, cb) {
    delete handlers._challenges[key];
    cb(null);
  }

, _servers: []
, httpResponder: function (req, res) {
    var acmeChallengePrefix = '/.well-known/acme-challenge/';

    if (0 !== req.url.indexOf(acmeChallengePrefix)) {
      res.end('Hello World!');
      return;
    }

    var key = req.url.slice(acmeChallengePrefix.length);

    handlers.getChallenge(req.headers.host, key, function (err, val) {
      res.end(val || '_');
    });
  }
, startServers: function (plainPorts, tlsPorts) {
    var httpsOptions = require('localhost.daplie.com-certificates');
    var https = require('https');
    var http = require('http');

    // tls-sni-01-port
    if (handlers._servers.length) {
      return;
    }

    plainPorts.forEach(function (port) {
      http.createServer(handlers.httpResponder).listen(port, function () {
        console.info('Listening http on', this.address());
      });
    });
    tlsPorts.forEach(function (port) {
      https.createServer(httpsOptions, handlers.httpResponder).listen(port, function () {
        console.info('Listening https on', this.address());
      });
    });
  }
, closeServers: function () {
    handlers._servers.forEach(function (server) {
      server.close();
    });
    handlers._servers = [];
  }
};
