import { Routes } from "@angular/router";
import { ProfileComponent } from "./app/profile/profile.component";
import { NavTimelineComponent } from "./app/nav-timeline/nav-timeline.component";
import { NavWorkComponent } from "./app/nav-work/nav-work.component";

// export const appRoutes: Routes = [
//     {path: '', redirectTo: '/timeline', pathMatch: 'full'},
//     {path: 'timeline', component: NavTimelineComponent},
//     {path: 'work', component: NavWorkComponent}
// ];

export const appRoutes: Routes = [
    {path: '', redirectTo: '/profile', pathMatch: 'full'},
    {path: 'profile', component:ProfileComponent, outlet:'main'}
];

