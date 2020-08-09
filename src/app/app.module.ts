import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import {GetAuthorService} from './get-author.service';
import { FormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    FavoriteComponent,
    PanelComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [GetAuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
