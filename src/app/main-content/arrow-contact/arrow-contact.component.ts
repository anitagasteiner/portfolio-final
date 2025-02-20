import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-arrow-contact',
  standalone: true,
  imports: [],
  templateUrl: './arrow-contact.component.html',
  styleUrl: './arrow-contact.component.scss'
})
export class ArrowContactComponent implements AfterViewInit {

  arrowOptions = {
    threshold: 1
  };

  arrowObserver: IntersectionObserver | undefined;

  ngAfterViewInit(): void {    
    this.arrowObserver = new IntersectionObserver(this.callback, this.arrowOptions);
    const arrow = document.querySelector('#arrow-contact');
    if (arrow) {
      this.arrowObserver.observe(arrow);
    }
  }

  callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      console.log('Arrow contact: ', entry.isIntersecting);
      if (entry.isIntersecting) {
        this.addClassName('move');
      }
    });
  };

  addClassName(className: string): void {
    const arrow = document.querySelector('#arrow-contact');
    if (arrow) {
      arrow.classList.add(className);      
    }
  }

}
