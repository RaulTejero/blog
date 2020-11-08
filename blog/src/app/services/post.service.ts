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
       title: 'Titulo 1 de prueba',
       text: 'Texto de prueba del post',
       author: 'Autor',
       img: 'https://images.pexels.com/photos/5418319/pexels-photo-5418319.jpeg?cs=srgb&dl=pexels-evie-shaffer-5418319.jpg&fm=jpg',
       date: "12 mier",
       category: 'fotografia'
     },
     {
      title: 'Titulo 2 de prueba',
      text: 'Texto de prueba del post',
      author: 'Autor',
      img: 'https://images.pexels.com/photos/5418319/pexels-photo-5418319.jpeg?cs=srgb&dl=pexels-evie-shaffer-5418319.jpg&fm=jpg',
      date: "12 mier",
      category: 'desine'
    },
    {
      title: 'Titulo 3 de prueba',
      text: 'Texto de prueba del post',
      author: 'Autor',
      img: 'https://images.pexels.com/photos/5418319/pexels-photo-5418319.jpeg?cs=srgb&dl=pexels-evie-shaffer-5418319.jpg&fm=jpg',
      date: "12 mier",
      category: 'desine'
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
  getPostByCategory(pCategory:string): Promise<Post[]> {
    return new Promise<Post[]>((resolve, reject) => {
      let arrFilter = [];
      console.log(pCategory);  
      for (const post of this.postsOfBlog) {
        if (post.category === pCategory) {
          arrFilter.push(post);
          resolve (arrFilter);
        } else if (pCategory === 'all') {
          resolve(this.postsOfBlog)
          
        }
      }
     })
  }

}

