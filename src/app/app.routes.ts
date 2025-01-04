import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { DetailComponent } from './user/detail/detail.component';
import { InscriptionComponent } from './user/inscription/inscription.component';
import { SearchComponent } from './user/search/search.component';
import { CondidatComponent } from './admin/condidat/condidat.component';
import { FormationComponent } from './admin/formation/formation.component';
import { EditFormationComponent } from './admin/edit-formation/edit-formation.component';
import { EditSessionComponent } from './admin/edit-session/edit-session.component';

import { SessionComponent } from './admin/session/session.component';
import { FormateurComponent } from './admin/formateur/formateur.component';
import { EditCondidatComponent } from './admin/edit-condidat/edit-condidat.component';
import { EditFormateurComponent } from './admin/edit-formateur/edit-formateur.component';

export const routes: Routes = [
    {path:'home' , component:HomeComponent},
    {path:'search' , component:SearchComponent},
    {path: 'detail/:id' , component:DetailComponent},
    {path: 'inscrire' , component:InscriptionComponent},
    {path: 'condidat/:nom/:prenom/:email' ,component : CondidatComponent},
    {path: 'formation', component : FormationComponent},
    {path: 'editerFormation/:id', component: EditFormationComponent},
    {path:'session' , component: SessionComponent},
    {path: 'editerSession/:id' , component: EditSessionComponent},
    {path:'formateurs' , component:FormateurComponent},
    {path:'editerCondidat/:email' , component : EditCondidatComponent},
    {path: 'editerFormateur/:id' , component : EditFormateurComponent},
    {path: 'condidats' , component: CondidatComponent}
];
