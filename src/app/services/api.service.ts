import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  endpoint = environment.endpoint;

  get key() { return localStorage.getItem('key'); }

  constructor(private http: HttpClient) {}

  getStats(): Promise<any> {
    return this.http.get(`${this.endpoint}/stats?key=${this.key}`).toPromise();
  }

  async sendFeedback(message: string) {
    return this.http.post(`${this.endpoint}/feedback`, { message }).toPromise();
  }
}
