import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GeneralService } from './../general.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  generalService = inject(GeneralService);

  constructor() {
    this.generalService.scrollToTop();
  }

}
