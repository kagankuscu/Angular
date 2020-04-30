import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateSessionComponent
} from "./events/index";

import { EventsAppComponent } from "./events-app.component";
import { NavBarComponent } from "./nav/navbar.component";
import { RouterModule } from "@angular/router";
import { appRoutes } from "src/router";
import { CreateEventComponent } from "./create-event/create-event.component";
import { Error404Component } from "./errors/404.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
  ],
  providers: [
    {
      provide: "canDeactivateCreateEvent",
      useValue: checkDirtyState,
    },
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
