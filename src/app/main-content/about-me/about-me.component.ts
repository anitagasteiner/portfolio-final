import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { GeneralService } from '../../general.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements AfterViewInit {

  generalService = inject(GeneralService);

  @ViewChild('aboutMe') aboutMe!: ElementRef;

  ngAfterViewInit() {
    if (this.generalService.currentSection == 'aboutMe') {
      this.aboutMe.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start'});
      this.generalService.currentSection = '';
    }
  }

}
