import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  form: FormGroup;
  categories: string[];

  constructor(private postService: PostService) {
    this.categories = [
      'moda', 'deporte', 'ocio', 'actualidad', 'tecnologia', 'familiar',
    ]
    this.form = new FormGroup(
      {
        category: new FormControl('',Validators.required),
        title: new FormControl('', [Validators.required, Validators.maxLength(30),Validators.minLength(1)]),
        author: new FormControl('', [Validators.required, Validators.maxLength(30),Validators.minLength(1)]),
        img: new FormControl(''),
        text: new FormControl('',[ Validators.maxLength(400)]),
      }
    )
  }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.form.value);
    this.form.reset();
  }

}
