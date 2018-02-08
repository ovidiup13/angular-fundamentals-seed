import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";
import { OnChanges } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
  selector: "passenger-detail",
  styleUrls: ["passenger-detail.component.scss"],
  template: `
      <div>
        <span class="status" [ngClass]="{'checked-in': detail.checkedIn}"></span>
        <div *ngIf="editing">
          <input type="text" [value]="detail.fullname" (input)="onNameChange(name.value)" #name>
        </div>
        <div *ngIf="!editing">
          {{detail.fullname}}
        </div>
        <div class="date">
            Check in date: {{detail.checkedInDate ? ( detail.checkedInDate | date: 'yMMMMd' | uppercase) : 'Not checked in'  }}
        </div>
      </div>
      <button (click)="toggleEdit()">{{editing ? 'Done' : 'Edit'}}</button>
      <button (click)="onRemove()">Remove</button>
    `
})
export class PassengerDetailComponent implements OnChanges {
  @Input() detail: Passenger;

  @Output() remove: EventEmitter<Passenger> = new EventEmitter();

  @Output() edit: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;

  constructor() {}

  ngOnChanges(changes): void {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

  onNameChange(value: string) {
    this.detail.fullname = value;
  }

  toggleEdit() {
    // update parent on 'Done'
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }
}
