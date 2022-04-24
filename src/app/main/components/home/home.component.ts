import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private srv:UtilsService) { }

  ngOnInit(): void {
    if(this.router.url=='/Rent'){
        this.srv.setRentActive('Rent');
    }
    if(this.router.url=='/Commercial'){
      this.srv.setPropertyActive('Commercial');
  }
  if(this.router.url=='/Plots'){
    this.srv.setPropertyActive('Plots');
}
if(this.router.url=='/Homes'){
  this.srv.setPropertyActive('Homes');
}
  }

}
