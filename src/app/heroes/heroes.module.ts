import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [HeroDetailComponent, HeroListComponent],
    imports: [CommonModule, FormsModule, HeroesRoutingModule],
})
export class HeroesModule {}
