import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GeneralService } from '../../../general.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  generalService = inject(GeneralService);

  languageSwitch: string = 'English';

  switchLanguage() {
    if (this.languageSwitch == 'English') {
      this.generalService.currentLanguage = 'en';
      this.languageSwitch = 'Deutsch';
    } else if (this.languageSwitch == 'Deutsch') {
      this.generalService.currentLanguage = 'de';
      this.languageSwitch = 'English';
    }
    this.generalService.setBtnText();
    this.generalService.setPlaceholders();
  }

}
