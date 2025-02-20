import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { GeneralService } from '../../general.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    ProjectComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  generalService = inject(GeneralService);

  projects = [
    {
      id: 3,
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
    },
    {
      id: 2,
      date: "07/2024",
      imageMobile: "join-mobile.png",
      imageTablet: "join-tablet.png",
      imageMonitor: "join-monitor.png",
      orientation: "portrait",
      title: "Join",
      skills: "HTML | CSS | JavaScript | Git | Firebase",
      description: "Project management tool inspired by the kanban system: Use the task manager to create and organize tasks using drag and drop functions. Assign users and categories.",
      descriptionGerman: "Projektmanagement-Tool nach dem Kanban-System: Erstellen und organisieren Sie Aufgaben mithilfe von Drag & Drop. Weisen Sie den Aufgaben Personen und Kategorien zu.",
      position: "left",
      gitLink: "https://github.com/anitagasteiner/join-239-final",
      webLink: "https://join.anita-gasteiner.at/"
    },
    {
      id: 1,
      date: "05/2024",
      imageMobile: "pokedex-mobile.png",
      imageTablet: "pokedex-tablet.png",
      imageMonitor: "pokedex-monitor.png",
      orientation: "portrait",
      title: "Pokédex",
      skills: "HTML | CSS | JavaScript | Git | API",
      description: "Pokémon register: Click through the different Pokémon characters and get information about them.",
      descriptionGerman: "Pokémon-Verzeichnis: Klicken Sie sich durch die verschiedenen Pokémon-Charaktere und erhalten Sie Informationen über sie.",
      position: "right",
      gitLink: "https://github.com/anitagasteiner/Pokedex",
      webLink: "https://pokedex.anita-gasteiner.at/"
    }
    // {
    //   id: 1,
    //   date: "04/2024",
    //   imageMobile: "instaclone-mobile.png",
    //   imageTablet: "instaclone-tablet.png",
    //   imageMonitor: "instaclone-monitor.png",
    //   orientation: "portrait",
    //   title: "Instaclone",
    //   skills: "HTML | CSS | JavaScript",
    //   description: "Simple social network: Post what you would like to say, like and comment other posts or add new users.",
    //   descriptionGerman: "Einfaches soziales Netzwerk: Erstellen Sie Beiträge, vergeben Sie Likes und kommentieren Sie andere Beiträge oder fügen Sie Personen hinzu.",
    //   position: "left",
    //   gitLink: "https://github.com/anitagasteiner/instaclone",
    //   webLink: "https://instaclone.anita-gasteiner.at/"
    // }
  ];

}