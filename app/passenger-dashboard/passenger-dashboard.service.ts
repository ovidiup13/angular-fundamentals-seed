import { Passenger } from "./models/passenger.interface";

export class PassengerDashboardService {
  constructor() {}

  getPassengers(): Passenger[] {
    return [
      {
        id: 1,
        fullname: "Ovidiu",
        checkedIn: true,
        checkedInDate: 1490742000000,
        children: null
      },
      {
        id: 2,
        fullname: "Claudiu",
        checkedIn: false,
        checkedInDate: null,
        children: []
      }
    ];
  }
}
