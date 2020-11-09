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
  date: Date;
  newPost: Post;
  arrayCategory: string[];
  alertRequired: string;

  constructor(private postService: PostService) {

    this.arrayCategory = postService.categories;
    this.alertRequired = "El campo no puede estar vacio"

    this.form = new FormGroup(
      {
        category: new FormControl('', Validators.required),
        title: new FormControl('', [Validators.required, Validators.maxLength(30)]),
        author: new FormControl('', [Validators.required, Validators.maxLength(30)]),
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
