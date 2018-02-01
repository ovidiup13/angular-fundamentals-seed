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
            <passenger-detail></passenger-detail>
            <ul>
                <li *ngFor="let passenger of passengers; let i = index">
                <span class="status"
                [ngClass]="{'checked-in': passenger.checkedIn}"
                ></span>
                {{ i }}: {{passenger.fullname}}
                <div class="date">
                    Check in date: {{passenger.checkedInDate ? ( passenger.checkedInDate | date: 'yMMMMd' | uppercase) : 'Not checked in'  }}
                </div>
                <div class="children">
                    Children: {{passenger.children?.length || 0}}
                </div>
                </li>
            </ul>
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
}