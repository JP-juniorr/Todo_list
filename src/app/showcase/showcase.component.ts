import { Component } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-showcase',
  imports: [TimerComponent, TodoComponent],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.css',
})
export class ShowcaseComponent {}
