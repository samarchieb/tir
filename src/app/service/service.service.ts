import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Calendar } from '@fullcalendar/angular';
import { Observable } from 'rxjs';
import { BehaviorSubject, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  path = " http://localhost:3000/";
  
  langue =new BehaviorSubject(false)
  constructor( private http :HttpClient,private router:Router) {}

 
  private createRequestOptions() {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
    });
    return headers;
  }
  setLangue(Lg :boolean){
    this.langue.next(Lg);
  }
  getLangue(){
    return this.langue.getValue();
  }
// API Calendier
 AddCalendrier(data:any){
    return this.http.post<any>(this.path+"calendrier/addCalendier",data);}
 GetCalendrier(){
  return this.http.get<any>(this.path+"calendrier/all");}
 UpdateCalendrier(data:any,id:number){
  return this.http.patch<any>(this.path+"calendrier/"+id,data);}
 DeleteCalendier(id:number){
  return this.http.delete<any>(this.path+"calendrier/"+id);}



  // API Event
 AddEvent(data:any){
  return this.http.post<any>(this.path+"events/addevent",data);}
GetEvent(){
return this.http.get<any>(this.path+"events/all");}
UpdateEvent(data:any,id:number){
return this.http.patch<any>(this.path+"events/"+id,data);}
DeleteEvent(id:number){
return this.http.delete<any>(this.path+"events/"+id);}


  // API Galerie
  AddGalerie(data:any){
    return this.http.post<any>(this.path+"galerie/addgalerie",data);}
  GetGalerie(){
  return this.http.get<any>(this.path+"galerie/all");}
  UpdateGalerie(data:any,id:number){
  return this.http.patch<any>(this.path+"galerie/"+id,data);}
  DeleteGalerie(id:number){
  return this.http.delete<any>(this.path+"galerie/"+id);}


    // API News
    AddNews(data:any){
      return this.http.post<any>(this.path+"news/addnews",data);}
    GetNews(){
    return this.http.get<any>(this.path+"news/all");}
    UpdateNews(data:any,id:number){
    return this.http.patch<any>(this.path+"news/"+id,data);}
    DeleteNews(id:number){
    return this.http.delete<any>(this.path+"news/"+id);}


        // API Page
        AddPage(data:any){
          return this.http.post<any>(this.path+"pages/addpages",data);}
        GetPage(){
        return this.http.get<any>(this.path+"pages/all");}
        UpdatePage(data:any,id:number){
        return this.http.patch<any>(this.path+"pages/"+id,data);}
        DeletePage(id:number){
        return this.http.delete<any>(this.path+"pages/"+id);}

        uploadProfileImage(data:any,id:number){
          return this.http.post<any>("upload/"+id, data); 
        }

            // API formulaire
    AddFormulaire(data:any){
      return this.http.post<any>(this.path+"formulaire/addformulaire",data);}
    GetFormulaire(){
    return this.http.get<any>(this.path+"formulaire/all");}
    UpdateFormulaire(data:any,id:number){
    return this.http.patch<any>(this.path+"formulaire/"+id,data);}
    DeleteFormulaire(id:number){
    return this.http.delete<any>(this.path+"formulaire/"+id);}

  

}
