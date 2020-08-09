import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
  model ={
    isFavorite: false
  };

  changedFavoriteEvent=(eventArgs: FavoriteChangedEventArgs)=>{
    console.log("isFavorite: ", eventArgs.newValue );
  }
}
