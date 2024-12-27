import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../Components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from '../Pages/blog-list/blog-list.component';
import { FooterComponent } from '../Components/footer/footer.component';
import { AddBlogComponent } from '../Pages/add-blog/add-blog.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    RouterLink,
    RouterLinkActive,
    BlogListComponent,
    FooterComponent,
    AddBlogComponent,
  ],
})
export class AppComponent {
  title = 'blog-frontend';
}
