import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { FormsModule } from '@angular/forms';
import { HeroesModule } from './heroes/heroes.module';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Router } from '@angular/router';

@NgModule({
    declarations: [AppComponent, ComposeMessageComponent, PageNotFoundComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HeroesModule,
        AuthModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
    // Diagnostic only: inspect router configuration
    constructor(router: Router) {
        const replacer = (key, value) => (typeof value === 'function' ? value.name : value);
        console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
    }
}
