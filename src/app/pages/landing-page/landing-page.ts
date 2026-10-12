import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-landing-page',
  styleUrl: './landing-page.css',
  templateUrl: './landing-page.html',
})
export class LandingPage {
  readonly email = signal('');
  readonly isSignedUp = signal(false);
  readonly isSubmitting = signal(false);
  readonly errorMessage = signal('');

  signUp() {
    const emailVal = this.email().trim();
    if (!emailVal || !emailVal.includes('@') || !emailVal.includes('.')) {
      this.errorMessage.set('Please enter a valid business email address.');
      return;
    }

    this.errorMessage.set('');
    this.isSubmitting.set(true);

    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSignedUp.set(true);
    }, 500);
  }

  playClick() {
    if (typeof window !== 'undefined' && 'Audio' in window) {
      try {
        const sound = new Audio('/fast-double-click.wav');
        sound.volume = 0.5;
        sound.currentTime = 0;
        sound.play().catch(() => {});
      } catch {
        // Handled silently if audio unavailable
      }
    }
  }
}
