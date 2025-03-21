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

  currentSection: string = '';

  setCurrentSection(section: string) {
    this.currentSection = '';
    this.currentSection = section;
  }

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
      }, 120);      
      this.navbarOpened = true;
    } else if (this.navbarOpened) {
      this.animateNavBtnOpen();
      setTimeout(() => {
        this.showNavBtnOpen();        
      }, 120);
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
    }, 40);
    setTimeout(() => {
      this.currentNavBtn = this.changeNavBtnArray[0];      
    }, 80);    
  }

  animateNavBtnClose() {
    this.currentNavBtn = this.changeNavBtnArray[0];
    setTimeout(() => {
      this.currentNavBtn = this.changeNavBtnArray[1];      
    }, 40);
    setTimeout(() => {
      this.currentNavBtn = this.changeNavBtnArray[2];
    }, 80);
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

  handleScrolling() {
    if (this.navbarOpened) {
      this.disableScrolling();
    } else {
      this.enableScrolling();
    }
  }

  disableScrolling() {
    document.body.style.overflow = 'hidden';
  }

  enableScrolling() {
    document.body.style.overflow = 'auto';
  }

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
