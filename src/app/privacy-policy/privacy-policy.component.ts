import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GeneralService } from './../general.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  generalService = inject(GeneralService);

  constructor() {
    this.generalService.scrollToTop();
  }

}
