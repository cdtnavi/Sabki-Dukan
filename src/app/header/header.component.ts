import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  declare opop:string;
  declare flag:boolean;
  declare flag1:boolean;
  declare user:any;

  constructor(private myrouter:Router) { }

  ngOnInit(): void {
    this.myrouter.events.subscribe(event =>{
      if (event instanceof NavigationEnd){
        this.ngOnInit();
      }
    })
    if(sessionStorage.getItem("pname")==null){
      this.flag = true;
      this.flag1=false;
    }
    else{
      this.user = sessionStorage.getItem("pname");
      this.flag =false;
      this.flag1=true;

    }
  }
  onclear(){
    sessionStorage.clear();
    this.myrouter.navigateByUrl("/login")
  }

  function(){
    this.myrouter.navigateByUrl("/homepage")

  }

}
