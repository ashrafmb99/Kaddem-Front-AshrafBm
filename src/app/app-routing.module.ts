import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './projets/details/details.component';
import { ProcomComponent } from './projets/procom/procom.component';
import { TableprojetsComponent } from './projets/tableprojets/tableprojets.component';


const routes: Routes = [
  { path: 'projets', 
  children:[
    {path: 'details' ,component:DetailsComponent },
    {path: 'gestion' ,component:ProcomComponent }


  ] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
