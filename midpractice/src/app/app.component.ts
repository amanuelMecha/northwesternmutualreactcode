import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   
    <!-- <app-kasahun></app-kasahun> -->
    <!-- <abc></abc> -->
    <div>
      <div>
        <div>
          <hr />
          <a [routerLink]="['']">Home</a>|
          <a [routerLink]="['user']">user</a>
          <hr />
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mulepractice';
}
