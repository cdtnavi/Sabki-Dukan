import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs1',
  templateUrl: './jobs1.component.html',
  styleUrls: ['./jobs1.component.css']
})
export class Jobs1Component implements OnInit {
  city:string=""

  constructor(private myrouter:Router) { }

  ngOnInit(): void {
  }
  postjob(){
    if (sessionStorage.getItem("pname")==null){
      alert("Please login")
      this.myrouter.navigateByUrl("/login")
    }
    else{
      {
        this.myrouter.navigate(
          ['/post'],
          { queryParams: { "city": this.city} }
        );
      }
  
    }


  }

  applyjob(){

    {
      this.myrouter.navigate(
        ['/fetchjobs'],
        { queryParams: { "city": this.city} }
      );
    }

  }

}
