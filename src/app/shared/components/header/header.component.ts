import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GeneralService } from '../../../general.service';
import { TranslateService } from '@ngx-translate/core';
import translationsDE from './../../../../assets/i18n/de.json';
import translationsEN from './../../../../assets/i18n/en.json';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
    // TranslatePipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('de');
    this.translate.setTranslation('de', translationsDE);
    this.translate.setTranslation('en', translationsEN);
    this.translate.use('de');
  }

  ngOnInit() {
    this.generalService.getLanguageFromLocalStorage();
    this.setBtnLanguage();
  }

  generalService = inject(GeneralService);

  languageSwitch: string = 'English';

  translateLanguageTo(language: string) {
    this.translate.use(language);
  }

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
