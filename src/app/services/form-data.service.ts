import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  private formData = {}
  constructor() { }



  // getter will return form data 
  get formValues(){
    return this.formData;
  }

  //function will set forData on value change
  setFormValues(data: any){
    this.formData = data;
  }
    
}
