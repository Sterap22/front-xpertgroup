import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'base-line';
  login = false;
  ngOnInit(): void {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const isLoggedIn = localStorage.getItem('Token');
      if (isLoggedIn) {
        this.login = true;
      } else {
        this.login = false;
      }
    } else {
      console.log('localStorage no está disponible');
    }
  }
}
