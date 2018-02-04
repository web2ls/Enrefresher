import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  get currentUser() {
    return this.authService.getCurrentUser();
    // const user = this.authService.getCurrentUser();
    // return user ? user.email : 'Login'
  }

  logout() {
    this.authService.logout()
      .then(result => this.router.navigate(['/login']))
      .catch(error => console.log(error));
  }

}
