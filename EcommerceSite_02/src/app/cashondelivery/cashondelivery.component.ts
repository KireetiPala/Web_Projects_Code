import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { StatesInfor } from '../utilities/states';
import { Cities } from '../utilities/cities';
import { CashondeliveryService } from './cashondelivery.service';

@Component({
  selector: 'app-cashondelivery',
  templateUrl: './cashondelivery.component.html',
  styleUrls: ['./cashondelivery.component.css']
})
export class CashondeliveryComponent implements OnInit {

  cashonDeliveryForm: FormGroup;
  States: Array<{ stateId: number, stateName: string }> = [];
  Cities: Array<{ cityId: number, stateId: number, cityName: string }> = [];
  Response;

  constructor(private fb: FormBuilder, private obj: CashondeliveryService) {
  }

  ngOnInit() {
    this.cashonDeliveryForm = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(20)
      ]),
      mobileNum: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[6-9]\d{9}$/)
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.maxLength(120)
      ]),
      landmark: new FormControl('', [
        Validators.required
      ]),
      state: new FormControl('', [
        Validators.required
      ]),
      city: new FormControl('', [
        Validators.required
      ]),
      pincode: new FormControl('', [
        Validators.required,
        Validators.pattern(/[0-9]{1,6}$/)
      ])
    })

    this.States = StatesInfor.states;
    this.Cities.push(Cities.cities[0]);
  }

  get name() {
    return this.cashonDeliveryForm.get('name');
  }
  get mobileNum() {
    return this.cashonDeliveryForm.get('mobileNum');
  }
  get address() {
    return this.cashonDeliveryForm.get('address');
  }
  get landmark() {
    return this.cashonDeliveryForm.get('landmark');
  }
  get state() {
    return this.cashonDeliveryForm.get('state');
  }
  get city() {
    return this.cashonDeliveryForm.get('city');
  }
  get pincode() {
    return this.cashonDeliveryForm.get('pincode');
  }

  onChange(val: any) {
    this.Cities = [];
    Cities.cities.filter(item => {
      if (item.stateId == val) {
        this.Cities.push(item);
      }
    })
  }


  storeCustoumerAddress(cashonDeliveryForm) {
    console.log(cashonDeliveryForm.value);
    this.obj.storeCustAddress(cashonDeliveryForm.value).subscribe((response) => {
      this.Response = response;
      console.log(this.Response);
    })
  }

}
