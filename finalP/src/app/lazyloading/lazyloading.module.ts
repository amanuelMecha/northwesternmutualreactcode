import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedBackComponent } from './feed-back.component';
import { RouterModule } from '@angular/router';
import { combineLatest } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { SignoutComponent } from './signout.component';

@NgModule({
  declarations: [FeedBackComponent, SignoutComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'c', component: FeedBackComponent },
      { path: 'signout', component: SignoutComponent },
    ]),
  ],
})
export class LazyloadingModule {}
