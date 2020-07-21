import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit {
    public heroes$: Observable<Hero[]>;
    public selectedId: number;

    constructor(private route: ActivatedRoute, private service: HeroService) {}

    public ngOnInit(): void {
        this.heroes$ = this.route.paramMap.pipe(
            switchMap(params => {
                this.selectedId = +params.get('id');
                return this.service.getHeroes();
            }),
        );
    }
}
