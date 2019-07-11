import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MediaComponent } from './components/media/media.component';
import { MediaListComponent } from './components/media-list/media-list.component';

import { MediaService } from './services/media.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MediaComponent,
    MediaListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: MediaComponent, pathMatch: 'full' },
      { path: 'pictures', component: MediaComponent, pathMatch: 'full' },
      { path: 'videos', component: MediaComponent, pathMatch: 'full' }
    ])
  ],
  providers: [MediaService],
  bootstrap: [AppComponent]
})
export class AppModule {}
