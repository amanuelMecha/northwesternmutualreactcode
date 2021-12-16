import { Component, OnInit } from '@angular/core';
import { MuleServiceService } from './mule-service.service';

@Component({
  selector: 'app-kasahun',
  template: `
    <p>kasahun works!</p>
    <ul *ngFor="let x of output">
      <li>
        <a
          [routerLink]="['/detaile']"
          [queryParams]="{ userId: x.id }"
          [state]="{ email: x.email }"
          >{{ x.id | currency }} {{ x.name }} {{ x.email }}
          {{ x.phone | newPipe: '1' }}</a
        >
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class KasahunComponent implements OnInit {
  output: any;
  constructor(private s: MuleServiceService) {
    console.log('ajajajjaja');
  }

  ngOnInit() {
    this.s.getUsers().subscribe((val) => {
      this.output = val;
      console.log('val', this.output);
    });
  }
}
