const apiKeySid = 'SK0V6qlaj0b7782aLGynXFKCdeFhe2QMsb';
const apiKeySecret = 'bzVZY2t0R1lqaldLQnhwaWFSQ1JlWWgyazVtU1JvZw==';

function getAccessToken(userId) {
	var now = Math.floor(Date.now() / 1000);
	var exp = now + 3600;

	var header = {cty: "stringee-api;v=1"};
	var payload = {
		jti: apiKeySid + "-" + now,
		iss: apiKeySid,
		exp: exp,
		userId: userId
	};

	var jwt = require('jsonwebtoken');
	var token = jwt.sign(payload, apiKeySecret, {algorithm: 'HS256', header: header})
	return token;
}

module.exports = getAccessToken;