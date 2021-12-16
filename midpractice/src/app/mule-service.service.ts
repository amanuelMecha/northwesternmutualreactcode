import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MuleServiceService {
  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getPosts(userId: any) {
    console.log('getsssssssssss',userId)
  return  this.http.get(
      `https://jsonplaceholder.typicode.com/posts/?userId=${userId}`
    );
  }
}
