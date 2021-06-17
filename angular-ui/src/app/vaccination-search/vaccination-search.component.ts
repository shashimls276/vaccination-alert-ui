import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {VaccineSlotsInfo} from "../model/VaccineSlotsInfo";
import {AppSettings} from "../model/AppSettings";

@Component({
  selector: 'app-vaccination-search',
  templateUrl: './vaccination-search.component.html',
  styleUrls: ['./vaccination-search.component.css']
})
export class VaccinationSearchComponent implements OnInit {
  // @ts-ignore
  @ViewChild('f', {static: false})searchForm: NgForm;

  vaccineSlotsInfo:VaccineSlotsInfo[]=[];
  page=1;
  collectionSize=0;
  pageSize=5;
  showSearchMessage="";

  ngOnInit(): void {
  }
  constructor(private http:HttpClient) {
  }


  onSearch(){
    console.log(this.searchForm.form.value);
    this.http.post(AppSettings.VACCINATION_API_ENDPOINT+"/vaccinationInfo/search",this.searchForm.form.value).subscribe(responseData=>{
      console.log(responseData);
      this.vaccineSlotsInfo=<VaccineSlotsInfo[]> responseData;
      console.log(this.vaccineSlotsInfo);
      this.collectionSize=this.vaccineSlotsInfo.length;
      if(this.collectionSize > 0)
        this.showSearchMessage="";
      else
        this.showSearchMessage="No Data Found";
      this.searchForm.resetForm();
    });

  }

}
