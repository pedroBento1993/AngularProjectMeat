import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { RadioOption } from './radio-option.model';
import {NG_VALUE_ACCESSOR,ControlValueAccessor} from '@angular/forms';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    useExisting:forwardRef(()=> RadioComponent),
    multi:true
  }],
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit,ControlValueAccessor {

  onChange: any; 

  @Input() options : RadioOption[]
  value : any

  constructor() { }

  ngOnInit() {
  }

  setValue(value:any){
    this.value = value
    this.onChange(this.value)
  }

  writeValue(obj: any): void {
    this.value = obj

  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
     
  }
  setDisabledState?(isDisabled: boolean): void {
     
  }

}
