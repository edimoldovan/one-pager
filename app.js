/*jslint nomen:true */
/*global __dirname,require,console*/

var express = require("express"),
  app = express(),
  sassMiddleware = require("node-sass-middleware"),
  livereload = require("express-livereload");

livereload(app, {});

app.use(sassMiddleware({
    src: __dirname + "/public",
    dest: __dirname + "/public",
    debug: true,
    outputStyle: "compressed"
  })
);

app.use(express.static(__dirname + "/public"));

app.get("*", function(req, res) {
  "use strict";
  res.sendFile(__dirname + "/public/html/index.html");
});

app.listen(3000);