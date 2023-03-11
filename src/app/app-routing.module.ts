import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BodyComponent } from './body/body.component';
import { QuiSommesNousComponent } from './qui-sommes-nous/qui-sommes-nous.component';
import { StaffAdministratifComponent } from './staff-administratif/staff-administratif.component';
import { ContactComponent } from './contact/contact.component';
import { FiderationComponent } from './fideration/fideration.component';
import { UserComponent } from './user/user.component';
import { StaffTechniqueComponent } from './staff-technique/staff-technique.component';
import { DocumentAdministratifComponent } from './document-administratif/document-administratif.component';
import { LePresidentComponent } from './le-president/le-president.component';
import { BureauFediralComponent } from './bureau-fediral/bureau-fediral.component';
import { AnciensPresidentsComponent } from './anciens-presidents/anciens-presidents.component';
import { CalendrierAirComprimeComponent } from './calendrier-air-comprime/calendrier-air-comprime.component';
import { CalendrierTirAirComponent } from './calendrier-tir-air/calendrier-tir-air.component';
import { CalendrierBallTrapComponent } from './calendrier-ball-trap/calendrier-ball-trap.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
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
import { SinscrireComponent } from './sinscrire/sinscrire.component';
import { Login1Component } from './login1/login1.component';
import { Login2Component } from './login2/login2.component';
import { NationalComponent } from './national/national.component';
import { EspaceclubeComponent } from './espaceclube/espaceclube.component';
import { TunisieComponent } from './tunisie/tunisie.component';
import { InterfaceAdminComponent } from './interface-admin/interface-admin.component';
import { AdminQuiSommeNousComponent } from './admin-qui-somme-nous/admin-qui-somme-nous.component';


const routes: Routes = [ 
  {path: '', redirectTo:"body",pathMatch:"full"},
  {path:'admin',component:AdminComponent},
  {path:'interfaceadmin',component:InterfaceAdminComponent,children:[
    {path:'adminQuiSommesNous',component:AdminQuiSommeNousComponent},
  ]},
  {path:'login',component:LoginComponent},
  {path:'login1',component:Login1Component},
  {path:'login2',component:Login2Component},
  {path:'sinscrire',component:SinscrireComponent},
  {path:'body',component:BodyComponent},
  
  {path: 'user', component:UserComponent},
  {path:'',component:UserComponent,children:[
    {path:'contact',component:ContactComponent},
    {path:'QuiSommesNous',component:QuiSommesNousComponent},
    {path:'StaffTechnique',component:StaffTechniqueComponent},
    {path:'StaffAdministratif',component:StaffAdministratifComponent},
    {path:'DocumentAdministratif',component:DocumentAdministratifComponent},
    {path:'LePresident',component:LePresidentComponent},
    {path:'BureauFediral',component:BureauFediralComponent},
    {path:'AnciensPresidents',component:AnciensPresidentsComponent},
    {path:'CalendrierAirComprime',component:CalendrierAirComprimeComponent},
    {path:'CalendrierTirAir',component:CalendrierTirAirComponent},
    {path:'CalendrierBallTrap',component:CalendrierBallTrapComponent},
    {path:'Calendrier',component:CalendrierComponent},
    {path:'Reunions',component:ReunionsComponent},
    {path:'ChampionNationalAirComprime',component:ChampionNationalAirComprimeComponent},
    {path:'ChampionNationalTirArc',component:ChampionNationalTirArcComponent},
    {path:'tunisie',component:TunisieComponent},
    {path:'ChampionNationalBallTrap',component:ChampionNationalBallTrapComponent},
    {path:'ChampionNationalMCJ',component:ChampionNationalMCJComponent},
    {path:'ChampionNationalDesJeunes',component:ChampionNationalDesJeunesComponent},
    {path:'CoupeDeTunisieBallTrap',component:CoupeDeTunisieBallTrapComponent},
    {path:'CoupeDeTunisieTirArc',component:CoupeDeTunisieTirArcComponent},
    {path:'CoupeDeTunisieDesJeunes',component:CoupeDeTunisieDesJeunesComponent},
    {path:'CoupeDeTunisieAirComprime',component:CoupeDeTunisieAirComprimeComponent},
    {path:'resultat',component:ResultatComponent},
    {path:'actualite',component:ActualiteComponent},
    {path:'photos',component:PhotosComponent},
    {path:'International',component:InternationalComponent},
    {path:'video',component:VideoComponent},
    {path:'calendrier2022',component:Calendrier2022Component},
    {path:'calendrier2024',component:Calendrier2024Component},
    {path:'news',component:NewsComponent},
    {path:'evenement',component:EvenementComponent},
    {path:'formulaire',component:FormulaireComponent},
    {path:'resultat',component:ResultatComponent},
    {path:'championnat',component:ChampionnatComponent},
    {path:'national',component:NationalComponent},
    {path:'club',component:EspaceclubeComponent},

 


    
  ]}

] 

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
