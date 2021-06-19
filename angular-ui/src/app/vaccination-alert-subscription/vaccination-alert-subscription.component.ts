import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {State} from "../model/State";
import {District} from "../model/District";
import {FormBuilder} from "@angular/forms";
import {StatusMessage} from "../model/StatusMessage";
import {AppSettings} from "../model/AppSettings";
import {ServiceDiscovery} from "../model/ServiceDiscovery";

@Component({
  selector: 'app-vaccination-alert-subscription',
  templateUrl: './vaccination-alert-subscription.component.html',
  styleUrls: ['./vaccination-alert-subscription.component.css']
})
export class VaccinationAlertSubscriptionComponent implements OnInit {
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
    this.loadStatesDetails();
  }
  onChange(formData:any) {

    let params ={
      "path":"vaccinationInfo/districts",
      "object":{
        "state_id":formData.state
      }
    };
    this.http.post("/responseList",params).subscribe(responseData=>{
      this.districtList=<District[]>responseData;
    });
  }

  onSubmit(formData:FormData) {
    let params ={
      "path":"vaccinationInfo/subscribe",
      "object":formData
    };
    this.http.post("/responseObject",params).subscribe(responseData=>{
      console.log(responseData);
      let statusMessage=<StatusMessage>responseData;
      this.subscribeMessage=statusMessage.statusMessage;
      this.formGroup.reset();
    });
  }

  loadServiceUrls(){
    console.log("In AppSettings");
    this.http.get("/service-instances/vaccination").subscribe(responseData=>{
      console.log(responseData);
      let serviceDiscovery=<ServiceDiscovery>responseData;
      AppSettings.VACCINATION_API_ENDPOINT=serviceDiscovery.url;
      console.log("In loadServiceUrls :: "+AppSettings.VACCINATION_API_ENDPOINT);
      this.loadStatesDetails();
    });
  }

  loadStatesDetails(){
    let params ={
      "path":"vaccinationInfo/states"
    };
    this.http.post("/responseList",params).subscribe(responseData=>{
      this.stateList=<State[]>responseData;
    });
  }


}
