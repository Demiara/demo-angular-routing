import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const crisisCenterRoutes: Routes = [
    {
        path: '',
        component: CrisisCenterComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(crisisCenterRoutes)],
    exports: [RouterModule],
})
export class CrisisCenterRoutingModule {}
