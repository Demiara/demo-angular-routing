import { CommonModule } from '@angular/common';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule, FormsModule, CrisisCenterRoutingModule],
    declarations: [
        CrisisCenterComponent,
        CrisisCenterHomeComponent,
        CrisisDetailComponent,
        CrisisListComponent,
    ],
})
export class CrisisCenterModule {}
