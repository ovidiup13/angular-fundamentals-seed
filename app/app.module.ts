import { NgModule } from "@angular/core";

//import a different module for server-side rendering
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { NotFoundComponent } from "./not-found.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full" // match empty string
  },
  {
    path: "**", // any routes that do not exist in the application
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [
    //angular modules
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    //custom modules
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
