import { CRISES } from './mock-crises';
import { Crisis } from './crisis';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { MessageService } from '../message.service';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CrisisService {
    constructor(private messageService: MessageService) {}

    public getCrises(): Observable<Crisis[]> {
        this.messageService.add('CrisisService: fetched crises');
        return of(CRISES);
    }

    public getCrisis(id: number | string): Observable<Crisis> {
        return this.getCrises().pipe(
            map((crises: Crisis[]) => crises.find(crisis => crisis.id === +id)),
        );
    }
}
