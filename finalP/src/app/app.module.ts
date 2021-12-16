import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin.component';

@NgModule({
  declarations: [AppComponent, SigninComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: SigninComponent },
      {
        path: 'c',
        loadChildren: () => {
          return import('./lazyloading/lazyloading.module').then((data) => {
            return data.LazyloadingModule;
          });
        },
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
