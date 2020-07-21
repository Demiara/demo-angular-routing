import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
    public hero$: Observable<Hero>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: HeroService,
    ) {}

    public ngOnInit(): void {
        this.hero$ = this.route.paramMap.pipe(
            // tap((params: ParamMap) => console.log(params.has('id'))),
            switchMap((params: ParamMap) => this.service.getHero(params.get('id'))),
        );

        // let id = this.route.snapshot.paramMap.get('id');
        // this.hero$ = this.service.getHero(id);
        //
        // this.hero$ = this.route.queryParamMap.pipe(
        //     tap((params: ParamMap) =>
        //         console.log(
        //             //params.has('id')
        //             params.keys,
        //         ),
        //     ),
        //     switchMap((params: ParamMap) => this.service.getHero(params.get('id'))),
        // );
    }

    public gotoHeroes(hero: Hero): void {
        const heroId = hero ? hero.id : null;
        this.router.navigate(['/superheroes', { id: heroId, foo: 'foo' }]);
    }
}
