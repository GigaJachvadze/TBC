import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { student } from 'src/model/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  url = 'https://localhost:44306/api/StudentClass';
  urlPut = this.url + "/Put"
  urlPost = this.url + "/Post"
  constructor( private http : HttpClient ) {  }

  put(student: student): void {
    // console.log(this.urlPut);
    this.http.put(this.urlPut, student).subscribe(a => {
      console.log(a);
      location.reload()
    });
  }

  modify(student: student): void {
    console.log(student);
    this.http.post(this.urlPost, student).subscribe(a => {
      console.log(a);
      location.reload()
    });
  }

  get(): Observable<any> {
    let r: Observable<any>;

    r = this.http.get(this.url);

    return r;
  }

  delete(student: student): void {
    this.http.delete(this.url + "/" + student.id).subscribe(data => {
      console.log(data);
      location.reload()
    });
  }
}
