// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Import your routes
import { AddBlogComponent } from './Pages/add-blog/add-blog.component';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)], // Provide the routes
});

bootstrapApplication(AddBlogComponent);
