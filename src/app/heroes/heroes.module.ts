import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroListComponent } from './hero-list/hero-list.component';

@NgModule({
    declarations: [HeroDetailComponent, HeroListComponent],
    imports: [CommonModule, FormsModule, HeroesRoutingModule],
})
export class HeroesModule {}
