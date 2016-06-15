"use strict";
var http = require("http");
var TaskService = require("./service/taskService");
var port = process.env.port || 1337;
var taskService = new TaskService.TaskService();
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': "application/json" });
    res.end(JSON.stringify(taskService.getAll()));
}).listen(port);
//# sourceMappingURL=server.js.map