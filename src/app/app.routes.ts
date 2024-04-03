import { Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'client', component: ClientComponent}
];
