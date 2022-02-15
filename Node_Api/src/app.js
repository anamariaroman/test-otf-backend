const express = require('express');
const cors = require('cors');
const routes = require('./routes');

class Application {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(
      express.json({
      type: "*/*"
      })
    )
    this.app.use(cors())
  }

  routes() {
    this.app.use(routes);
  }
}
module.exports = new Application().app;