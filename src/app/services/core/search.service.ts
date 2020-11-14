import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private subject$ = new Subject<string>();

  constructor() { }

  /**
   * Método para publicación de Observable
   * @param criterio
   */
  sendCriterio(criterio: string){
    this.subject$.next(criterio);
  }

  /**
   * Método para subscribiernos al observable
   */
  onListenCriterio() : Observable<string>{
    return this.subject$.asObservable();
  }

}
