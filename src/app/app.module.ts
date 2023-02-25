import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RickAndMortyListComponent } from './components/rick-and-morty-list/rick-and-morty-list.component';
import { RickAndMortyItemComponent } from './components/rick-and-morty-item/rick-and-morty-item.component';
import { HomeComponent } from './components/home/home.component';
import { FilterPipe } from './pipes/filter.pipe';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RickAndMortyListComponent,
    RickAndMortyItemComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
