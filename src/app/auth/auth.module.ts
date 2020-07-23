import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ManageCrisesComponent } from '../admin/manage-crises/manage-crises.component';
import { ManageHeroesComponent } from '../admin/manage-heroes/manage-heroes.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule, FormsModule, AuthRoutingModule],
    declarations: [LoginComponent, ManageCrisesComponent, ManageHeroesComponent],
})
export class AuthModule {}
