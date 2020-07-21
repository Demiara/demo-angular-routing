import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'crisis-center',
        loadChildren: () =>
            import('./crisis-center/crisis-center.module').then(m => m.CrisisCenterModule),
        data: { preload: true },
    },
    { path: '', redirectTo: '/superheroes', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
