import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
  standalone: true,
})
export class TodoComponent implements OnInit {
  newTask: string = '';

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.tasks$.subscribe((tasks) => (this.tasks = tasks));
  }

  addTask() {
    if (this.newTask.trim()) {
      this.taskService.addTask(this.newTask.trim());
      this.newTask = '';
    }
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  resetTasks() {
    this.taskService.resetTasks();
  }

  toggleComplete(task: Task) {
    this.taskService.updateTask({ ...task, completed: !task.completed });
  }

  editTask(task: Task) {
    task.isEditing = true;
  }

  saveTask(task: Task) {
    task.isEditing = false;
    this.taskService.updateTask(task);
  }
}
