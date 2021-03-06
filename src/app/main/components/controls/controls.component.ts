import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';
import { trigger, transition, style, animate, state } from '@angular/animations';
// import * as $ from 'jquery';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';
import { ThrowStmt } from '@angular/compiler';
interface City {
  name: string,
  code: string
}
declare var $: any;

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)',opacity:0.1 }),
        animate('500ms ease-in', style({transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        style({opacity:0.1 }),

        animate('400ms ease-in', style({visibility: 'hidden','z-index':'0',transform: 'translateY(-100%)' }))
      ])
    ])

  ]


})
export class ControlsComponent implements OnInit {

  toggle: Boolean = true;
  selectedButton: any = 'Buy';
  selectedSpan: any = 'Home';
  showBedDropDown:boolean=true;

  ngOnInit(): void {
    // localStorage.clear();
    this.clearControls();

    $('.dropdown-menu.ddRange')
      .click(function (e) {
        e.stopPropagation();
      });



    this.setuinvestRangeDropDownList(
      $('.investRange .min_val_marla'),
      $('.investRange .max_val_marla'),
      $('.investRange .freeformPrice .min_input'),
      $('.investRange .freeformPrice .max_input'),
      $('.investRange .btnClear'),
      $('.investRange .dropdown-toggle'));


    this.setuinvestRangeDropDownListArea(
      $('.marlaRange .min_value'),
      $('.marlaRange .max_value'),
      $('.marlaRange .freeformPrice .min_input'),
      $('.marlaRange .freeformPrice .max_input'),
      $('.marlaRange .btnClear'),
      $('.marlaRange .dropdown-toggle'));


  }


  cities: City[];

  selectedCity1!: City;

  selectedCity2!: City;

  selectedCity3!: string;

  selectedCountry!: City;

  groupedCities: SelectItemGroup[];
  selectedLocation!: City;
  selectedCity: City;
  IncommingSelectedCity: any
  IncommingSelectedLocation:any
  // toggle:Boolean= true;


  constructor(private router:Router,private srv:UtilsService) {

    this.srv.rentReplaySubject.subscribe(val => {
      this.selectedButton = val;
   });

    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];

    this.groupedCities = [
      {
        label: 'Germany', value: 'de',
        items: [
          { label: 'Berlin', value: 'Berlin' },
          { label: 'Frankfurt', value: 'Frankfurt' },
          { label: 'Hamburg', value: 'Hamburg' },
          { label: 'Munich', value: 'Munich' }
        ]
      },
      {
        label: 'USA', value: 'us',
        items: [
          { label: 'Chicago', value: 'Chicago' },
          { label: 'Los Angeles', value: 'Los Angeles' },
          { label: 'New York', value: 'New York' },
          { label: 'San Francisco', value: 'San Francisco' }
        ]
      },
      {
        label: 'Japan', value: 'jp',
        items: [
          { label: 'Kyoto', value: 'Kyoto' },
          { label: 'Osaka', value: 'Osaka' },
          { label: 'Tokyo', value: 'Tokyo' },
          { label: 'Yokohama', value: 'Yokohama' }
        ]
      }
    ];
  }
  changeBtn(val: any) {
    localStorage.setItem('AdAdTypeIds',val);
    this.selectedButton = val;


  }
  changeSpan(val: any) {
    this.selectedSpan = val;
  }

  show(value: any) {

    if (value == 'more') {
      this.toggle = true;
    } else {
      this.toggle = false;
    }
  }

  showHideDropDown(val:any){
   if(val=='Homes'){
    this.showBedDropDown = true;
   }
   else{
     this.showBedDropDown  = false;
   }
  }




  disableDropDownRangeOptions(max_values: any, minValue: any) {
    if (max_values) {
      max_values.each(function () {
        var maxValue = $(this).attr("value");

        if (parseInt(maxValue) < parseInt(minValue)) {
          $(this).addClass('disabled');
        } else {
          $(this).removeClass('disabled');
        }
      });
    }
  }

  setuinvestRangeDropDownList(min_val_marla, max_val_marla, min_input, max_input, clearLink, dropDownControl) {
    min_val_marla.click(function () {
      var temp = this;
      var minValue = $(this).attr('value');
      $(".min_val_marla").css('background-color', 'white');
      $(".min_val_marla").css('color', 'black');
      $(this).css('background-color', '#007bff');
      $(this).css('color', 'white');
      min_input.val(minValue);
      document.getElementById('price_range1').innerHTML = minValue;
      localStorage.setItem('priceRange',minValue);
      this.disableDropDownRangeOptions(max_val_marla, minValue);

      validateDropDownInputs();
    });

    max_val_marla.click(function () {
      var temp = this;
      var maxValue = $(this).attr('value');
      $(".max_val_marla").css('background-color', 'white');
      $(".max_val_marla").css('color', 'black');
      $(this).css('background-color', '#007bff');
      $(this).css('color', 'white');
      max_input.val(maxValue);
      document.getElementById('price_range2').innerHTML = maxValue;

      toggleDropDown();
    });

    clearLink.click(function () {
      min_input.val('');
      max_input.val('');

      this.disableDropDownRangeOptions(max_val_marla);

      validateDropDownInputs();
    });

    min_input.on('input',
      function () {
        var minValue = min_input.val();

        this.disableDropDownRangeOptions(max_val_marla, minValue);
        validateDropDownInputs();
      });

    max_input.on('input', validateDropDownInputs);

    max_input.blur('input',
      function () {
        toggleDropDown();
      });

    function validateDropDownInputs() {
      var minValue = parseInt(min_input.val());
      var maxValue = parseInt(max_input.val());

      if (maxValue > 0 && minValue > 0 && maxValue < minValue) {
        min_input.addClass('inputError');
        max_input.addClass('inputError');

        return false;
      } else {
        min_input.removeClass('inputError');
        max_input.removeClass('inputError');

        return true;
      }
    }




    function toggleDropDown() {
      if (validateDropDownInputs() &&
        parseInt(min_input.val()) > 0 &&
        parseInt(max_input.val()) > 0) {

        // auto close if two values are valid
        dropDownControl.dropdown('toggle');
      }
    }
  }

  setuinvestRangeDropDownListArea(min_values, max_values, min_input, max_input, clearLink, dropDownControl) {
    min_values.click(function () {
      var temp = this;
      var minValue = $(this).attr('value');
      $(".min_value").css('background-color', 'white');
      $(".min_value").css('color', 'black');
      $(this).css('background-color', '#007bff');
      $(this).css('color', 'white');

      min_input.val(minValue);
      document.getElementById('min_marla').innerHTML = minValue;


      this.disableDropDownRangeOptionsArea(max_values, minValue);

      validateDropDownInputs();
    });

    max_values.click(function () {
      var maxValue = $(this).attr('value');

      var temp = this;
      $(".max_value").css('background-color', 'white');
      $(".max_value").css('color', 'black');
      $(this).css('background-color', '#007bff');
      $(this).css('color', 'white');


      max_input.val(maxValue);
      document.getElementById('max_marla').innerHTML = maxValue;

      toggleDropDown();
    });

    clearLink.click(function () {
      min_input.val('');
      max_input.val('');

      this.disableDropDownRangeOptionsArea(max_values);

      validateDropDownInputs();
    });

    min_input.on('input',
      function () {
        var minValue = min_input.val();

        this.disableDropDownRangeOptionsArea(max_values, minValue);
        validateDropDownInputs();
      });

    max_input.on('input', validateDropDownInputs);

    max_input.blur('input',
      function () {
        toggleDropDown();
      });

    function validateDropDownInputs() {
      var minValue = parseInt(min_input.val());
      var maxValue = parseInt(max_input.val());

      if (maxValue > 0 && minValue > 0 && maxValue < minValue) {
        min_input.addClass('inputError');
        max_input.addClass('inputError');

        return false;
      } else {
        min_input.removeClass('inputError');
        max_input.removeClass('inputError');

        return true;
      }
    }

    function toggleDropDown() {
      if (validateDropDownInputs() &&
        parseInt(min_input.val()) > 0 &&
        parseInt(max_input.val()) > 0) {

        // auto close if two values are valid
        dropDownControl.dropdown('toggle');
      }
    }
  }

  disableDropDownRangeOptionsArea(max_values: any, minValue: any) {
    if (max_values) {
      max_values.each(function () {
        var maxValue = $(this).attr("value");

        if (parseInt(maxValue) < parseInt(minValue)) {
          $(this).addClass('disabled');
        } else {
          $(this).removeClass('disabled');
        }
      });
    }
  }

  GetCity(data) {
    this.IncommingSelectedCity = data;
    localStorage.setItem('cityId',data.CityId);
  }

  GetLocation(data) {
    this.IncommingSelectedLocation = data
  }

  find() {
    // debugger;
    // console.log(this.IncommingSelectedCity, this.selectedLocation)
    // this.service.FindByCityandLocation(this.IncommingSelectedCity, this.selectedLocation).subscribe((res) => {
    //   alert(res)
    // })
  }



  // setuinvestRangeDropDownList(
  //   $('.investRange .min_value'),
  //   $('.investRange .max_value'),
  //   $('.investRange .freeformPrice .min_input'),
  //   $('.investRange .freeformPrice .max_input'),
  //   $('.investRange .btnClear'),
  //   $('.investRange .dropdown-toggle'));



  clearControls(){
    localStorage.removeItem('propertyType');
    localStorage.removeItem('priceRangeMin');
    localStorage.removeItem('priceRangeMax');
    localStorage.removeItem('areaRangeMin');
    localStorage.removeItem('areaRangeMax');
    localStorage.removeItem('bedsRange');
  }

}
