import { Component, inject } from '@angular/core';
import { GeneralService } from '../../../general.service';
// import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    // RouterLink,
    // RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  generalService = inject(GeneralService);

  aboutId = '#about';

  constructor() {
    this.generalService.scrollToTop();
  }

}
