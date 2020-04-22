import { Component, OnInit, ElementRef, EventEmitter, Input, ContentChild, ViewChild, Output, ContentChildren, ViewChildren } from '@angular/core';
import { FormDataService } from '../services/form-data.service';

@Component({
  selector: 'my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  result = {}
  @ViewChild('contentWrapper') content: ElementRef;

  // @ViewChildren('contentWrapper') vc;

  @Output() change = new EventEmitter();

  constructor(
    private elt:ElementRef, 
    private formDataService: FormDataService) {
  }

  
  ngOnInit(): void {
  }

  

    ngAfterViewInit() {
      
      let result = {}
      let inputs = [];
      inputs = Array.prototype.concat.apply(inputs, this.content.nativeElement.getElementsByTagName("input"));
      inputs = Array.prototype.concat.apply(inputs, this.content.nativeElement.getElementsByTagName("select"));

      for (const item of inputs){
        if(item.name){
          result[item.name]= item.value;
        }
      }
      // console.log(result);
    }


    // function to get form values at any time 
    myFormValue(){

      let result = {}
      let inputs = [];
      inputs = Array.prototype.concat.apply(inputs, this.content.nativeElement.getElementsByTagName("input"));
      inputs = Array.prototype.concat.apply(inputs, this.content.nativeElement.getElementsByTagName("select"));

      console.log(inputs);
      for (const item of inputs){
        if(item.name){
          result[item.name]= item.value;
        }
      }

      return result;

    }

    // function to detect any input change in Angular 
    inputChanged(event){
      let data = this.myFormValue();

      // updating form data in FormDataServices 
      this.formDataService.setFormValues(data);
      // event to notify parent about value change 
      // console.log(data)
      this.change.emit(data);
    }
}
