require('dotenv').config();   // ✅ Load .env variables first
const http = require("http");
const app = require("./app");

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`🚀 Server listening on port ${port}`);
});