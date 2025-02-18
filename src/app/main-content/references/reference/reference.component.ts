import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.scss'
})
export class ReferenceComponent {

  @Input()quote = {
    name: "Name Eins",
    function: "Funktion Eins",
    quote: "Zitat Eins"
  };

}
