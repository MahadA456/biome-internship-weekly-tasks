// 1. Interface for a task item
interface Task {
  id: number;
  text: string;
  completed?: boolean; // optional
}

// 2. Class managing the to-do list (OOP)
class TodoManager {
  private tasks: Task[] = [];
  private taskId = 1;

  constructor(
    private list: HTMLUListElement,
    private input: HTMLInputElement
  ) {}

  // 3. Create a new task (with validation)
  addTask(text: string): void {
    if (!text.trim() || /\d/.test(text)) {
      alert("Please enter a valid task (no numbers allowed).");
      return;
    }

    const task: Task = { id: this.taskId++, text };
    this.tasks.push(task);
    this.renderTask(task);
  }

  // 4. Update task text
  updateTask(id: number, newText: string): void {
    const task = this.tasks.find(t => t.id === id);
    if (task && newText.trim()) {
      task.text = newText;
      this.refreshList();
    }
  }

  // 5. Delete a task
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.refreshList();
  }

  // Render a single task
  private renderTask(task: Task): void {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task.text;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    this.list.appendChild(li);

    // Edit event
    editBtn.addEventListener("click", () => {
      if (editBtn.textContent === "Edit") {
        const inputEdit = document.createElement("input");
        inputEdit.type = "text";
        inputEdit.value = span.textContent || "";
        li.replaceChild(inputEdit, span);
        editBtn.textContent = "Save";
      } else {
        const inputEdit = li.querySelector("input") as HTMLInputElement;
        if (inputEdit && inputEdit.value.trim()) {
          this.updateTask(task.id, inputEdit.value);
        }
      }
    });

    // Delete event
    delBtn.addEventListener("click", () => this.deleteTask(task.id));
  }

  // Refresh entire list
  private refreshList(): void {
    this.list.innerHTML = "";
    this.tasks.forEach(t => this.renderTask(t));
  }
}

// DOM references
const input = document.getElementById("todo-input") as HTMLInputElement;
const addBtn = document.getElementById("add-btn") as HTMLButtonElement;
const list = document.getElementById("todo-list") as HTMLUListElement;

// Initialize manager
const todoApp = new TodoManager(list, input);

// Event listeners
addBtn.addEventListener("click", () => {
  todoApp.addTask(input.value);
  input.value = "";
  input.focus();
});

input.addEventListener("keydown", (e: KeyboardEvent) => {
  if (e.key === "Enter") addBtn.click();
});
