import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ClinicaComponent } from './pages/clinica/clinica.component';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { TecnicaFUEComponent } from './pages/tecnica-fue/tecnica-fue.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ClinicaComponent,
    ContattiComponent,
    QuestionsComponent,
    TecnicaFUEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
