import { Component, OnInit } from '@angular/core';
import { ExtendedSearchService } from '../../../services/ExtendedSearchService/extended-search-service';

@Component({
  selector: 'app-extended-serach',
  templateUrl: './extended-serach.component.html',
  styleUrls: ['./extended-serach.component.css']
})
export class ExtendedSerachComponent implements OnInit {

  constructor(private svc:ExtendedSearchService) { }
  result:any;
  ngOnInit(): void {
    debugger
    this.svc.getCustomers().subscribe(res=>{
      debugger;
        this.result=res
    })
  }
  find(){
    
  }
}
