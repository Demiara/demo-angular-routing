import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SelectivePreloadingStrategyService } from '../../selective-preloading-strategy.service';

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
    public modules: string[];
    public sessionId: Observable<string>;
    public token: Observable<string>;

    constructor(
        private route: ActivatedRoute,
        preloadStrategy: SelectivePreloadingStrategyService,
    ) {
        this.modules = preloadStrategy.preloadedModules;
    }

    public ngOnInit(): void {
        this.sessionId = this.route.queryParamMap.pipe(
            map(params => params.get('session_id') || 'None'),
        );

        this.token = this.route.fragment.pipe(map(fragment => fragment || 'None'));
    }
}
