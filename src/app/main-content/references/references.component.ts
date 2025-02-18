import { Component } from '@angular/core';
import { ReferenceComponent } from './reference/reference.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [
    CommonModule,
    ReferenceComponent
  ],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

  references = [
    {
      name: "Name Eins",
      function: "Funktion Eins",
      quote: "Zitat Eins"
    },
    {
      name: "Name Zwei",
      function: "Funktion Zwei",
      quote: "Zitat Zwei"
    },
    {
      name: "Name Drei",
      function: "Funktion Drei",
      quote: "Zitat Drei"
    }
  ];

}
