var bunyan = require('bunyan')

exports.req = function(req) {
  var reqInfo = _.extend(bunyan.stdSerializers.req(req), {
    ip: req.ip,
    ips: req.ips,
    juid: req.cookies.juid,
    sessionId: req.session.id,
    userAgent: req.useragent,
    user: (req.user.isAuthenticated) ? _.pick(req.user, 'displayName', '_id') : {}
  })
  delete reqInfo.headers.authorization;
  return reqInfo;
}
