import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAuthorService {

  constructor() { }

  Get =()=>{
    return 'JK Rowlings'
  }
}
