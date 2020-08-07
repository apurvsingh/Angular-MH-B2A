import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  constructor() { }
  isSelected = false;
  className = "glyphicon glyphicon-star-empty";

  onClick = ()=>{
    this.className = this.isSelected ? "glyphicon glyphicon-star-empty" : "glyphicon glyphicon-star";
    this.isSelected = !this.isSelected;
  } 
}
