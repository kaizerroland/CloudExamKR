import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<div>{{title}}</div>',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Informatikai rendszer és alkalmazásüzemeltető technikus vizsga, 2024. készítette: Kaizer Roland Attila';
}
