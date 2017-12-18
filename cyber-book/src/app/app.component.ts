import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent {
  private isLoggedIn: Boolean;
  private userName: String;


  // constructor(public authService: AuthenticationService) {
  //   this.authService.user.subscribe(user =>  {
  //     if (user == null) {
  //       this.isLoggedIn = false;
  //       this.router.navigate(['public']);
  //     } else {
  //       this.isLoggedIn = true;
  //       this.userName = user.displayName;
  //       this.router.navigate([]);
  //     }
  //   });
  // }

  constructor(public authService: AuthenticationService) {
    this.authService.user.subscribe(user =>  {
      console.log(user);
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

}
