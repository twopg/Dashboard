import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PayService {
  constructor(private http: HttpClient) {}

  payURL(plan: number) {
    const key = localStorage.getItem('key');
    return `${environment.endpoint}/pay?key=${key}&plan=${plan}`;
  }
}
