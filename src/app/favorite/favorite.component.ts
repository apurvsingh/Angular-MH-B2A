import { Component } from '@angular/core';
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
  starEmptyIcon = faStar;
  
  isFavorite = false;
  iconStye = "far";

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
    library.addIcons(faStar);
   }

  onClick = ()=>{
    this.isFavorite = !this.isFavorite;
    this.iconStye = this.isFavorite ? "fas" : "far";
    console.log(this.isFavorite);
  } 
}
