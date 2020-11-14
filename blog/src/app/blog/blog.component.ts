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
  changeSelect: string;
  valueSelect: string;
  arrayCategory: string[];

  constructor(private postService: PostService) {
    this.arrayCategory = postService.categories;
  }

  async ngOnInit() {

    try {
      this.posts = await this.postService.getAllPost();
    } catch (error) {
      console.log(error);
    }
  }

  change(event: any) {
    this.valueSelect = event.target.value;
    this.postService.getPostByCategory(this.valueSelect)
      .then(arrFilter => {
        this.posts = arrFilter
      })
      .catch(error => console.log(error));
  }
  idOnClick(pIdPost) {
    this.postService.idPostSelect = pIdPost;
    
  }

}
