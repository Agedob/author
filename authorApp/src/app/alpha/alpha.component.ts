import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  list = []
  constructor(private _route: ActivatedRoute,private _router: Router, private _httpservice: AuthorService) { }

  ngOnInit() {
    this.getall()
  }
  getall(){
    let observable = this._httpservice.allauthor();
    observable.subscribe(data => {
    console.log("Got our tasks!", data);
    this.list = data['data'];
   })
  }
  destroy(name){
    let i = this._httpservice.destroy(name);
    i.subscribe(data => {
    })
    this.getall();
  }
}
