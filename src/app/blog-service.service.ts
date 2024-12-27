import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogServiceService {
  private blogs: any[] = [];
  constructor() {}

  //Add a new blog
  addBlog(blog: any) {
    this.blogs.push(blog);
  }

  //Get teh blog list
  getBlogs() {
    return this.blogs;
  }
}
