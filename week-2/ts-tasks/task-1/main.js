// 2. Class managing the to-do list (OOP)
var TodoManager = /** @class */ (function () {
    function TodoManager(list, input) {
        this.list = list;
        this.input = input;
        this.tasks = [];
        this.taskId = 1;
    }
    // 3. Create a new task (with validation)
    TodoManager.prototype.addTask = function (text) {
        if (!text.trim() || /\d/.test(text)) {
            alert("Please enter a valid task (no numbers allowed).");
            return;
        }
        var task = { id: this.taskId++, text: text };
        this.tasks.push(task);
        this.renderTask(task);
    };
    // 4. Update task text
    TodoManager.prototype.updateTask = function (id, newText) {
        var task = this.tasks.find(function (t) { return t.id === id; });
        if (task && newText.trim()) {
            task.text = newText;
            this.refreshList();
        }
    };
    // 5. Delete a task
    TodoManager.prototype.deleteTask = function (id) {
        this.tasks = this.tasks.filter(function (t) { return t.id !== id; });
        this.refreshList();
    };
    // Render a single task
    TodoManager.prototype.renderTask = function (task) {
        var _this = this;
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.textContent = task.text;
        var editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        var delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(delBtn);
        this.list.appendChild(li);
        // Edit event
        editBtn.addEventListener("click", function () {
            if (editBtn.textContent === "Edit") {
                var inputEdit = document.createElement("input");
                inputEdit.type = "text";
                inputEdit.value = span.textContent || "";
                li.replaceChild(inputEdit, span);
                editBtn.textContent = "Save";
            }
            else {
                var inputEdit = li.querySelector("input");
                if (inputEdit && inputEdit.value.trim()) {
                    _this.updateTask(task.id, inputEdit.value);
                }
            }
        });
        // Delete event
        delBtn.addEventListener("click", function () { return _this.deleteTask(task.id); });
    };
    // Refresh entire list
    TodoManager.prototype.refreshList = function () {
        var _this = this;
        this.list.innerHTML = "";
        this.tasks.forEach(function (t) { return _this.renderTask(t); });
    };
    return TodoManager;
}());
// DOM references
var input = document.getElementById("todo-input");
var addBtn = document.getElementById("add-btn");
var list = document.getElementById("todo-list");
// Initialize manager
var todoApp = new TodoManager(list, input);
// Event listeners
addBtn.addEventListener("click", function () {
    todoApp.addTask(input.value);
    input.value = "";
    input.focus();
});
input.addEventListener("keydown", function (e) {
    if (e.key === "Enter")
        addBtn.click();
});
