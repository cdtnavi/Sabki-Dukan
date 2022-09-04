import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(private myhttp:HttpClient,private myrouter:Router) { }

  ngOnInit(): void {
    
  }
  onpost(){
    if(sessionStorage.getItem("pname")==null){
      alert("Please sign in to continue")
      this.myrouter.navigateByUrl("/login")
    }
    else{
      this.myrouter.navigateByUrl("/post")
    }

  }

  onapply(){

  }



}
