import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateSessionComponent,
  DurationPipe
} from "./events/index";

import { EventsAppComponent } from "./events-app.component";
import { NavBarComponent } from "./nav/navbar.component";
import { RouterModule } from "@angular/router";
import { appRoutes } from "src/router";
import { CreateEventComponent } from "./create-event/create-event.component";
import { Error404Component } from "./errors/404.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SessionListComponent } from './events/event-details/session-list/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';
import { TOASTR_TOKEN, Toastr } from "./common/toastr.service";

declare let toastr: Toastr;

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  providers: [
    {
      provide: "canDeactivateCreateEvent",
      useValue: checkDirtyState,
    },
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    }
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      "You have not saved this event, do you want to cancel?"
    );
  }
}
