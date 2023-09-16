import { Component } from '@angular/core';

@Component({
  //This is the component that is being used in the index.html file by default. The syntax is that the html tag is the selector property, html and css files are the templateUrl and styleUrls property
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular spring boot full stack CRUD app ';
}
