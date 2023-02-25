const express = require("express");
const app = express();
/**
 * @name app.use
 * @type {Function}
 * @description express.static - Middleware function to serve static files
 * @description express.urlencoded - Middleware function to parse incoming requests with urlencoded payloads
 *
 * @see https://expressjs.com/en/4x/api.html#app.use
 */
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

/**
 * @name app.use
 * @type {Function}
 * @param {String} path - The path on which a router is mounted
 * @param {Function} router - The router
 *
 * @description Middleware function to mount the router on the path
 * @description The router handles the requests to the path and any sub-paths
 *
 * @see https://expressjs.com/en/4x/api.html#app.use
 */
app.use("/", require("./routes/home.routes"));
app.use("/contact", require("./routes/contact.routes"));

module.exports = app;
