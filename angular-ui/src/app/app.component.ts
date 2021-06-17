import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StatusMessage} from "./model/StatusMessage";
import {ServiceDiscovery} from "./model/ServiceDiscovery";
import {AppSettings} from "./model/AppSettings";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private http:HttpClient) {
  }

  ngOnInit() :void{

  }

  title = 'Vaccination Slot Alert';

}
