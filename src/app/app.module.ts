import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { NavTimelineComponent } from './nav-timeline/nav-timeline.component';
import { NavWorkComponent } from './nav-work/nav-work.component';
import { NavEducationComponent } from './nav-education/nav-education.component';
import { NavTimelineFeedComponent } from './nav-timeline-feed/nav-timeline-feed.component';
import { WorkComponent } from './work/work.component';
import { appRoutes } from '../app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavTimelineComponent,
    NavWorkComponent,
    NavEducationComponent,
    NavTimelineFeedComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
