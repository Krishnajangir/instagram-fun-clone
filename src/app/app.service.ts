import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface instagram {
  image: string;
  likes: number;
  timestamp: string;
};

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getInstaData(): Observable<instagram[]> {
     return this.http.get<instagram[]>('https://s3-ap-southeast-1.amazonaws.com/he-public-data/instaf913f18.json');
  }
}
