import { CommonModule } from '@angular/common';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule, FormsModule, CrisisCenterRoutingModule],
    declarations: [CrisisCenterComponent],
})
export class CrisisCenterModule {}
