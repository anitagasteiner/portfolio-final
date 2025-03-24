import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GeneralService } from '../../../general.service';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import translationsDE from './../../../../assets/i18n/de.json';
import translationsEN from './../../../../assets/i18n/en.json';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    TranslatePipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  generalService = inject(GeneralService);

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);  
    this.translate.setDefaultLang('de');  
    this.translate.setTranslation('de', translationsDE);
    this.translate.setTranslation('en', translationsEN);
    this.generalService.getLanguageFromLocalStorage();
    this.setLanguage();    
  }

  setLanguage() {
    if (this.generalService.currentLanguage == 'de') {      
      this.translate.use('de');
    } else if (this.generalService.currentLanguage == 'en') {
      this.translate.use('en');
    }
  }

  switchLanguage() {
    if (this.generalService.currentLanguage == 'de') {
      localStorage.setItem('language', 'en');
    } else if (this.generalService.currentLanguage == 'en') {
      localStorage.setItem('language', 'de');
    }
    this.generalService.getLanguageFromLocalStorage();
    this.setLanguage();
    this.generalService.setBtnText();
    this.generalService.setPlaceholders();
  }

}
