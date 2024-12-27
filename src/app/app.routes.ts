// app.routes.ts
import { Routes } from '@angular/router';
import { AddBlogComponent } from '../Pages/add-blog/add-blog.component';
import { BlogDetailComponent } from '../Pages/blog-detail/blog-detail.component';
import { BlogListComponent } from '../Pages/blog-list/blog-list.component';
import { ContactComponent } from '../Pages/contact/contact.component';
import { HomeComponent } from '../Pages/home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'blog-list',
    component: BlogListComponent,
  },
  { path: 'blog/:id', component: BlogDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'add-blog', component: AddBlogComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/home' }, // Wildcard route for unknown paths
];
