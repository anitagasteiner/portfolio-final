import { AfterViewInit, Component, inject } from '@angular/core';
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

  arrowOptions = {
    threshold: 1
  };

  arrowObserver: IntersectionObserver | undefined;

  ngAfterViewInit(): void {    
    this.arrowObserver = new IntersectionObserver(this.callback, this.arrowOptions);
    const arrow = document.querySelector('#about-me-arrow');
    if (arrow) {
      this.arrowObserver.observe(arrow);
    }
  }

  callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      console.log('About-Arrow: ', entry.isIntersecting);
      if (entry.isIntersecting) {
        this.addClassName('move');
      }
    });
  };

  addClassName(className: string): void {
    const arrow = document.querySelector('#about-me-arrow');
    if (arrow) {
      arrow.classList.add(className);      
    }
  }

}
