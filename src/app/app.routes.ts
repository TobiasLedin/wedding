import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { RvspComponent } from './views/rvsp/rvsp.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'rvsp', component: RvspComponent },
    { path: '**', redirectTo: '' }
];
