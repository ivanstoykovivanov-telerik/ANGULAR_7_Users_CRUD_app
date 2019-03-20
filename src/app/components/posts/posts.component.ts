import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[]; 
  
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts =>{
      this.posts = posts; 
    }); 
  }

}
