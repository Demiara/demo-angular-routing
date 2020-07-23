import { AuthService } from '../auth.service';
import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    public message: string;

    constructor(public authService: AuthService, public router: Router) {
        this.setMessage();
    }

    private setMessage(): void {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }

    public login(): void {
        this.message = 'Trying to log in ...';

        this.authService.login().subscribe(() => {
            this.setMessage();
            if (this.authService.isLoggedIn) {
                const redirectUrl = this.authService.redirectUrl;

                let navigationExtras: NavigationExtras = {
                    queryParamsHandling: 'preserve',
                    preserveFragment: true,
                };

                this.router.navigate([redirectUrl], navigationExtras);
            }
        });
    }

    public logout(): void {
        this.authService.logout();
        this.setMessage();
    }
}
