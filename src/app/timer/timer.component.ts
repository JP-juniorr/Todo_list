import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css',
})
export class TimerComponent {
  toggleMyDisplay = false;
  minutes: string = '25';
  seconds: string = '00';
  currentTime: string = '';
  isRunning: boolean = false;
  private intervalId: any;
  private totalSeconds: number = 25 * 60;
  private intervalTimer: any;

  // Timer Logic
  startTimer(): void {
    if (!this.isRunning) {
      this.isRunning = true;
      this.intervalTimer = setInterval(() => {
        if (this.totalSeconds > 0) {
          this.totalSeconds--;
          this.updateDisplay();
        } else {
          this.stopTimer();
        }
      }, 1000);
    }
  }
  stopTimer(): void {
    if (this.isRunning) {
      this.isRunning = false;
      clearInterval(this.intervalTimer);
    }
  }
  resetTimer(): void {
    this.stopTimer();
    this.totalSeconds = 25 * 60; // Reset to 25 minutes
    this.updateDisplay();
  }
  ngOnInit(): void {
    this.updateTime();
    this.intervalId = setInterval(() => this.updateTime(), 1000);
    this.updateDisplay();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    this.stopTimer();
  }

  // Clock Logic

  private updateDisplay(): void {
    const mins = Math.floor(this.totalSeconds / 60);
    const secs = this.totalSeconds % 60;
    this.minutes = mins.toString().padStart(2, '0');
    this.seconds = secs.toString().padStart(2, '0');
  }

  private updateTime(): void {
    const now = new Date();
    this.currentTime =
      now.getHours().toString().padStart(2, '0') +
      ':' +
      now.getMinutes().toString().padStart(2, '0');
  }
  // Update Display Logic
  toggleDisplay(): void {
    this.toggleMyDisplay = !this.toggleMyDisplay;
  }
}
