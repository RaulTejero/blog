import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  targetsOfBlog: Post[];

  constructor() { 
   
  }
  addPost(): Promise<Post> {
    return 
  };
  
}
