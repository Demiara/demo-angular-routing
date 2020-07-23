import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    CanLoad,
    NavigationExtras,
    Route,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(private authService: AuthService, private router: Router) {}

    public canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const url: string = state.url;
        return this.checkLogin(url);
    }

    private checkLogin(url: string): boolean {
        if (this.authService.isLoggedIn) {
            return true;
        }
        this.authService.redirectUrl = url;
        let sessionId = 123456789;

        let navigationExtras: NavigationExtras = {
            queryParams: { session_id: sessionId },
            fragment: 'anchor',
        };
        this.router.navigate(['/login'], navigationExtras);
        return false;
    }

    public canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.canActivate(route, state);
    }

    public canLoad(route: Route): boolean {
        const url = `/${route.path}`;
        return this.checkLogin(url);
    }
}
