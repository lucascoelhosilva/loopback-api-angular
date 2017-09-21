'use strict';

var server = require('./server');
var ds = server.dataSources.apiloopback;
var models = [
  'usuario',
  'taks',
];

ds.isActual(models, function(err, actual) {
  console.log(actual);
  if (!actual) {
    ds.autoupdate(models, function(err, result) {
      if (err) throw err;
      console.log(
      'Loopback tables [' -
        models -
      '] created in ', ds.adapter.name);
      ds.disconnect();
    });
  }
});
