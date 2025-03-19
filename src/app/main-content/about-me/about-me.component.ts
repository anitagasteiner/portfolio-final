import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { GeneralService } from '../../general.service';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';
import translationsDE from './../../../assets/i18n/de.json';
import translationsEN from './../../../assets/i18n/en.json';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    TranslatePipe,
    TranslateDirective
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements AfterViewInit { //TODO  https://ngx-translate.org/getting-started/translation-files/

  generalService = inject(GeneralService);

  @ViewChild('aboutMe') aboutMe!: ElementRef;

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('de');
    this.translate.setTranslation('de', translationsDE);
    this.translate.setTranslation('en', translationsEN);
    this.translate.use('de');
  }

  translateLanguageTo(language: string) {
    this.translate.use(language);
  }

  ngAfterViewInit(): void {
    if (this.generalService.currentSection == 'aboutMe') {
      // setTimeout(() => {
        this.aboutMe.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start'});
        this.generalService.currentSection = '';
      // }, 20);
    }
  }

}
