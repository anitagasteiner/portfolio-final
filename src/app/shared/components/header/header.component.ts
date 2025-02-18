import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
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
export class HeaderComponent implements OnInit {

  ngOnInit() {
    this.generalService.getLanguageFromLocalStorage();
    this.setBtnLanguage();
  }

  generalService = inject(GeneralService);

  languageSwitch: string = 'English';

  setBtnLanguage() {
    const language = localStorage.getItem('language');
    if (language == 'de') {
      this.languageSwitch = 'English';
    } else if (language == 'en') {
      this.languageSwitch = 'Deutsch';
    }
  }

  switchLanguage() {
    if (this.generalService.currentLanguage == 'de') {
      localStorage.setItem('language', 'en');
    } else if (this.generalService.currentLanguage == 'en') {
      localStorage.setItem('language', 'de');
    }
    this.generalService.getLanguageFromLocalStorage();
    this.setBtnLanguage();
    this.generalService.setBtnText();
    this.generalService.setPlaceholders();
  }

}
