import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  private formData = {}
  constructor() { }



  // getter will return form data 
  // can get values of form any where in the by calling FormDataService  
  get formValues(){
    return this.formData;
  }

  //function will set forData on value change
  setFormValues(data: any){
    this.formData = data;
  }
    
}
