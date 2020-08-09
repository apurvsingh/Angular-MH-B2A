import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { LikeChangeEventArgs } from './like/like.component';

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

  tweet = {
    isLiked :false,
    numberOfLikes: 5,
    body: 'Some tweet text here'
  };
  
  changedFavoriteEvent=(eventArgs: FavoriteChangedEventArgs)=>{
    console.log("isFavorite: ", eventArgs.newValue );
  }
  
  changeNumberOfLikes=(eventArgs: LikeChangeEventArgs)=>{
    this.tweet.numberOfLikes = eventArgs.newNumberOfLikes;
  }
}
