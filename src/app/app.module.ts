import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RickAndMortyListComponent } from './components/rick-and-morty-list/rick-and-morty-list.component';
import { RickAndMortyItemComponent } from './components/rick-and-morty-item/rick-and-morty-item.component';

@NgModule({
  declarations: [
    AppComponent,
    RickAndMortyListComponent,
    RickAndMortyItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
