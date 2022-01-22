import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ButtonComponent } from './components/button/button.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { RoomItemComponent } from './components/room-item/room-item.component';
import { ScreensComponent } from './components/screens/screens.component';
import { ScreenItemComponent } from './components/screen-item/screen-item.component';
import { AddScreenComponent } from './components/add-screen/add-screen.component';
import { EditScreenComponent } from './components/edit-screen/edit-screen.component';
import { TicketComponent } from './components/ticket/ticket.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'screens', component: ScreensComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent,
    MoviesComponent,
    ButtonComponent,
    MovieItemComponent,
    AddMovieComponent,
    EditMovieComponent,
    RoomsComponent,
    RoomItemComponent,
    ScreensComponent,
    ScreenItemComponent,
    AddScreenComponent,
    EditScreenComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
