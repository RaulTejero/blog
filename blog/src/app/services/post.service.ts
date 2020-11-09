import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  postsOfBlog: Post[];
  categories: string[];

  constructor() {
    
    this.categories = [ 'moda', 'deporte', 'ocio', 'actualidad', 'tecnologia', 'familiar'];

    this.postsOfBlog = [
      {
        title: 'Titulo 1 de prueba',
        text: 'Texto de prueba del post',
        author: 'Autor',
        img: 'https://images.pexels.com/photos/5418319/pexels-photo-5418319.jpeg?cs=srgb&dl=pexels-evie-shaffer-5418319.jpg&fm=jpg',
        date: 'Sun Nov 08 2020 23:42:34 GMT+0100 (hora estándar de Europa central)',
        category: 'moda'
      },
      {
        title: 'Titulo 2 de prueba',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, soluta excepturi! Suscipit, aperiam assumenda in debitrit.',
        author: 'Autor',
        img: 'https://images.pexels.com/photos/342521/pexels-photo-342521.jpeg',
        date:  "2020-11-08T22:53:28.393Z",
        category: 'ocio'
      },
      {
        title: 'Titulo 3 de prueba',
        text: 'Texto de prueba del post',
        author: 'Autor',
        img: 'https://images.pexels.com/photos/4348638/pexels-photo-4348638.jpeg',
        date:"Sun Nov 08 2020 23:42:34 GMT+0100 (hora estándar de Europa central)",
        category: 'deporte'
      },
      {
        title: 'Titulo 4 de prueba',
        text: 'Texto de prueba del post',
        author: 'Autor',
        img: 'https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg',
        date:"Sun Nov 08 2020 23:42:34 GMT+0100 (hora estándar de Europa central)",
        category: 'tecnologia'
      },
      {
        title: 'Titulo 5 de prueba',
        text: 'Texto de prueba del post',
        author: 'Autor',
        img: 'https://images.pexels.com/photos/1257099/pexels-photo-1257099.jpeg',
        date:"Sun Nov 08 2020 23:42:34 GMT+0100 (hora estándar de Europa central)",
        category: 'familiar'
      },
      {
        title: 'Titulo 6 de prueba',
        text: 'Texto de prueba del post',
        author: 'Autor',
        img: 'https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg',
        date:"Sun Nov 08 2020 23:42:34 GMT+0100 (hora estándar de Europa central)",
        category: 'actualidad'
      }
    ];
  }
  addPost(pPost: Post): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      this.postsOfBlog.push(pPost);
      // console.log(pPost);
      // console.log(this.postsOfBlog);
      resolve(this.postsOfBlog);
    });
  };

  getAllPost(): Promise<Post[]> {
    return new Promise<Post[]>((resolve, reject) => {
      resolve(this.postsOfBlog);
    })
  };
  getPostByCategory(pCategory: string): Promise<Post[]> {
    return new Promise<Post[]>((resolve, reject) => {
      let arrFilter = [];
      // console.log(pCategory);
      for (const post of this.postsOfBlog) {
        if (post.category === pCategory) {
          arrFilter.push(post);
          resolve(arrFilter);
        } else if (pCategory === 'all') {
          resolve(this.postsOfBlog)

        }
      }
    })
  }

}

