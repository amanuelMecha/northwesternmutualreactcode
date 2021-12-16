import { Router, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { DetailUserComponent } from "./detail-user.component";
import { KasahunComponent } from "./kasahun.component";
import { TestComponent } from "./test.component";

//@ts-ignore
const MY_ROUTES: Router = [
  { path: '', component: TestComponent },
  {
    path: 'user',
    component: KasahunComponent,
    // children: [{ path: 'detaile', component: DetailUserComponent }],
  },
    { path: 'detaile', component: DetailUserComponent },
];


//@ts-ignore
export const myRoutes = RouterModule.forRoot(MY_ROUTES);