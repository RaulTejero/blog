import { Target } from '@angular/compiler';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  targetsOfBlog: Target[];

  constructor() { 
   
  }
}
