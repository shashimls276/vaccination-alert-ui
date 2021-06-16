export class VaccineSlotsInfo{
  vaccinationCenter:String;
  ageLimit:String;
  availableFirstDoseVaccine:String;
  availableSecondDoseVaccine:String;
  availableCapacity:String;
  pincode:String;
  vaccineName:String;
  date:String;

  constructor(vaccinationCenter:String,ageLimit:String,availableFirstDoseVaccine:String,
              availableSecondDoseVaccine:String,availableCapacity:String,pincode:String,
              vaccineName:String,date:String) {
    this.vaccinationCenter = vaccinationCenter;
    this.ageLimit = ageLimit;
    this.availableFirstDoseVaccine = availableFirstDoseVaccine;
    this.availableSecondDoseVaccine = availableSecondDoseVaccine;
    this.availableCapacity = availableCapacity;
    this.pincode = pincode;
    this.vaccineName=vaccineName;
    this.date=date;
  }

}
