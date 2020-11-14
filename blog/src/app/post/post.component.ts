import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

post: Post[];

  constructor(private postService: PostService ) { 
  }

  async ngOnInit() {

    try {
      this.post = await this.postService.getPost(1);
    } catch (error) {
      console.log(error);
    }
  }

}
