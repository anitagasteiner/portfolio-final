import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { SkillComponent } from './skill/skill.component';
import { GeneralService } from '../../general.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [
    CommonModule,
    SkillComponent,
    TranslatePipe
  ],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent implements AfterViewInit {

  generalService = inject(GeneralService);

  @ViewChild('mySkills') mySkills!: ElementRef;

  ngAfterViewInit(): void {
    if (this.generalService.currentSection == 'mySkills') {
      this.mySkills.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start'});
      this.generalService.currentSection = '';
    }
  }

  skills = [
    {
      image: "./../../../assets/img/angular.svg",
      name: "Angular"
    },
    {
      image: "./../../../assets/img/type-script.svg",
      name: "TypeScript"
    },
    {
      image: "./../../../assets/img/java-script.svg",
      name: "JavaScript"
    },
    {
      image: "./../../../assets/img/python.png",
      name: "Python"
    },
    {
      image: "./../../../assets/img/django.png",
      name: "Django"
    },
    {
      image: "./../../../assets/img/djangorest.svg",
      name: "Django REST Framework"
    },
    {
      image: "./../../../assets/img/html.svg",
      name: "HTML"
    },
    {
      image: "./../../../assets/img/scss.svg",
      name: "SCSS"
    },
    {
      image: "./../../../assets/img/css.svg",
      name: "CSS"
    },
    {
      image: "./../../../assets/img/firebase.svg",
      name: "Firebase"
    },
    {
      image: "./../../../assets/img/git.svg",
      name: "Git"
    },
    {
      image: "./../../../assets/img/rest-api.svg",
      name: "REST-API"
    },
    {
      image: "./../../../assets/img/scrum.svg",
      name: "Scrum"
    },
    {
      image: "./../../../assets/img/material-design.svg",
      name: "Material Design"
    },
    {
      image: "./../../../assets/img/php.svg",
      name: "PHP"
    }
  ];

}
