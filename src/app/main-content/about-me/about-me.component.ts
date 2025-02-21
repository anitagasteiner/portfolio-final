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

  ngAfterViewInit(): void {
    if (this.generalService.currentSection == 'aboutMe') {
      // setTimeout(() => {
        this.aboutMe.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start'});
        this.generalService.currentSection = '';
      // }, 20);
    }
  }

}
