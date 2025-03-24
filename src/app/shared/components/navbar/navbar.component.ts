import { Component, inject } from '@angular/core';
import { GeneralService } from '../../../general.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    TranslatePipe
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  generalService = inject(GeneralService);

  constructor() {
    this.generalService.scrollToTop();
  }

}
