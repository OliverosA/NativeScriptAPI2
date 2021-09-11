import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'


@Injectable({
  providedIn: 'root',
})

export class ItemService {
  constructor(private http: HttpClient) {}

  
  getItems(){
    return this.http.get("https://gateway.marvel.com:443/v1/public/comics?ts=20&apikey=c541a5963b092c5c88b066e48c32dd0e&hash=91f061f30ae9925d56ffc230f6a16127");
    
  }

  obtenerBusqueda(titulo){
    return this.http.get('https://gateway.marvel.com:443/v1/public/comics?ts=20&apikey=c541a5963b092c5c88b066e48c32dd0e&hash=91f061f30ae9925d56ffc230f6a16127&title='+titulo)
  }

}