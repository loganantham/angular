import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Item {
  constructor(
    public itemId:number,
    public itemName:string
  ){}
}

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {

  constructor(
    private httpClient : HttpClient
  ) {}

  getItems(){
    console.log("API CALL");
    return this.httpClient.get<Item[]>('http://localhost:9090/items');
  }
}
