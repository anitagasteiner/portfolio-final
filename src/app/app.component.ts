import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { TranslateService, TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import translationsDE from './../assets/i18n/de.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    ContactComponent,
    TranslatePipe,
    TranslateDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'anita-gasteiner';
  
  constructor(private translate: TranslateService){
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('de');
    this.translate.use('de');
    this.translate.setTranslation('de', translationsDE);    
  }

}
