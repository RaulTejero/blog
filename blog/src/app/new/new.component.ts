import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { title } from 'process';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
form:FormGroup;

  constructor(private postService: PostService) { 
    this.form = new FormGroup(
      {
        category: new FormControl(),
        title: new FormControl(),
        author: new FormControl('',[]),
        img: new FormControl(),
        text: new FormControl(),
      }
    
    )

  }

  ngOnInit(): void {
  }

}
