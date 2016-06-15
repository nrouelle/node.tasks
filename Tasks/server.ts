import http = require("http");
import TaskService = require("./service/taskService");
var port = process.env.port || 1337;

var taskService = new TaskService.TaskService();

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': "application/json" });
    res.end(JSON.stringify(taskService.getAll()));
}).listen(port);