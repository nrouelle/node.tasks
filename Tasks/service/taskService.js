"use strict";
var Task = require("../model/Task");
var TaskService = (function () {
    function TaskService() {
        this.taskList = new Array();
        var task1 = new Task.Task();
        task1.id = 1;
        task1.title = "Titre 1";
        task1.description = "description 1";
        task1.done = false;
        this.taskList.push(task1);
        var task2 = new Task.Task();
        task2.id = 2;
        task2.title = "Titre 1";
        task2.description = "description 1";
        task2.done = false;
        this.taskList.push(task2);
    }
    TaskService.prototype.getAll = function () {
        return this.taskList;
    };
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=taskService.js.map