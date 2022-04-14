import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-type',
  templateUrl: './property-type.component.html',
  styleUrls: ['./property-type.component.css']
})
export class PropertyTypeComponent implements OnInit {

  toggle:Boolean= true;
  selectedButton:any='Buy';
  selectedSpan:any='Home';
  ngOnInit(): void {
  }

  constructor() {
  }
  
  changeSpan(val:any){
    this.selectedSpan = val;
  }

}
