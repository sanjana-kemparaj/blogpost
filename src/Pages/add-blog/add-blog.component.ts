import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BlogServiceService } from '../../app/blog-service.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-add-blog',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './add-blog.component.html',
  styleUrl: './add-blog.component.css',
})
export class AddBlogComponent {
  blogHeader: string = '';
  blogImage: File | null = null;
  authorName: string = '';
  content: string = '';

  constructor(private blogService: BlogServiceService) {}

  onSubmit() {
    const newBlog = {
      header: this.blogHeader,
      image: this.blogImage,
      name: this.authorName,
      content: this.content,
    };

    this.blogService.addBlog(newBlog);
    this.clearForm();
  }

  clearForm() {
    this.blogHeader = '';
    this.blogImage = null;
    this.authorName = '';
    this.content = '';
  }
}
