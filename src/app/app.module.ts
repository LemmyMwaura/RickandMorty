import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { RickAndMortyListComponent } from './components/rick-and-morty-list/rick-and-morty-list.component';
import { RickAndMortyItemComponent } from './components/rick-and-morty-item/rick-and-morty-item.component';
import { CharacterComponent } from './pages/character/character.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './pages/home/home.component';
import { FilterPipe } from './pipes/filter.pipe';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RickAndMortyListComponent,
    RickAndMortyItemComponent,
    CharacterComponent,
    HomeComponent,
    FilterPipe,
    FormComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
