import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const endPoint: string = 'assets/json/mainMenu.json';
// const endPoint: string = 'localhost:59487/api/DestinosPGH';
// const endPoint: string = 'http://localhost:59487/api/DestinosPGH';

@Injectable({
  providedIn: 'root'
})
export class MainTopBarMenuService {

  constructor(private http: HttpClient) { }

  getItemMenu(){
    return this.http.get(endPoint); //observable o subscriptor
  }
}
