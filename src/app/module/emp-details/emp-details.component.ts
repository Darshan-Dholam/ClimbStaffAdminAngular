import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.scss'],

})
export class EmpDetailsComponent implements OnInit {

  lat: string;
  lng: string;
  name: string;
  weekDistance: string;
  designation: string;
  geohash: string;
  address: string;
  city: string;
  state: string;
  status: string;
  todaysDistance: string;
  lastActive: string;
  battery: string;
  signalStrength: string;
  signalAccuracy: string;
  zoom: number;
  numberOfUnreadAlerts = 1 ;
  id = this.activatedRoute.snapshot.params.empid;

  public employee = [];
  error = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
  ) { }

  ngOnInit() {
    this.bindData();
  }

  bindData() {
    this.employeeService.getEmployeeDetail(this.id)
        .subscribe (data => {
          this.employee = data['data'][0];
          this.lat = this.employee['position'].lat;
          this.lng = this.employee['position'].lng;
          this.name = this.employee['name'];
          this.weekDistance = this.employee['week_distance'];

          this.designation = this.employee['designation'];
          this.city = this.employee['city_name'];
          this.state = this.employee['state_name'];
          this.status = this.employee['status'];
          this.todaysDistance = this.employee['todays_distance'];
          this.lastActive = this.employee['packet_time'];
          this.battery = this.employee['battery'];
          this.signalStrength = this.employee['signal_strength'];
          this.signalAccuracy = this.employee['accuracy'];
          this.geohash = this.employee['geohash'];

          this.zoom = 15;
        },
        error => {
          console.log(this.error);
        });
  }

  bindAddress(address)
  {
    this.employeeService.getAddress(address.address)
        .subscribe (data1 => {
            this.numberOfUnreadAlerts = 0;
            this.address = data1['formatted_address'];
        },
        error => {
          console.log(this.error);
        });

  }

}
