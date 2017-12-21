import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './post/post.component';
import { MusicPostComponent } from './music-post/music-post.component';
import { MoviePostComponent } from './movie-post/movie-post.component';
import { ImagePostComponent } from './image-post/image-post.component';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './auth-guard.service';
import { AuthenticationService } from './authentication.service';
import { SearchComponent } from './search/search.component';

import { ReversePipe } from './reverse.pipe';

import { SignUpComponent } from './sign-up/sign-up.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { ChatComponent } from './chat/chat.component';
import { TimestampPipe } from './timestamp.pipe';



export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FeedComponent,
    PostComponent,
    MusicPostComponent,
    MoviePostComponent,
    ImagePostComponent,
    WelcomeComponent,
    SearchComponent,
    ReversePipe,
    SignUpComponent,
    SearchMovieComponent,
    ChatComponent,
    TimestampPipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    InfiniteScrollModule
  ],
  providers: [AuthGuard, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
