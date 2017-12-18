import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './post/post.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'feed',
    component: FeedComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
