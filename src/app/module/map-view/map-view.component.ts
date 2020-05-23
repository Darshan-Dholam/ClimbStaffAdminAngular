import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {

  lat: string;
  lng: string;
  zoom: number;
  user = JSON.parse(localStorage.getItem('currentUser'));

  name: string;
  designation: string;
  mobile: string;
  lastActive: string;
  battery: string;
  address: string;

  public employees = [];
  public employee = [];
  error = '';

  div_employeeinfo = false;
  div_default = true;

  constructor(
    private employeeService: EmployeeService,

  ) { }

  ngOnInit(): void {
    this.bindData();
  }

  bindData() {
    this.employeeService.getEmployees(this.user.cid)
        .subscribe (data => {
          this.employees = data['data'];
          this.lat = this.employees[0]['position'].lat;
          this.lng = this.employees[0]['position'].lng;
          this.zoom = 5;
        },
        error => {
          console.log(this.error);
        });
  }


  bindEmployeeInfo(id) {
    this.employeeService.getEmployeeDetail(id.id)
    .subscribe (data => {
      this.employee = data['data'][0];
      this.name = this.employee['name'];
      this.designation = this.employee['designation'];
      this.mobile = this.employee['mobile'];
      this.lastActive = this.employee['packet_time'];
      this.battery = this.employee['battery'];
      this.employeeService.getAddress(this.employee['geohash'])
        .subscribe (data1 => {
             this.address = data1['formatted_address'];

        },
        error => {
          console.log(this.error);
        });
      this.div_employeeinfo = true;
      this.div_default = false;
    },
    error => {
      console.log(this.error);
    });
  }

}
