import { Injectable } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

@Injectable({
  providedIn: 'root'
})

export class GetFontAwesomeServiceService {
  private library:FaIconLibrary;

  constructor(private _library: FaIconLibrary) {
    _library.addIconPacks(fas, far);
    this.library = _library;
   }

   get =()=>{
     return this.library;
   }
}
