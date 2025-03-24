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
export class HeaderComponent implements OnInit {

  generalService = inject(GeneralService);

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);  
    this.translate.setDefaultLang('de');  
    this.translate.setTranslation('de', translationsDE);
    this.translate.setTranslation('en', translationsEN);
    this.setLanguage();    
  }

  ngOnInit() {
    this.generalService.getLanguageFromLocalStorage();
    // this.setBtnLanguage();
  }

  // translateLanguageTo(language: string) {
  //   this.translate.use(language);
  // }

  setLanguage() {
    if (this.generalService.currentLanguage == 'de') {      
      this.translate.use('de');
    } else if (this.generalService.currentLanguage == 'en') {
      this.translate.use('en');
    }    
    // const language = localStorage.getItem('language');
    // if (language == 'de') {
    //   this.translate.setDefaultLang('de');
    //   this.translate.use('de');
    // } else if (language == 'en') {
    //   this.translate.setDefaultLang('en');
    //   this.translate.use('en');
    // } else {
    //   this.translate.setDefaultLang('de');
    //   this.translate.use('de');
    // }    
  }

  setBtnLanguage() {
    const language = localStorage.getItem('language');
    if (language == 'de') {
      // this.languageSwitch = 'English';
      this.translate.use('en');
    } else if (language == 'en') {
      // this.languageSwitch = 'Deutsch';
      this.translate.use('de');
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
