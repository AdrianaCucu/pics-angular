import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MediaComponent } from './components/media/media.component';
import { PicturesComponent } from './components/pictures/pictures.component';

import { PicsService } from './services/pics.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MediaComponent,
    PicturesComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [PicsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
