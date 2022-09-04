import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  declare username:string;
  declare password:string;
  declare msg:string;
  declare test:string;
  title="login"
 

  constructor(private myrouter:Router,private myhttp:HttpClient,private myroute:ActivatedRoute) {
    myrouter.events.subscribe(event =>{
      if (event instanceof NavigationEnd){
        this.ngOnInit();
      }
    })
   }

  ngOnInit(): void {

  }
  
  

  onlogin(myform:any){
    if(myform.valid)
    {
      var logindata = {uname:this.username,pass:this.password}
      this.myhttp.post("http://localhost:3000/api/login",logindata,{responseType:"json"}).subscribe({
      next:(resp:any)=>
      {
        if (resp.statuscode== 0){
          this.msg = "Wrong username or password";
        }
        else if (resp.statuscode== 1){
          sessionStorage.setItem("pname",resp.userdata[0].name)
          sessionStorage.setItem("username",resp.userdata[0].username)
          sessionStorage.setItem("Usertype",resp.userdata[0].usertype)
          sessionStorage.setItem("password",resp.userdata[0].password)
          if (sessionStorage.getItem("Usertype")=="normal")
          {
            this.myrouter.navigateByUrl("/");
          }
          else
          {
            this.myrouter.navigateByUrl("/adminhome");
          }
          

        }
        else if (resp.statuscode== -1){
          this.msg = "Some internal error occured";
          

        }

      },
      error:(err)=>{
        this.msg = err;
      }
    })

    }
    else{
      alert("Please fill all the fields properly")
    }
    


  }

}
