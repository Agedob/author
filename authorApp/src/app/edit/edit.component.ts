import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  me:any;
  newauthor = { name:''}
  exs;
  id;
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
    })
  }
  edit(id){
    let obs = this._httpservice.edit(id, this.newauthor);
    obs.subscribe(data => {
      console.log(data);
      this._router.navigate(['/alpha'])
    })
  }
}
