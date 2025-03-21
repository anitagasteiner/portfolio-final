import { Component, inject } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormComponent } from './form/form.component';
import { GeneralService } from '../../../general.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    // FormsModule,
    RouterLink,
    RouterLinkActive,
    FormComponent,
    TranslatePipe
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  generalService = inject(GeneralService);

}
