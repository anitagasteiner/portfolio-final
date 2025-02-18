import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GeneralService } from '../../../../general.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  generalService = inject(GeneralService);

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    checkbox: false
  }

  mailTest = true;

  post = {
    endPoint: 'https://anita-gasteiner.at/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  mailSent = false;
  mailError = false;

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.showMailSentInfo();
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else {
      this.showMailNotSentInfo();
    }
    // else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      // Um zu testen, füge ich hier hinzu, was passieren soll.
      // ngForm.resetForm();
    // }
  }

  showMailSentInfo() {
    this.mailSent = true;
    setTimeout(() => {
      this.mailSent = false;
    }, 3000);
  }

  showMailNotSentInfo() {
    this.mailError = true;
    setTimeout(() => {
      this.mailError = false;
    }, 1500);
  }

}
