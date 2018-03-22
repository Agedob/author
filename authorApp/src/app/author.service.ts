import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class AuthorService {
  constructor(private _author: HttpClient) { }
  allauthor(){
    return this._author.get('/authorlist')
  }
  addauthor(data){
    return this._author.post('/author',data)
  }
  destroy(id){
    return this._author.delete('/destroyme/'+id)
  }
  findme(id){
    return this._author.get('/author/' + id)
  }
  edit(id , data){
    return this._author.put('/author/'+id, data);
  }
  addquote(id,data){
    return this._author.post('/author/quote/'+id, data)
  }
  destroyquote(id, data){
    return this._author.post('/author/quote/destroy/'+id, {thing:data})
  }
  incquotevote(id, data, num){
    return this._author.post('/author/quote/upvote/'+id,{qid:data,num:num})
  }
}
