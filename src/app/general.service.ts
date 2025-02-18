import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  navbarOpened: boolean = false;
  currentNavLink: string ='navbar';
  currentNavBtn: string = 'assets/img/btn-open.svg';
  navBtnOpen: string = 'assets/img/btn-open.svg';
  navBtnClose: string = 'assets/img/btn-close.svg';

  changeNavBtnArray: string[] = [
    'assets/img/btn-progress-1.svg',
    'assets/img/btn-progress-2.svg',
    'assets/img/btn-progress-3.svg'
  ];

  currentLanguage: string = 'de';
  btnText: string = 'Nachricht senden';
  nameText: string = 'Ihr Name';
  mailText: string = 'Ihre E-Mail-Adresse';
  messageText: string = 'Ihre Nachricht';

  getLanguageFromLocalStorage() {
    const language = localStorage.getItem('language');
    if (language) {
      this.currentLanguage = language;
    }    
  }

  changeNavBtn() {
    if (!this.navbarOpened) {
      this.animateNavBtnClose();
      setTimeout(() => {
        this.showNavBtnClose();        
      }, 900);      
      this.navbarOpened = true;
    } else if (this.navbarOpened) {
      this.animateNavBtnOpen();
      setTimeout(() => {
        this.showNavBtnOpen();        
      }, 900);
      this.navbarOpened = false;
    }
  }
  
  showNavBtnClose() {
      this.currentNavBtn = this.navBtnClose;
      this.currentNavLink = '';     
  }

  showNavBtnOpen() {
      this.currentNavBtn = this.navBtnOpen;
      this.currentNavLink = 'navbar';     
  }

  animateNavBtnOpen() {
    this.currentNavBtn = this.changeNavBtnArray[2];
    setTimeout(() => {
      this.currentNavBtn = this.changeNavBtnArray[1];      
    }, 300);
    setTimeout(() => {
      this.currentNavBtn = this.changeNavBtnArray[0];      
    }, 600);    
  }

  animateNavBtnClose() {
    this.currentNavBtn = this.changeNavBtnArray[0];
    setTimeout(() => {
      this.currentNavBtn = this.changeNavBtnArray[1];      
    }, 300);
    setTimeout(() => {
      this.currentNavBtn = this.changeNavBtnArray[2];
    }, 600);
  }

  closeNavbar() {
    this.navbarOpened = false;
  }

  scrollToTop() {
    window.scrollTo(
      {
        top: 0
      }
    );
  }
  
  // scrollToSection(section: any) {
  //   console.log(section);
  //   const currentSection: any = document.getElementById(section);
  //   currentSection.scrollIntoView();

  // }  

  setBtnText() {
    if (this.currentLanguage == 'de') {
      this.btnText = 'Nachricht senden';
    } else if (this.currentLanguage == 'en') {
      this.btnText = 'Send message';
    }
  }

  setPlaceholders() {
    if (this.currentLanguage == 'de') {
      this.nameText = 'Ihr Name';
      this.mailText = 'Ihre E-Mail-Adresse';
      this.messageText = 'Ihre Nachricht';
    } else if (this.currentLanguage == 'en') {
      this.nameText = 'Your name';
      this.mailText = 'Your email';
      this.messageText = 'Your message';
    }
  }
  
}
