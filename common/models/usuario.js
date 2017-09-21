'use strict';
var app = require('../../server/server');

module.exports = function(Usuario) {
  // AJUSTE NAS PERMISSOES
  function clearBaseACLs(ModelType, ModelConfig) {
    ModelType.settings.acls.length = 0;
    ModelConfig.acls.forEach(function(r) {
      ModelType.settings.acls.push(r);
    });
  };

  clearBaseACLs(Usuario, require('./usuario.json'));

  // API Novo Usuario
  Usuario.novoUsuario = function(ctx, cb) {
    Usuario.create(ctx.req.body, function(err, usuario) {
      console.log(usuario);
      if (err) {
        console.error(err);
        return cb(err);
      };
      cb();
    });
  };

  Usuario.remoteMethod('novoUsuario', {
    http: {
      path: '/novoUsuario',
      verb: 'post',
    },
    accepts: [{
      arg: 'ctx',
      type: 'object',
      http: {
        source: 'context',
      },
    }],
    returns: {
      type: 'object',
      root: true,
    },
  });
};
