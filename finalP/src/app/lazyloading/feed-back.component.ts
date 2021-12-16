import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styles: [],
})
export class FeedBackComponent implements OnInit {
  myform: FormGroup;
  count: number = 0;
  constructor(private formBuilder: FormBuilder) {
    this.myform = this.formBuilder.group({
      fullname: ['', [Validators.required, this.fullnameFunction]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(6)]],
    });
    console.log(this.myform);
  }

  ngOnInit(): void {}

  get countMessage() {
    this.count = this.myform.get('message')?.value.length;
    if (this.count <= 10) {
      return true;
    } else {
      return false;
    }
  }

  fullnameFunction(control: FormControl): { [s: string]: boolean } {
    //@ts-ignore
    let x = control.value.indexOf(' ');
    let y;
    if (x !== -1) {
      //@ts-ignore
      y = control.value.charAt(x + 1) ? x : null;
    }
    //@ts-ignore
    let leng = control.value;
    console.log('xxxxx', x, 'yyyyyyyyyyyy', y);
    if (x !== -1 && y !== null) {
      //@ts-ignore
      return null;
    }
    return { s: true };
  }

  submitfun() {
    console.log(this.myform.value);
  }
}
