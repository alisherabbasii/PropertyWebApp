import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})
export class SearchDetailsComponent implements OnInit {

  constructor() { }
  name:any;
  email:any;
  phone:any;
  message:any;
  buyer:any;
  agent:any;
  other:any;
  checked:any;
  ngOnInit(): void {
  }

  printWindow(){
    window.print();
  }

}
