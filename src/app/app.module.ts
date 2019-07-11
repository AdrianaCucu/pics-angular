import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MediaComponent } from './components/media/media.component';
import { PaginationComponent } from './components/pagination/pagination.component';

import { MediaService } from './services/media.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MediaComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'pictures', component: MediaComponent, pathMatch: 'full' },
      { path: '', redirectTo: '/pictures', pathMatch: 'full' },
      { path: 'videos', component: MediaComponent, pathMatch: 'full' }
    ])
  ],
  providers: [MediaService],
  bootstrap: [AppComponent]
})
export class AppModule {}
