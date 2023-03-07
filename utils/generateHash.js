const crypto = require("crypto");

exports.generateHash = (data) => {
  return crypto
    .createHash("sha3-512")
    .update(JSON.stringify(data))
    .digest("hex");
};
