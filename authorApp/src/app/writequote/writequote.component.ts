import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-writequote',
  templateUrl: './writequote.component.html',
  styleUrls: ['./writequote.component.css']
})
export class WritequoteComponent implements OnInit {
  id;
  me;
  list;
  newquote = {
    desc: ''
  }
  constructor(private _route: ActivatedRoute,private _router: Router, private _httpservice: AuthorService) { }
  
  ngOnInit() {
    this._route.params.subscribe((params: Params) => this.id = (params['id']));
    this.search();
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
  onsubmit(){
    let i = this._httpservice.addquote(this.id, this.newquote);
    i.subscribe(data => {
      console.log(data);
      this.newquote['desc'] = ''
      this._router.navigate(['/quote/'+this.id])
    
    })
  }
}
