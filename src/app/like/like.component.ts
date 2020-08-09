import { GetFontAwesomeServiceService } from './../get-font-awesome-service.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
  providers:[GetFontAwesomeServiceService]
})
export class LikeComponent {

  library:FaIconLibrary;
  @Input('is-Liked') isLiked : boolean;
  @Input('number-of-likes') numberOfLikes: number;
  @Input('tweet-body') tweetBody : string;
  @Output('toggle-like') emitLikeChange = new EventEmitter();
  iconStyle:string;
  color:string;

  constructor(getFontAwesomeServiceService :GetFontAwesomeServiceService){
    this.library= getFontAwesomeServiceService.get();
    this.toggleLike();
  }

  onClick = ()=>{
    this.isLiked = !this.isLiked;
    this.toggleLike();
    this.emitLikeChange.emit({"newNumberOfLikes" : this.numberOfLikes});
  }

  toggleLike = () =>{
    if(this.isLiked){
      this.color = "deeppink";
      this.iconStyle = "fas";
      this.numberOfLikes++;
    }
    else{
      this.color = "#ccc";
      this.iconStyle = "far";
      this.numberOfLikes--;
    }
  }
}

export interface LikeChangeEventArgs{
  newNumberOfLikes : number
}
