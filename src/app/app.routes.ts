import { Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { RechercheComponent } from './user/recherche/recherche.component';
import { DetailComponent } from './user/detail/detail.component';
import { InscriptionComponent } from './user/inscription/inscription.component';

export const routes: Routes = [
    {path:'home' , component:HomeComponent},
    {path:'formation' , component:RechercheComponent},
    {path: 'detail' , component:DetailComponent},
    {path: 'inscrir' , component:InscriptionComponent}
];
