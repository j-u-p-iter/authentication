import * as jwt from 'jsonwebtoken';
import * as invariant from 'fbjs/lib/invariant';


class AuthenticationService {

  constructor(authConfig) {
    this._config = authConfig;
  }

  decodeToken(token) {
    invariant(
      this._config.secret,
      'Authentication secret should be declared.',
    );

    // jwt.verify throws error if token is not correct accessToken
    try {
      return jwt.verify(token, this._config.secret);
    }
    catch(error) { return null; }
  }

  createToken(options) {
    const { id, role } = options,
          userData = { userId: id, role };

    invariant(
      this._config.secret,
      'Authentication secret should be declared.',
    );

    return id && role ? jwt.sign(userData, this._config.secret) : null;
  }

  isSignedIn() { return true; }

  isEditor(options) {
    const { role } = options;
    const { roles: { publisher, admin } } = this._config;

    return role === publisher || role === admin;
  }

}


export default AuthenticationService;
