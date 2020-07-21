import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { MessageService } from '../message.service';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HeroService {
    constructor(private messageService: MessageService) {}

    public getHero(id: number | string): Observable<Hero> {
        return this.getHeroes().pipe(map((heroes: Hero[]) => heroes.find(hero => hero.id === +id)));
    }

    public getHeroes(): Observable<Hero[]> {
        this.messageService.add('HeroService: fetched heroes');
        return of(HEROES);
    }
}
