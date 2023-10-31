const path = require("path");
const notFoundFile = path.join(__dirname, "../public/404/404.html");
const notFound = (req, res) => {
    res.status(404).sendFile(notFoundFile);
};

module.exports = notFound;
