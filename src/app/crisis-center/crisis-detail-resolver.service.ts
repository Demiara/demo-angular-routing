import { Crisis } from './crisis';
import { CrisisService } from './crisis.service';
import { Injectable } from '@angular/core';
import { mergeMap, take } from 'rxjs/operators';
import { Observable, of, EMPTY } from 'rxjs';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class CrisisDetailResolverService implements Resolve<Crisis> {
    constructor(private cs: CrisisService, private router: Router) {}

    public resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<Crisis> | Observable<never> {
        const id = route.paramMap.get('id');

        return this.cs.getCrisis(id).pipe(
            take(1),
            mergeMap(crisis => {
                if (crisis) {
                    return of(crisis);
                } else {
                    this.router.navigate(['/crisis-center']);
                    return EMPTY;
                }
            }),
        );
    }
}
