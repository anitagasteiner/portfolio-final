import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
