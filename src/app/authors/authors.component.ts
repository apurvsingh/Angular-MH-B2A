import { Component } from '@angular/core';
import { GetAuthorService} from '../get-author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {

  title = "List of Authors"
  authors;
  email="abc@example.com";

  constructor(servive : GetAuthorService) {
    this.authors = servive.Get();
   }

   onSave =()=>{
    console.log(this.email);
  }
}
