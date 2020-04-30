import { Routes } from '@angular/router'

import {
  EventsListComponent,
  EventDetailsComponent,
  EventRouteActivator,
  EventListResolverService
 } from "./app/events/index";

import { CreateEventComponent } from './app/create-event/create-event.component';
import { Error404Component } from './app/errors/404.component';

export const appRoutes:Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events', component: EventsListComponent, resolve: {events:EventListResolverService}},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    {path: 'events/session/new', component: CreateEventComponent},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full' },
    {path: 'user', loadChildren: './user/user.module#UserModule'}
]
