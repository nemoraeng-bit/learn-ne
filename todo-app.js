// To-Do List Application with Local Storage
class TodoApp {
    constructor() {
        this.tasks = [];
        this.currentFilter = 'all';
        this.storageKey = 'todoTasks';
        this.init();
    }

    // Initialize the app
    init() {
        this.loadTasks();
        this.setupEventListeners();
        this.render();
    }

    // Setup event listeners
    setupEventListeners() {
        // Add task
        document.getElementById('addBtn').addEventListener('click', () => this.addTask());
        document.getElementById('taskInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTask();
        });

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.closest('.filter-btn').classList.add('active');
                this.currentFilter = e.target.closest('.filter-btn').dataset.filter;
                this.render();
            });
        });

        // Action buttons
        document.getElementById('clearCompletedBtn').addEventListener('click', () => this.clearCompleted());
        document.getElementById('clearAllBtn').addEventListener('click', () => this.clearAll());
        document.getElementById('exportBtn').addEventListener('click', () => this.exportTasks());
    }

    // Add a new task
    addTask() {
        const input = document.getElementById('taskInput');
        const text = input.value.trim();

        if (text === '') {
            alert('Please enter a task!');
            return;
        }

        const task = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toLocaleString(),
            completedAt: null
        };

        this.tasks.push(task);
        this.saveTasks();
        input.value = '';
        input.focus();
        this.render();
    }

    // Toggle task completion
    toggleTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            task.completedAt = task.completed ? new Date().toLocaleString() : null;
            this.saveTasks();
            this.render();
        }
    }

    // Delete a task
    deleteTask(id) {
        if (confirm('Are you sure you want to delete this task?')) {
            this.tasks = this.tasks.filter(t => t.id !== id);
            this.saveTasks();
            this.render();
        }
    }

    // Clear all completed tasks
    clearCompleted() {
        if (this.tasks.some(t => t.completed)) {
            if (confirm('Delete all completed tasks?')) {
                this.tasks = this.tasks.filter(t => !t.completed);
                this.saveTasks();
                this.render();
            }
        } else {
            alert('No completed tasks to clear!');
        }
    }

    // Clear all tasks
    clearAll() {
        if (this.tasks.length > 0) {
            if (confirm('Delete ALL tasks? This cannot be undone!')) {
                this.tasks = [];
                this.saveTasks();
                this.render();
            }
        } else {
            alert('No tasks to clear!');
        }
    }

    // Export tasks as JSON
    exportTasks() {
        if (this.tasks.length === 0) {
            alert('No tasks to export!');
            return;
        }

        const dataStr = JSON.stringify(this.tasks, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `tasks_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        URL.revokeObjectURL(url);
    }

    // Get filtered tasks
    getFilteredTasks() {
        switch (this.currentFilter) {
            case 'active':
                return this.tasks.filter(t => !t.completed);
            case 'completed':
                return this.tasks.filter(t => t.completed);
            default:
                return this.tasks;
        }
    }

    // Update statistics
    updateStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(t => t.completed).length;
        const remaining = total - completed;

        document.getElementById('totalTasks').textContent = total;
        document.getElementById('completedTasks').textContent = completed;
        document.getElementById('remainingTasks').textContent = remaining;
    }

    // Render tasks list
    renderTasks() {
        const tasksList = document.getElementById('tasksList');
        const filteredTasks = this.getFilteredTasks();

        if (filteredTasks.length === 0) {
            tasksList.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-inbox"></i>
                    <p>No ${this.currentFilter !== 'all' ? this.currentFilter : ''} tasks. ${this.currentFilter === 'completed' ? 'Complete some tasks!' : 'Add one to get started!'}</p>
                </div>
            `;
            return;
        }

        tasksList.innerHTML = filteredTasks.map(task => `
            <div class="task-item ${task.completed ? 'completed' : ''}">
                <input 
                    type="checkbox" 
                    class="task-checkbox" 
                    ${task.completed ? 'checked' : ''}
                    onchange="app.toggleTask(${task.id})"
                >
                <span class="task-text">${this.escapeHtml(task.text)}</span>
                <span class="task-date">${task.createdAt}</span>
                <div class="task-actions">
                    <button class="task-btn" onclick="app.deleteTask(${task.id})" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }

    // Escape HTML to prevent XSS
    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }

    // Save tasks to localStorage
    saveTasks() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
    }

    // Load tasks from localStorage
    loadTasks() {
        const saved = localStorage.getItem(this.storageKey);
        this.tasks = saved ? JSON.parse(saved) : [];
    }

    // Full render
    render() {
        this.renderTasks();
        this.updateStats();
    }
}

// Initialize the app when DOM is ready
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new TodoApp();
});
