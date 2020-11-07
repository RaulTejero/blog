import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) { }

  async ngOnInit() {
    
    try {
      this.posts = await this.postService.getAllPost();
      console.log(this.posts); 
    } catch (error) {
      console.log(error); 
    }
  }
  

}
