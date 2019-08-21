import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CashondeliveryService {

  constructor(private http: HttpClient) { }

  storeCustAddress(custoumerdata) {
    return this.http.post('http://localhost:3019/api/addCustomerData', custoumerdata);
  }
}
