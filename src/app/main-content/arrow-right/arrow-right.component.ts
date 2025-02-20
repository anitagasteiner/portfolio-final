import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-arrow-right',
  standalone: true,
  imports: [],
  templateUrl: './arrow-right.component.html',
  styleUrl: './arrow-right.component.scss'
})
export class ArrowRightComponent implements AfterViewInit {

  arrowOptions = {
    threshold: 1
  };

  arrowObserver: IntersectionObserver | undefined;

  ngAfterViewInit(): void {    
    this.arrowObserver = new IntersectionObserver(this.callback, this.arrowOptions);
    const arrow = document.querySelector('#arrow-right');
    if (arrow) {
      this.arrowObserver.observe(arrow);
    }
  }

  callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.addClassName('move');
      }
    });
  };

  addClassName(className: string): void {
    const arrow = document.querySelector('#arrow-right');
    if (arrow) {
      arrow.classList.add(className);      
    }
  }


}
