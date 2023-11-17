import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiprojService {

  constructor(private http : HttpClient) { }

  postProject(data : any) {

    return this.http.post<any>("http://192.168.2.172:8091/Kaddem/contrat/add-contrat/", data);
  }

  getProject() {


    return this.http.get<any>("http://192.168.2.172:8091/Kaddem/contrat/retrieve-all-contrats/");
  }

  

  putProject(data: any ) {
   return this.http.put<any>("http://192.168.2.172:8091/Kaddem/contrat/update-contrat/",data);
  }


  deleteProject(idProject : number) {

    return this.http.delete<any>('http://localhost:8088/Kaddem/controllerProjet/remove/'+idProject);
  }

}
