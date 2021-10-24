const bcrypt = require('bcrypt');

exports.Hash = (fromClient, salt = 10) => {  
  return bcrypt.hash(fromClient, salt);
};

exports.compareHash = (fromClient, hashed) => {
  return bcrypt.compare(fromClient, hashed);
};
