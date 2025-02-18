import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SkillComponent } from './skill/skill.component';
import { GeneralService } from '../../general.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [
    CommonModule,
    SkillComponent    
  ],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  generalService = inject(GeneralService);

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
