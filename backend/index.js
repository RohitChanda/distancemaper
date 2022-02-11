const express = require('express');
const router=require('./router/router');
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);  ////////// this one come fast beacause mongo take time to connect
})


//AIzaSyDVraJIh6Q4LVKTzYPnSKmJZIvgZNo_QGQ