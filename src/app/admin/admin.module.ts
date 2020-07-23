import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [AdminDashboardComponent, AdminComponent],
    imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
