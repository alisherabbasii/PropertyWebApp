import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-header-with-logo',
  templateUrl: './header-with-logo.component.html',
  styleUrls: ['./header-with-logo.component.css'],
  animations: [
    trigger('widthGrow', [
        state('closed', style({
            width: 0,
        })),
        state('open', style({
            width: 300
        })),
        transition('* => *', animate(350))
    ]),
]
})
export class HeaderWithLogoComponent implements OnInit {

  state= 'closed';
  constructor() { }

  ngOnInit(): void {
  }

  expandHome(): void {
    (this.state == "closed") ? this.state = "open" : this.state = "closed";
  }
  // expandHome(){
  //  this.showBuyOptions = !this.showBuyOptions;
  // }
}
