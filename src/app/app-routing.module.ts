import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FetchjobComponent } from './fetchjob/fetchjob.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { JobsComponent } from './jobs/jobs.component';
import { Jobs1Component } from './jobs1/jobs1.component';
import { LoginComponent } from './login/login.component';
import { PostjobComponent } from './postjob/postjob.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  
  {
    path:"",
    component:HomepageComponent,
    pathMatch:"full"
  },
  
  {
    path:"header",
    component:HeaderComponent,
  },
  {
    path:"signup",
    component:SignupComponent,
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"homepage",
    component:HomepageComponent
  },
  {
    path:"jobs1",
    component:Jobs1Component
  },
  {
    path:"post",
    component:PostjobComponent
  },
  {
    path:"fetchjobs",
    component:FetchjobComponent
  },
  {
    path:"about",
    component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
