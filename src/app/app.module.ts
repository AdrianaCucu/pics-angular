import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { PicsService } from './services/pics.service';

@NgModule({
  declarations: [AppComponent, NavBarComponent],
  imports: [BrowserModule],
  providers: [PicsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
