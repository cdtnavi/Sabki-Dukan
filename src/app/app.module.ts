import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { BrowserModule, Title } from '@angular/platform-browser';
import { LogoutComponent } from './logout/logout.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { SearchallusersComponent } from './searchallusers/searchallusers.component';
import { JobsComponent } from './jobs/jobs.component';
import { ApplyjobComponent } from './applyjob/applyjob.component';
import { PostjobComponent } from './postjob/postjob.component';
import { Jobs1Component } from './jobs1/jobs1.component';
import { FetchjobComponent } from './fetchjob/fetchjob.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    AboutComponent,
    LogoutComponent,
    AdminheaderComponent,
    SearchallusersComponent,
    JobsComponent,
    ApplyjobComponent,
    PostjobComponent,
    Jobs1Component,
    FetchjobComponent
  ],
  imports: [FormsModule, HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
