import { Component, inject } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CommonModule } from '@angular/common';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GeneralService } from '../general.service';
import { ArrowRightComponent } from './arrow-right/arrow-right.component';
import { ArrowLeftComponent } from './arrow-left/arrow-left.component';
import { ArrowContactComponent } from './arrow-contact/arrow-contact.component';
// import { ReferencesComponent } from './references/references.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CommonModule,
    LandingPageComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    // ReferencesComponent,
    ArrowLeftComponent,
    ArrowRightComponent,
    ArrowContactComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

  generalService = inject(GeneralService);

  constructor() {
    this.generalService.getLanguageFromLocalStorage();
  }

}
