import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { KasahunComponent } from './kasahun.component';
import { myRoutes } from './app.route';
import { DetailUserComponent } from './detail-user.component';
import { NewPipePipe } from './new-pipe.pipe';
import { MyDirectiveDirective } from './my-directive.directive';
import { TestComponent } from './test.component';

@NgModule({
  declarations: [AppComponent, UsersComponent, KasahunComponent, DetailUserComponent, NewPipePipe, MyDirectiveDirective, TestComponent],
  imports: [BrowserModule, HttpClientModule, myRoutes],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
