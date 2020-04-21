import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contentForm';
  formData = {}
 
   // get form value through public service 


  //  form input values on change in any input value 
  formValue(value){
      console.log(value);
      this.formData = value;
  }


}
