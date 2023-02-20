import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanterComponent } from './planter/planter.component';
import { AdminWorkComponent } from './admin-work/admin-work.component';
import { PlanterDetailsComponent } from './planter-details/planter-details.component';
import { UserComponent } from './user/user.component';
import { PlanterPipe } from './planter-pipe';


const allLinks:Routes = [
  {path:'launchplanter',component:AdminWorkComponent},
  {path:'planters',component:UserComponent},
  {path:'planterDetail/:pid',component:PlanterDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PlanterComponent,
    AdminWorkComponent,
    PlanterDetailsComponent,
    UserComponent,
    PlanterPipe


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(allLinks)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
