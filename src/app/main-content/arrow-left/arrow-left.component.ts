import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-arrow-left',
  standalone: true,
  imports: [],
  templateUrl: './arrow-left.component.html',
  styleUrl: './arrow-left.component.scss'
})
export class ArrowLeftComponent implements AfterViewInit {

  arrowOptions = {
    threshold: 1
  };

  arrowObserver: IntersectionObserver | undefined;

  ngAfterViewInit(): void {    
    this.arrowObserver = new IntersectionObserver(this.callback, this.arrowOptions);
    const arrow = document.querySelector('#arrow-left');
    if (arrow) {
      this.arrowObserver.observe(arrow);
    }
  }

  callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      console.log('Arrow left: ', entry.isIntersecting);
      if (entry.isIntersecting) {
        this.addClassName('move');
      }
    });
  };

  addClassName(className: string): void {
    const arrow = document.querySelector('#arrow-left');
    if (arrow) {
      arrow.classList.add(className);      
    }
  }

}
