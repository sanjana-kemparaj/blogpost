import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css',
})
export class BlogListComponent {
  ngOnInit(): void {
    console.log('BlogListComponent loaded');
  }
  blogs = [
    { title: 'Blog Post 1', content: 'Content of the first blog post.' },
    { title: 'Blog Post 2', content: 'Content of the second blog post.' },
    // Add more blogs as needed
  ];
}
