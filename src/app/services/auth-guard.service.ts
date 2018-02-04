import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) { }

  canActivate() {
    return this.authService.getCurrentUser()
      .map(user => {
        if (user) return true;

        this.router.navigate(['/login']);
        return false;
      })
  }

}
