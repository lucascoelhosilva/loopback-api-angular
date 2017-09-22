'use strict';
var app = require('../../server/server');
var blacklist = [
  'Usuario.novoUsuario',
  'Usuario.login',
  'Usuario.logout',
];

function validate(ctx, next) {
  if (blacklist.indexOf(ctx.methodString) === -1) {
    console.log(ctx.req.accessToken);
    if (!ctx.req.accessToken) {
      var error = new Error('Invalid accessToken');
      error.status = 401;
      return next(error);
    }

    app.models.AccessToken.findById(
      ctx.req.accessToken.id, function(err, token) {
        if (!token || !token.userId) {
          var error = new Error('Invalid user');
          error.status = 401;
          return next(error);
        }

        if (token.userId == -1) {
          return next();
        } else {
          return validateUsuario(ctx, token, next);
        }
      }
    );
  } else {
    return next();
  }
}

app.remotes().before('**', validate);

function validateUsuario(ctx, token, next) {
  app.models.Usuario.findById(token.userId, function(err, usuario) {
    if (!usuario) {
      var error = new Error('Invalid user');
      error.status = 401;
      return next(error);
    }

    if (ctx.methodString.indexOf('count') != -1) {
      var where = {};
      if (ctx.args.where)
        where = ctx.args.where;

      where.usuarioId = usuario.id;
      ctx.args.where = where;
    } else if (ctx.methodString.indexOf('create') != -1) {
      ctx.args.data.usuarioId = usuario.id;
    } else {
      var filter = {};
      if (ctx.args.filter)
        filter = ctx.args.filter;

      if (!filter.where)
        filter.where = {};
      
      filter.where.usuarioId = usuario.id;
      ctx.args.filter = filter;
    }
    return next();
  });
};
