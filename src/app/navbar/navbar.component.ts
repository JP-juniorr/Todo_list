import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isDarkMode = true; //initially start with dark mode

  ngOnInit(): void {
    this.toggleTheme();
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    const body = document.body;
    body.classList.toggle('dark-theme', this.isDarkMode);
    body.classList.toggle('light-theme', !this.isDarkMode);
  }
}
