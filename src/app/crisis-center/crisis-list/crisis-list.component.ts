import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-crisis-list',
    templateUrl: './crisis-list.component.html',
    styleUrls: ['./crisis-list.component.css'],
})
export class CrisisListComponent implements OnInit {
    public crises$: Observable<Crisis[]>;
    public selectedId: number;

    constructor(private route: ActivatedRoute, private service: CrisisService) {}

    public ngOnInit(): void {
        this.crises$ = this.route.paramMap.pipe(
            switchMap(params => {
                this.selectedId = +params.get('id');
                return this.service.getCrises();
            }),
        );
    }
}
