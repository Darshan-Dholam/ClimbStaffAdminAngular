import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'attendanceReportFilter'
})
export class AttendanceReportPipe implements PipeTransform {

  transform(reports: any[], employeeSearch: string): any[] {
    if (!reports || !employeeSearch) {
        return reports;
    }

    return reports.filter( report => report[0].toLowerCase().indexOf(employeeSearch.toLowerCase()) !== -1);
  }

}
