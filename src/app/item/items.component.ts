import { Component, OnInit } from '@angular/core'
import { SearchBar } from '@nativescript/core';

import { ItemService } from './item.service'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html'
})
export class ItemsComponent implements OnInit {
  items: Object;
  busqueda: String;

  constructor(private itemService: ItemService) { }

  buscarTitulo(args): void{
    let searchBar = <SearchBar>args.object;
    console.dir(searchBar.text);
    this.busqueda = searchBar.text;
  }


  ngOnInit(): void {

    if(this.busqueda == null){
      this.itemService.getItems().subscribe(
        response => {
          this.items = response.data.results;
        },
        error => console.log(error)
      );
    }
    /*else{
      this.itemService.obtenerBusqueda(this.busqueda).subscribe(
        comic =>{
          this.items = comic.data.results;
          //console.dir(comic.data.results);
        },
        error => console.log(error)
      );
    }*/


  }


}
