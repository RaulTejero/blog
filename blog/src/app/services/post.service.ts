import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  postsOfBlog: Post[];
  categories: string[];
  id: number;
  idPostSelect: number;
  text: string;
  dateDeFault: Date;

  constructor() {
    this.dateDeFault= new Date;
    this.id = 7;
    this.categories = ['moda', 'deporte', 'ocio', 'actualidad', 'tecnologia', 'familiar'];
    this.text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, ad neque debitis sint, maxime ipsa necessitatibus velit iste nesciunt voluptas perferendis. Corporis, magni nihil. Eum maxime tenetur asperiores dignissimos similique? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, ad neque \n debitis sint, maxime ipsa necessitatibus velit iste nesciunt voluptas perferendis. Corporis, magni nihil.\n Eum maxime tenetur Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, ad neque  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, ad neque debitis sint, maxime ipsa necessitatibus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, ad neque debitis sint, maxime ipsa necessitatibus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, ad neque debitis sint, maxime ipsa necessitatibusdebitis sint, maxime ipsa necessitatibus asperiores dignissimos similique?'
    this.postsOfBlog = [
      {
        id: 1,
        title: 'Titulo principal',
        text: this.text,
        author: 'Carlos Soprano',
        img: 'https://images.pexels.com/photos/5418319/pexels-photo-5418319.jpeg?cs=srgb&dl=pexels-evie-shaffer-5418319.jpg&fm=jpg',
        date: this.dateDeFault,
        category: 'moda'
      },
      {
        id: 2,
        title: 'Titulo principal',
        text: this.text,
        author: 'Estela Perz Jota',
        date: this.dateDeFault,
        img: 'https://images.pexels.com/photos/342521/pexels-photo-342521.jpeg',
        category: 'ocio'
      },
      {
        id: 3,
        date: this.dateDeFault,
        title: 'Titulo principal',
        text: this.text,
        author: 'Gutierrez Fernandez',
        img: 'https://images.pexels.com/photos/4348638/pexels-photo-4348638.jpeg',
        category: 'deporte'
      },
      {
        id: 4,
        date: this.dateDeFault,
        title: 'Titulo principal',
        text: this.text,
        author: 'Carolina Ayuso',
        img: 'https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg',
        category: 'tecnologia'
      },
      {
        id: 5,
        title: 'Titulo principal',
        text: this.text,
        date: this.dateDeFault,
        author: 'Juan Suarez',
        img: 'https://images.pexels.com/photos/1257099/pexels-photo-1257099.jpeg',
        category: 'familiar'
      },
      {
        id: 6,
        title: 'Titulo principal',
        text: this.text,
        date: this.dateDeFault,
        author: 'Perez Galdos',
        img: 'https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg',
        category: 'actualidad'
      }
    ];
  };
  getAddPost(pPost: Post): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      pPost.id = this.id;
      this.postsOfBlog.push(pPost);
      this.id++;
      // console.log(pPost);
      // console.log(this.postsOfBlog);
      resolve(this.postsOfBlog);
    });
  };

  getAllPost(): Promise<Post[]> {
    return new Promise<Post[]>((resolve, reject) => {
      resolve(this.postsOfBlog);
    });
  };
  getPostByCategory(pCategory: string): Promise<Post[]> {
    return new Promise<Post[]>((resolve, reject) => {
      let arrFilter = [];
      for (const post of this.postsOfBlog) {
        if (post.category === pCategory) {
          arrFilter.push(post);
          resolve(arrFilter);
        } else if (pCategory === 'all') {
          resolve(this.postsOfBlog)
        };
      };
    });
  };
  getPost(pId): Promise<Post[]> {
    return new Promise<Post[]>((resolve, reject) => {
      let result = this.postsOfBlog.filter(el => el.id == pId);
      resolve(result);
    });
  }
}

