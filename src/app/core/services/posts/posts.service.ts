import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../../model/posts.model';
import { Post } from '../../model/post.model';
import { from } from 'rxjs';

import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})

export class PostsService {
  posts: Posts[] = [];
  post: Post[] = [];

  constructor(private http: HttpClient) {}

  getAllPosts() {
    return this.http.get<Posts[]>(`${environment.url_api}`);
  }

  getAllTravel() {
    return this.http.get<Posts[]>(`${environment.url_api}`);
  }

  getPost(id: any){

    return this.http.get(`${environment.url_api}${id}`);
    
  }

  createPost(post: Post) {
    return this.http.post(environment.url_api, post);
  }
}

