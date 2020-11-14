import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const END_POINT = 'https://restcountries.eu/rest/v2';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { }

  /**
   * Get All Countries
   */
  getAllPaises(){
    return this.http.get(`${END_POINT}/all`);
    //return this.http.get(END_POINT+'/all');
  }

/**
 *
 * @param region => Africa, America, Asia, Europe, Oceania
 */
  getPaisesByRegion(region: string){
    return this.http.get(END_POINT+'/region/'+region);
  //  ó
    // return this.http.get(`${END_POINT}/region/${region}`);
  }

  getPaisesByName(name: string){
    return this.http.get(`${END_POINT}/name/${name}`);
    // return this.http.get(END_POINT+'/name/'+name);
  }

  /**
   *
   * @param code
   */
  getPaisByCode(code: string){
    return this.http.get(`${END_POINT}/alpha/${code}`);
  }
}


