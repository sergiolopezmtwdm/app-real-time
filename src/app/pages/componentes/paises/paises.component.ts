import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PaisesService } from 'src/app/services/core/paises.service';
import { SearchService } from 'src/app/services/core/search.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss']
})
export class PaisesComponent implements OnInit, OnDestroy {

  paisesList: any[] = [];
  subscription$: Subscription;

  //Variable paises
  defaultBindingsList = [
    { value: 0, label: 'Todos' },
    { value: 1, label: 'Africa' },
    { value: 2, label: 'Americas' },
    // { value: 3, label: 'Asia', disabled: true },
    { value: 3, label: 'Asia' },
    { value: 4, label: 'Europe' },
    { value: 5, label: 'Oceania' }
];

  selectedCRegion = null;

  constructor(private svcPaises: PaisesService, private svcSearch: SearchService) {

    this.getAllData();

    this.subscription$ = svcSearch.onListenCriterio().subscribe((criterio: string) =>{
      //console.log(`La subscripcion al observable es: `, criterio);
      if(criterio != ''){
        this.searchCriterio(criterio);
      }else{
        this.getAllData();
      }
    });
  }

  ngOnInit(): void {
    this.selectedCRegion = this.defaultBindingsList[0];
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  searchCriterio(criterio){
    //console.log('El criterio escrito es: ', criterio);
    this.svcPaises.getPaisesByName(criterio).subscribe((data:any[])=>{
      this.paisesList = data;
    });
  }

  getPaisesByRegion(region: string){
    this.svcPaises.getPaisesByRegion(region).subscribe((data:any[])=>{
      this.paisesList = data;
    });
  }

  getAllData(){
    this.svcPaises.getAllPaises().subscribe((data:any[])=>{
      this.paisesList = data;
    });
  }

  onChangeRegion(){
    //console.log(`La región seleccionada es: `, this.selectedCRegion);
    if(this.selectedCRegion.value == 0){
      this.getAllData();
    }else{
      this.getPaisesByRegion(this.selectedCRegion.label);
    }
  }

}
