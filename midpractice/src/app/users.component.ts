import { Component, OnInit } from '@angular/core';
import { MuleServiceService } from './mule-service.service';

@Component({
  selector: 'abc',
  template: `
    <h1>users</h1>

    <button (click)="buttonFunction()"></button>
  `,

  styles: [],
})
export class UsersComponent {
  output: any;
  constructor(private s: MuleServiceService) {
    console.log('ajajajjaja');
  }

  // ngOnInit() {
  //   this.s.getUsers().subscribe((val) => {
  //     this.output = val;
  //     console.log('val', this.output);
  //   });
  // }
  buttonFunction() {
    //   this.s.getUsers().subscribe((val) => {
    //     this.output = val;
    //     console.log('val', this.output);
    //   });
  }
}
