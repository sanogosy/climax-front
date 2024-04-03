import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFichier } from '../model/ifichier';
import { IClient } from '../model/iclient';
import { HttpHeaders } from '@angular/common/http';

export type EntityArrayResponseType = HttpResponse<IFichier[]>;
export type EntityClientArrayResponseType = HttpResponse<IClient[]>;

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private baseUrl = "http://localhost:8072/climax/client/api"
  private baseFileUrl = "http://localhost:8072/climax/fileprocess/api/fileprocess"
  constructor(private httpClient: HttpClient) { }

  upload(fileName: String, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('fileName', fileName.toString());
    formData.append('file', file);
    return this.httpClient.post<any>(`${this.baseUrl}/uploadFile`, formData);
  }

  getAllClient(): Observable<EntityClientArrayResponseType> {
    // const options = createRequest
    return this.httpClient.get<IClient[]>(`${this.baseUrl}/get-clients`, 
    { observe: 'response'}
    );
  }

  fichierList(): Observable<EntityArrayResponseType> {
    // const options = createRequest
    return this.httpClient.get<IFichier[]>(`${this.baseFileUrl}/get-files`, 
    { observe: 'response'}
    );
  }

  getFichierIdentifier(fichier: IFichier): number {
    return fichier.id!;
  }

  extractStoreClient(fichier: IFichier): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const formData: FormData = new FormData();
    formData.append('fileName', fichier.titre.toString());

    return this.httpClient.post<any>(`${this.baseFileUrl}/process`, formData);
  }

}
