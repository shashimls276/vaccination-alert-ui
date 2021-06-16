import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {State} from "../model/State";
import {District} from "../model/District";
import {FormBuilder} from "@angular/forms";
import {StatusMessage} from "../model/StatusMessage";

@Component({
  selector: 'app-vaccination-alert-subscription',
  templateUrl: './vaccination-alert-subscription.component.html',
  styleUrls: ['./vaccination-alert-subscription.component.css']
})
export class VaccinationAlertSubscriptionComponent implements OnInit {
  hostName="http://localhost:8081";
  stateList: State[] =[];
  districtList: District []=[];
  stateId:String="";
  formGroup;
  subscribeMessage: String | undefined;
  constructor(private http:HttpClient,private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      email: '',
      district: '',
      state: '',
      under45:false,
      above45:false,
      dose1Subscription:false,
      dose2Subscription:false
    });
  }

  ngOnInit(): void {
    this.http.get(this.hostName+"/vaccinationInfo/states").subscribe(responseData=>{
        this.stateList=<State[]>responseData;
    });
  }
  onChange(formData:any) {
    this.stateId = formData.state;
    this.http.get(this.hostName+`/vaccinationInfo/districts/${this.stateId}`).subscribe(responseData=>{
      this.districtList=<District[]>responseData;
    });
  }

  onSubmit(formData:FormData) {
    console.log(formData);
    this.http.post(this.hostName+"/vaccinationInfo/subscribe",formData).subscribe(responseData=>{
      console.log(responseData);
      let statusMessage=<StatusMessage>responseData;
      this.subscribeMessage=statusMessage.statusMessage;
      this.formGroup.reset();
    });
  }


}
