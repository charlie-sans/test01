const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("<h1>this is a test server for wattlefoxxo.com</h1>");
});

app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});
