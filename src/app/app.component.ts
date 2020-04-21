import { Component } from '@angular/core';
import { FormDataService } from './services/form-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contentForm';
  formData = {}
  constructor(private formDataService: FormDataService){}
 
   // get form value through public service 
  //  this.formData = this.formDataService.formValues;


  //  form input values on change in any input value 
  formValue(value){
      console.log(value);
      this.formData = value;
  }


}
