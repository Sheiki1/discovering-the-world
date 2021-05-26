import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../core/services/posts/posts.service';
import { Posts } from '../../../core/model/posts.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Posts[] = [];

  constructor(
   // private route: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit() {
    /*this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchPosts(id);
    });*/
    this.fetchPosts();
  }
  
  fetchPosts(){
    this.postsService.getAllPosts()
    .subscribe(posts => {
      
      this.posts = posts;
      console.log(posts)
    })
    
    };
    /*createPost() {
      const newPost: Posts = {

        title: 'nuevo desde angular',
        category: 'travel',
        image: 'assets/images/banner-1.jpg',
        description: 'nuevo posts',
      };
      this.postsService.createPost(newPost)
      .subscribe(post => {
        console.log(post);
      });
    }*/
}
