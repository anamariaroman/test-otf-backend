const app = require('./app');

var PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listenner on port ${PORT}`);
})