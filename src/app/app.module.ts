import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { QuiSommesNousComponent } from './qui-sommes-nous/qui-sommes-nous.component';
import { StaffTechniqueComponent } from './staff-technique/staff-technique.component';
import { StaffAdministratifComponent } from './staff-administratif/staff-administratif.component';
import { DocumentAdministratifComponent } from './document-administratif/document-administratif.component';
import { LePresidentComponent } from './le-president/le-president.component';
import { BureauFediralComponent } from './bureau-fediral/bureau-fediral.component';
import { AnciensPresidentsComponent } from './anciens-presidents/anciens-presidents.component';
import { CalendrierAirComprimeComponent } from './calendrier-air-comprime/calendrier-air-comprime.component';
import { CalendrierTirAirComponent } from './calendrier-tir-air/calendrier-tir-air.component';
import { CalendrierBallTrapComponent } from './calendrier-ball-trap/calendrier-ball-trap.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { ContactComponent } from './contact/contact.component';
import { FiderationComponent } from './fideration/fideration.component';
import { UserComponent } from './user/user.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { ReunionsComponent } from './reunions/reunions.component';
import { ChampionNationalAirComprimeComponent } from './champion-national-air-comprime/champion-national-air-comprime.component';
import { ChampionNationalTirArcComponent } from './champion-national-tir-arc/champion-national-tir-arc.component';
import { ChampionNationalBallTrapComponent } from './champion-national-ball-trap/champion-national-ball-trap.component';
import { ChampionNationalMCJComponent } from './champion-national-m-c-j/champion-national-m-c-j.component';
import { ChampionNationalDesJeunesComponent } from './champion-national-des-jeunes/champion-national-des-jeunes.component';
import { CoupeDeTunisieAirComprimeComponent } from './coupe-de-tunisie-air-comprime/coupe-de-tunisie-air-comprime.component';
import { CoupeDeTunisieBallTrapComponent } from './coupe-de-tunisie-ball-trap/coupe-de-tunisie-ball-trap.component';
import { CoupeDeTunisieTirArcComponent } from './coupe-de-tunisie-tir-arc/coupe-de-tunisie-tir-arc.component';
import { CoupeDeTunisieDesJeunesComponent } from './coupe-de-tunisie-des-jeunes/coupe-de-tunisie-des-jeunes.component';
import { CoupeDeTunisieComprimeComponent } from './coupe-de-tunisie-comprime/coupe-de-tunisie-comprime.component';
import { ResultatComponent } from './resultat/resultat.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { PhotosComponent } from './photos/photos.component';
import { VideoComponent } from './video/video.component';
import { InternationalComponent } from './international/international.component';
import { Calendrier2022Component } from './calendrier2022/calendrier2022.component';
import { Calendrier2024Component } from './calendrier2024/calendrier2024.component';
import { NewsComponent } from './news/news.component';
import { EvenementComponent } from './evenement/evenement.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ChampionnatComponent } from './championnat/championnat.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { SinscrireComponent } from './sinscrire/sinscrire.component';
import { Login1Component } from './login1/login1.component';
import { Login2Component } from './login2/login2.component';
import { NationalComponent } from './national/national.component';
import { EspaceclubeComponent } from './espaceclube/espaceclube.component';
import { TunisieComponent } from './tunisie/tunisie.component';
import { InterfaceAdminComponent } from './interface-admin/interface-admin.component';
import { AdminQuiSommeNousComponent } from './admin-qui-somme-nous/admin-qui-somme-nous.component';
import { AccreditationComponent } from './accreditation/accreditation.component'
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader( http,'./assets/traduction/', '.json');}
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BodyComponent,
    NavbarComponent,
    AdminComponent,
    QuiSommesNousComponent,
    StaffTechniqueComponent,
    StaffAdministratifComponent,
    DocumentAdministratifComponent,
    LePresidentComponent,
    BureauFediralComponent,
    AnciensPresidentsComponent,
    CalendrierAirComprimeComponent,
    CalendrierTirAirComponent,
    CalendrierBallTrapComponent,
    CalendrierComponent,
    ContactComponent,
    FiderationComponent,
    UserComponent,
    Navbar2Component,
    ReunionsComponent,
    ChampionNationalAirComprimeComponent,
    ChampionNationalTirArcComponent,
    ChampionNationalBallTrapComponent,
    ChampionNationalMCJComponent,
    ChampionNationalDesJeunesComponent,
    CoupeDeTunisieAirComprimeComponent,
    CoupeDeTunisieBallTrapComponent,
    CoupeDeTunisieTirArcComponent,
    CoupeDeTunisieDesJeunesComponent,
    CoupeDeTunisieComprimeComponent,
    ResultatComponent,
    ActualiteComponent,
    PhotosComponent,
    VideoComponent,
    InternationalComponent,
    Calendrier2022Component,
    Calendrier2024Component,
    NewsComponent,
    EvenementComponent,
    FormulaireComponent,
    ChampionnatComponent,
    LoginComponent,
    SinscrireComponent,
    Login1Component,
    Login2Component,
    NationalComponent,
    EspaceclubeComponent,
    TunisieComponent,
    InterfaceAdminComponent,
    AdminQuiSommeNousComponent,
    AccreditationComponent,
    
  ],
  imports: [
    BrowserModule,MatDatepickerModule,MatCardModule,MatDatepickerModule,MatNativeDateModule, BrowserAnimationsModule, AppRoutingModule, FormsModule,ReactiveFormsModule,  HttpClientModule,TranslateHttpLoader,HttpClient,
    TranslateModule.forRoot({
      defaultLanguage: 'FR',
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
