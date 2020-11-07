import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsOfBlog: Post[];

  constructor() { 
   this.postsOfBlog = [
     {
       title: 'Titulo de prueba',
       text: 'Texto de prueba',
       author: 'Autor de prueba',
       img: 'url prueba',
       category: 'categoria'
     }
   ];
  }
  addPost(pPost:Post): Promise<Post[]>  {
    return new Promise((resolve, reject)=> {
      this.postsOfBlog.push(pPost);
      resolve(this.postsOfBlog);
    });
  };
  
  getAllPost(): Promise<Post[]> {
    return new Promise<Post[]>((resolve, reject)=> {
      resolve(this.postsOfBlog);
    })
  };
  getPostByCategory(pCategory): Promise<Post[]> {
    return new Promise<Post[]>((resolve, reject) => {
    resolve (this.postsOfBlog.filter(post=>post.category === pCategory));
    })
  }

}

