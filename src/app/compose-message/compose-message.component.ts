import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-compose-message',
    templateUrl: './compose-message.component.html',
    styleUrls: ['./compose-message.component.css'],
})
export class ComposeMessageComponent {
    public details: string;
    public message: string;
    public sending = false;

    constructor(private router: Router) {}

    public cancel(): void {
        this.closePopup();
    }

    private closePopup(): void {
        this.router.navigate([{ outlets: { popup: null } }]);
    }

    public send(): void {
        this.sending = true;
        this.details = 'Sending Message...';

        setTimeout(() => {
            this.sending = false;
            this.closePopup();
        }, 1000);
    }
}
