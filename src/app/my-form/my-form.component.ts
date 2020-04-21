import { Component, OnInit, ElementRef, EventEmitter, Input, ContentChild, ViewChild, Output } from '@angular/core';
import { FormDataService } from '../services/form-data.service';

@Component({
  selector: 'my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  result = {}
  @ViewChild('contentWrapper') content: ElementRef;
  @Output() change = new EventEmitter();

  constructor(
    private elt:ElementRef, 
    private formDataService: FormDataService) {
  }

  
  ngOnInit(): void {
  }

  

    ngAfterViewInit() {

      let result = {}
      // native element access 
      var element = this.content.nativeElement;
      // selection of child element
      var children = element.childNodes;
      // loop the child node of ng-content 
      children.forEach(function(item){
        if(item.type == "text" && item.name !=="")
          // extracting values 
         result[item.name]= item.value;
      });
      // console.log(result)

    }


    // function to get form values at any time 
    myFormValue(){
      var result = {}
       // native element access 
       var element = this.content.nativeElement;
       // selection of child element
       var children = element.childNodes;
       // loop the child node of ng-content 
       children.forEach(function(item){
         if(item.type == "text" && item.name !=="")
           // extracting values 
           result[item.name]= item.value;
       });
       return result;

    }

    // function to detect any input change in Angular 
    inputChanged(event){
      let data = this.myFormValue();

      // updating form data in FormDataServices 
      this.formDataService.setFormValues(data);
      // event to notify parent about value change 
      this.change.emit(data)
    }
}
