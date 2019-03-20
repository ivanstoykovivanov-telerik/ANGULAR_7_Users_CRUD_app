import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Input() currentPost: Post; 
  @Input() isEdit: boolean; 
  @Output() newPost: EventEmitter<Post> = new EventEmitter(); 
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter(); 
  
  constructor( private postService: PostService) { }

  ngOnInit() {
  }
  
  addPost(title, body){
    if(!title || !body){
      console.log("Please, add body !");
    }else{
      this.postService.savePost({title, body} as Post).subscribe(
        post =>{
          console.log(post);
          this.newPost.emit(post); 
      })
    }
    // No event.preventDefault beacause the event is on the button not on the form 
  }

  editPost(){
    this.postService.updatePost(this.currentPost).subscribe(post => {
      console.log(post);
      this.isEdit = false; 
      this.updatedPost.emit(post); 
    }) ; 
  }

}
