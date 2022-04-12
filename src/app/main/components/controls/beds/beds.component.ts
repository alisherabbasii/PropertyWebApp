import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-beds',
  templateUrl: './beds.component.html',
  styleUrls: ['./beds.component.css']
})
export class BedsComponent implements OnInit {

  items: SelectItem[];

  item!: string;

  constructor() { 
    this.items = [];
    for (let i = 0; i < 10000; i++) {
        this.items.push({label: 'Item ' + i, value: 'Item ' + i});
    }

  }

  ngOnInit(): void {
  }

}
