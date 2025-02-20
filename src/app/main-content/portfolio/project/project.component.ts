import { Component, Input, AfterViewInit, inject, HostListener, OnInit } from '@angular/core';
import { GeneralService } from '../../../general.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit, AfterViewInit {

  generalService = inject(GeneralService);

  @Input()project = {
    id: 4,
    date: "11/2024",
    imageMobile: "demon-woods-mobile.png",
    imageTablet: "demon-woods-tablet.png",
    imageMonitor: "demon-woods-monitor.png",
    orientation: "landscape",
    title: "Demon Woods",
    skills: "HTML | CSS | JavaScript | Git | OOP",
    description: "Simple jump and run game based on an object-oriented approach: Help the fairy to collect hearts and stones to fight against wraiths and a demon.",
    descriptionGerman: "Einfaches Jump-and-Run-Spiel, das auf einem objektorientierten Zugang basiert: Helfen Sie der Fee dabei, Herzen und Steine zu sammeln, um gegen Geister und einen Dämon zu kämpfen.",
    position: "right",
    gitLink: "https://github.com/anitagasteiner/demon_woods",
    webLink: "https://demon-woods.anita-gasteiner.at"
  };

  currentImg: string = '';

  @HostListener('window:resize', ['$event'])  
  onResize(event: Event) {
    this.currentImg = this.updateImgUrl((<Window>event.target).innerWidth);
  }

  options = {
    threshold: 0.8
  };

  observer: IntersectionObserver | undefined;

  ngOnInit(): void {
    this.currentImg = this.updateImgUrl(window.innerWidth);    
  }

  ngAfterViewInit(): void {    
    this.observer = new IntersectionObserver(this.callback, this.options);
    const project = document.querySelector('#project-' + this.project.id);
    if (project) {
      this.observer.observe(project);
    }
  }

  callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.addClassNames('appear', 'color');
      }
    });
  };

  addClassNames(className1: string, className2: string): void {
    const project = document.querySelector('#project-' + this.project.id);
    const image = document.querySelector('#project-' + this.project.id + '-image');
    const border = document.querySelector('#project-' + this.project.id + '-border');
    const arrow = document.querySelector('#project-' + this.project.id + '-arrow');
    if (project) {
      project.classList.add(className1);      
    }
    if (image) {
      image.classList.add(className2);
    }
    if (border) {
      border.classList.add(className2);
    }
    if (arrow) {
      arrow.classList.add(className2);
    }
  }

  updateImgUrl(width: number): string {
    if (width < 768) {
      return this.project.imageMobile;
    } else if (width >= 768 && width < 1200) {
      return this.project.imageTablet;
    } else {
      return this.project.imageMonitor;
    }
  }

}