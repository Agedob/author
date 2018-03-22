import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newauthor = {
    name: ""
  }
  exs:any;

  constructor(private _route: ActivatedRoute,private _router: Router, private _httpservice: AuthorService) { }
  ngOnInit() {
    this.getall()
  }
  getall(){
    let observable = this._httpservice.allauthor();
    observable.subscribe(data => {
    console.log("Got our tasks!", data);
   })
    }
  onnewsubmit(){
    let i = this._httpservice.addauthor(this.newauthor);
    i.subscribe(data => {
      if(data['message']=='Error'){
        console.log(data['data'])
        this.exs = data['data']
      }else{
        this.exs = ''
        this._router.navigate(['/alpha'])
        console.log('it worked!!!!!!!!!!!!!')
      }
    })
    this.newauthor['name'] = '';
  }
  
}
