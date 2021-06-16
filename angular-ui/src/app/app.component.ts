import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http:HttpClient) {
  }

  title = 'angular-hello-world';

  onButtonClick(){
    console.log("Button Clicked");
    this.http.get("http://localhost:8081/vaccinationInfo/pincode/560076").subscribe(responseData=>{
      console.log(responseData);
    });


  }

}
