import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  id;
  me;
  list;

  constructor(private _route: ActivatedRoute,private _router: Router, private _httpservice: AuthorService) { }
  
  ngOnInit() {
    this._route.params.subscribe((params: Params) => this.id = (params['id']));
    this.search();
    // console.log(params['id'])
  }

  search(){
    console.log('searching...')
    console.log(this.id)
    let obs = this._httpservice.findme(this.id);
    obs.subscribe(data => {
      this.me = data
      console.log(data)
      this.list = this.me['quote']
    })
  }
  destroyquote(idz){
    let ob = this._httpservice.destroyquote(this.id , idz);
    ob.subscribe(data => {
      console.log(data)
    })
  this.search();
  }
  incquotevote(qid,num){
    let obs = this._httpservice.incquotevote(this.id, qid, num)
      obs.subscribe(data =>{
        console.log(data)
      })
      this.search();
    }
  
}
//$inc