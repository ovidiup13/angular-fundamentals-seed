import { Component } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: "passenger-dashboard",
    styleUrls: ["passenger-dashboard.component.scss"],
    template: `
        <div>
            <passenger-count
                [items]="passengers">
            </passenger-count>
            <passenger-detail
                *ngFor="let passenger of passengers;"
                [detail]="passenger"
                (edit)="handleEdit($event)"
                (remove)="handleRemove($event)">
            </passenger-detail>
        </div>
    `
})
export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];

    constructor() { }

    ngOnInit(): void {
        this.passengers = [
            {
                id: 1,
                fullname: "Ovidiu",
                checkedIn: true,
                checkedInDate: 1490742000000,
                children: null
            }, {
                id: 2,
                fullname: "Claudiu",
                checkedIn: false,
                checkedInDate: null,
                children: []
            }
        ];
    }

    handleEdit(event: any) {
        console.log(event);
    }

    handleRemove(event: any) {
        console.log(event);
    }
}