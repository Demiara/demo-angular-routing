import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Crisis } from '../crisis';
import { DialogService } from '../../dialog.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-crisis-detail',
    templateUrl: './crisis-detail.component.html',
    styleUrls: ['./crisis-detail.component.css'],
})
export class CrisisDetailComponent implements OnInit {
    public crisis: Crisis;
    public editName: string;

    constructor(
        public dialogService: DialogService,
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    public ngOnInit(): void {
        this.route.data.subscribe((data: { crisis: Crisis }) => {
            this.editName = data.crisis.name;
            this.crisis = data.crisis;
        });
    }

    public cancel(): void {
        this.gotoCrises();
    }

    public save(): void {
        this.crisis.name = this.editName;
        this.gotoCrises();
    }

    private gotoCrises(): void {
        const crisisId = this.crisis ? this.crisis.id : null;
        this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
    }

    private canDeactivate(): Observable<boolean> | boolean {
        if (!this.crisis || this.crisis.name === this.editName) {
            return true;
        }
        return this.dialogService.confirm('Discard changes?');
    }
}
