import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyItemComponent } from './my-item/my-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'This is my first project';
  title2 = 'Hello world';
}
