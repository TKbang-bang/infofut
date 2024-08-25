const PORT = process.env.PORT || 3000;
const DB_USER = process.env.DB_USER || "ufxscblwtjgo32xt";
const DB_PASSWORD = process.env.DB_PASSWORD || "tHx4lVYuVE1EXPHn04cc";
const DB_HOST =
  process.env.DB_HOST || "buoil61hc8lwpfxtkqem-mysql.services.clever-cloud.com";
const DB_NAME = process.env.DB_NAME || "buoil61hc8lwpfxtkqem";
const DB_PORT = process.env.DB_PORT || 3306;

module.exports = {
  PORT,
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
};
