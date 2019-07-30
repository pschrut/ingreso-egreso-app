import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate, CanLoad {

  constructor(private router: Router, public authService: AuthService) { }

  canActivate() {
    return this.authService.isAuth();
  }

  canLoad() {
    return this.authService.isAuth()
      .pipe(
        take(1)
      );
  }
}
