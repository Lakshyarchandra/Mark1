import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
public data = [
  {
    name: 'Alpha',
    id:1,
  },
  {
    name: 'Beta',
    id:2,
  },
  {
    name: 'Gamma',
    id:3,
  },
  {
    name: 'Theta',
    id:4
  },
  {
    name: 'Psi',
    id:5
  },
  {
    name: 'Delta',
    id:6
  },

]
}
