import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {
  sex:string=""
  declare advt:string;


  constructor(private myhttp:HttpClient, private myrouter:Router, myroute:ActivatedRoute) { }

  ngOnInit(): void {


  }
  onsubmit(){
    var adv = {gender:this.sex,adv:this.advt}
    this.myhttp.post("http://localhost:3000/api/advertisement",adv,{responseType:"text"}).subscribe({
      next:(resp:any)=>{
        alert(resp)
        this.myrouter.navigateByUrl("/home")
      },
      error:(err)=>{
        alert(err);

      }
    })
  }

}
