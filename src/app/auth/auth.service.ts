import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public isLoggedIn = false;
    public redirectUrl: string;

    public login(): Observable<boolean> {
        return of(true).pipe(
            delay(1000),
            tap(() => (this.isLoggedIn = true)),
        );
    }

    public logout(): void {
        this.isLoggedIn = false;
    }
}
