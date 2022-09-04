import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-fetchjob',
  templateUrl: './fetchjob.component.html',
  styleUrls: ['./fetchjob.component.css']
})
export class FetchjobComponent implements OnInit {
  advt:any[]=[];

  constructor(private myhttp:HttpClient, private myrouter:Router,private myroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.myhttp.get("http://localhost:3000/fetchjobs",{responseType:"json"}).subscribe({
      next:(resp:any)=>{
        this.advt = resp;
      }
    })
  }

}
