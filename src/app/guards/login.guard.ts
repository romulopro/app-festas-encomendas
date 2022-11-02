import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacaoService } from '../services/autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private authService: AutenticacaoService,
    private router: Router) { }
    
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve) => {
      this.authService.getAuth().onAuthStateChanged((user) => {
        if (user) {
          resolve(true)
        } else {
          this.router.navigate(['/login']);
          resolve(false);
        }
      });
    });
  }
}
