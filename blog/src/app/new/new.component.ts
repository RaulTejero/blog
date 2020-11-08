import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../interfaces/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  form: FormGroup;
  // categories: string[];
  date: Date;
  newPost: Post;
  arrayCategory: string[];

  constructor(private postService: PostService) {

    this.arrayCategory = postService.categories;

    this.form = new FormGroup(
      {
        category: new FormControl('', Validators.required),
        title: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(1)]),
        author: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(1)]),
        img: new FormControl(''),
        text: new FormControl('', [Validators.maxLength(400)]),
      }
    )

    setInterval(() => {
      this.date = new Date;
    }, 1000);
  }
  ngOnInit(): void {
  }
  async onSubmit() {
    this.newPost = this.form.value;
    this.newPost.date = this.date
    console.log(this.newPost);
    await this.postService.addPost(this.newPost);
    this.form.reset();
  }
}
