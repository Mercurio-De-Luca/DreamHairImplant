import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClinicaComponent } from './pages/clinica/clinica.component';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { TecnicaFUEComponent } from './pages/tecnica-fue/tecnica-fue.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'clinica',
    component: ClinicaComponent
  },
  {
    path:'contatti',
    component: ContattiComponent
  },
  {
    path:'tecnicaFue',
    component: TecnicaFUEComponent
  },
  {
    path:'domandeFrequenti',
    component: QuestionsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
