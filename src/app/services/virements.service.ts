import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Benificiaire } from '../models/benificiaire';
import { Virement } from '../models/virement';

@Injectable({
  providedIn: 'root'
})
export class VirementsService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  public getVirement():Observable<Virement[]>{
    return this.http.get<Virement[]>(`${this.apiUrl}/virement/all`);

  }
  public addVirement(virement:Virement):Observable<Virement>{
    return this.http.post<Virement>(`${this.apiUrl}/virement/add`,virement);

  }

  public updateVirement(virement:Virement):Observable<Virement>{
    return this.http.put<Virement>(`${this.apiUrl}/virement/update`,virement);

  }

  public deleteVirement(id:bigint):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/virement/delete/${id}`);

  }

  public getBenificiaire():Observable<Benificiaire[]>{
    return this.http.get<Benificiaire[]>(`${this.apiUrl}/beneficiare/all`);

  }




}
