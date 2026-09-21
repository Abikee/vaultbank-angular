import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-landing-page',
  styleUrl: './landing-page.css',
  templateUrl: './landing-page.html',
})
export class LandingPage {

  email = '';
  signUp() {}

  playClick() {
  const sound = new Audio('/fast-double-click.wav');
  sound.volume = 1;
  sound.currentTime = 0;

  sound.play();
}

}
