import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faStar} from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  
  @Input('is-Favorite') isFavorite : boolean;
  @Output('change') change = new EventEmitter();
  iconStye = "far";

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
    library.addIcons(faStar);
   }

  onClick = ()=>{
    this.isFavorite = !this.isFavorite;
    this.iconStye = this.isFavorite ? "fas" : "far";
    this.change.emit({'newValue' : this.isFavorite});
  } 
}

export interface FavoriteChangedEventArgs{
  newValue : boolean
}