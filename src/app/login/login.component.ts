import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authError: boolean = false;
  authErrorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(creds) {
    this.authError = false;
    this.authService.login(creds)
      .then(result => {
        console.log(result);
        this.router.navigate(['/'])
      })
      .catch(error => {
        this.authError = true;
        this.authErrorMessage = error.message
      });
  }

}
