import { Routes } from "@angular/router";
import { ProfileComponent } from "./app/profile/profile.component";
import { NavTimelineComponent } from "./app/nav-timeline/nav-timeline.component";
import { NavWorkComponent } from "./app/nav-work/nav-work.component";
import { NavEducationComponent } from "./app/nav-education/nav-education.component";

// export const appRoutes: Routes = [
//     {path: '', redirectTo: '/timeline', pathMatch: 'full'},
//     {path: 'timeline', component: NavTimelineComponent},
//     {path: 'work', component: NavWorkComponent}
// ];

export const appRoutes: Routes = [
    {path: '', redirectTo: '/profile/(auxoutlet:timeline)', pathMatch: 'full'},
    {path: 'profile', component:ProfileComponent,
        children: [
            {path: 'timeline', component: NavTimelineComponent, outlet: 'auxoutlet'},
            {path: 'work', component: NavWorkComponent, outlet: 'auxoutlet'},
            {path: 'education', component: NavEducationComponent, outlet: 'auxoutlet'}
        ]
    }
];

