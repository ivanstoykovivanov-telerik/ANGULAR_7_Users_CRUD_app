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
  currentPost: Post = {
    id: 0 , 
    title: '',
    body: ''
  }; 
  isEdit: boolean ;  

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts =>{
      this.posts = posts; 
    }); 
  }

  onNewPost(post: Post){
    this.posts.unshift(post); 
  }

  onUpdatedPost(post: Post){
    this.posts.forEach((curr, index) => {
      if(post.id == curr.id){
        this.posts.splice(index, 1);
        this.posts.unshift(post);  
        this.isEdit = false; 
        this.currentPost = {
          id : 0, 
          title: '', 
          body: ''
        }
      }
    })
  }

  removePost(post: Post){
    if(confirm("Are you sure ? ")){
      this.postService.deletePost(post.id).subscribe(() => {
        this.posts.forEach((curr, index) => {
          if(post.id == curr.id){
            this.posts.splice(index, 1);
            this.isEdit = false; 
          };
        });    
      });     
    };
  }

  editPost(post : Post){
    this.currentPost = post; 
    this.isEdit = true; 
  }
}
