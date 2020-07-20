import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {HeroService} from '../hero.service';
import {switchMap, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero$: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) {}


  ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
      // tap((params: ParamMap) => console.log(params.has('id'))),
      switchMap((params: ParamMap) =>
        this.service.getHero(params.get('id'))),
    );

   /*
    let id = this.route.snapshot.paramMap.get('id');
    this.hero$ = this.service.getHero(id);
    */
   /*
    this.hero$ = this.route.queryParamMap.pipe(
      tap((params: ParamMap) => console.log(
        //params.has('id')
        params.keys
      )),
      switchMap((params: ParamMap) =>
        this.service.getHero(params.get('id'))),
    );
    */
  }

  gotoHeroes(hero: Hero) {
    let heroId = hero ? hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/superheroes', { id: heroId, foo: 'foo' }]);
  }
}
