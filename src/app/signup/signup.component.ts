import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  declare pname:string;
  declare buisnessname:string;
  declare phone:string;
  declare pass:string;
  declare cpass:string;
  declare termscbx:boolean;
  declare msg:string;
  declare address:string;
  declare distrct:string;
  declare pin:string;
  declare state:string;
  declare emailname:string;
  type:string="";
  declare pic:File;
  states = [ "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttarakhand",
                "Uttar Pradesh",
                "West Bengal",
                "Andaman and Nicobar Islands",
                "Chandigarh",
                "Dadra and Nagar Haveli",
                "Daman and Diu",
                "Delhi",
                "Lakshadweep",
                "Puducherry"]

  constructor(private myrouter:Router,private myhttp:HttpClient,private myroute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  onsignup(myform:any){
    var signupdata = new FormData()
    if(myform.valid)
    {
    const str = this.pname
    this.pname = str.charAt(0).toUpperCase()+str.slice(1)
    
    if(this.termscbx == true){
      if(this.pass==this.cpass)
      {
        if(this.pic==null){
          signupdata.append("pname",this.pname)
          signupdata.append("emailname",this.emailname)
          signupdata.append("buisnessname",this.buisnessname)
          signupdata.append("phone",this.phone)
          signupdata.append("buisnesstype",this.type)
          signupdata.append("pass",this.pass)
          signupdata.append("address",this.address)
        }
        else{
          signupdata.append("pname",this.pname)
          signupdata.append("emailname",this.emailname)
          signupdata.append("buisnessname",this.buisnessname)
          signupdata.append("phone",this.phone)
          signupdata.append("buisnesstype",this.type)
          signupdata.append("pass",this.pass)
          signupdata.append("address",this.address)
          signupdata.append("pic",this.pic)
        }
        
       //no need to declare the cpass and termscbx since it can be checked inside the angular itself
  //signup below in the url 
  
    this.myhttp.post("http://localhost:3000/api/signup",signupdata,{responseType:"text"}).subscribe(
      {
      next:(resp:any)=>{
        if (resp =="1"){
          alert("Signup successful")
          this.myrouter.navigateByUrl("/login")
        }
        else if(resp == "0"){
          alert("user already exists")
        }
        this.msg = resp;
      },
      error:(err)=>
      {
        this.msg = err;
      }
    })
  
    }
    else{
      alert("password and confirm password don't match")
    }
  
      }
      
    else{
      alert("You need to accept the terms and conditions")
    }
    }
    else
    {
      alert("Please check the fields and then signup")
    }
  
    }
    myfileselected(evt:any){
      this.pic = evt.target.files[0];
    }

}
