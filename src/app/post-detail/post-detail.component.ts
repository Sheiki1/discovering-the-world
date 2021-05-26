import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostsService } from './../core/services/posts/posts.service';
import { Post } from '../core/model/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  post: Post[] = [];

  constructor(
    private route: ActivatedRoute,
    private postsService : PostsService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>{
      const id = params.id;
      console.log(typeof(id))
     // this.post = this.postsService.getPost(id)
      
     // console.log(post)
      console.log(id);
    });
  }

}



