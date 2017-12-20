import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './post/post.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
