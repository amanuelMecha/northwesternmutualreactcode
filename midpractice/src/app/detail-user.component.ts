import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MuleServiceService } from './mule-service.service';

@Component({
  selector: 'app-detail-user',
  template: `
    <p>detail-user works!</p>
    <ul *ngFor="let x of output">
      <div>
        <li appMyDirective>{{ x.title }}</li>
      </div>

      {{
        email
      }}
    </ul>
  `,
  styles: [],
})
export class DetailUserComponent implements OnInit {
  output: any;
  email: any;
  phone: any;
  constructor(
    private s: ActivatedRoute,
    private r: MuleServiceService,
    private y: Router
  ) {}

  ngOnInit(): void {
    this.s.queryParamMap.subscribe((val) => {
      let id = val.get('userId');
      console.log('querry', typeof val.get('userId'));

      this.r.getPosts(id).subscribe((value) => {
        this.output = value;
        console.log('post in detail comp', value);
      });
    });
    let i = this.y.getCurrentNavigation()?.extras.state;
    console.log('emaillllll', i);
    // this.email= i.email;
  }
}
