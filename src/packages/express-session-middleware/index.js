class ExpressSessionMiddleware {

  _parseAuthorizationHeader(header) {
    return header.split(' ')[1] || null;
  }

  _getToken(req) {
    const authorizationHeader = req.headers.authorization;

    return authorizationHeader ? this._parseAuthorizationHeader(authorizationHeader) : null;
  }

  _decodeToken(token) {
    return this._authenticationService.decodeToken(token);
  }

  _parseTokenData(req, res, next) {
    req.tokenData = this._decodeToken(this._getToken(req)) || {};

    next();
  }

  constructor(authenticationService) {
    this._authenticationService = authenticationService;
  }

  create() {
    return (req, res, next) => this._parseTokenData(req, res, next);
  }

}


export default ExpressSessionMiddleware;
