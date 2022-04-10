import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {SelectItem} from 'primeng/api';
import {SelectItemGroup} from 'primeng/api';
// import * as $ from 'jquery';
interface City {
    name: string,
    code: string
}
declare var $: any;

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  ngOnInit(): void {

    $('.dropdown-menu.ddRange')
    .click(function(e) {
      e.stopPropagation();
    });

  

this.setuinvestRangeDropDownList(
  $('.investRange .min_value'),
  $('.investRange .max_value'),
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

  countries: any[];

  groupedCities: SelectItemGroup[];

  items: SelectItem[];

  item!: string;

  toggle:Boolean= true;
  constructor() {
      this.items = [];
      for (let i = 0; i < 10000; i++) {
          this.items.push({label: 'Item ' + i, value: 'Item ' + i});
      }

      this.cities = [
          {name: 'New York', code: 'NY'},
          {name: 'Rome', code: 'RM'},
          {name: 'London', code: 'LDN'},
          {name: 'Istanbul', code: 'IST'},
          {name: 'Paris', code: 'PRS'}
      ];

      this.groupedCities = [
          {
              label: 'Germany', value: 'de', 
              items: [
                  {label: 'Berlin', value: 'Berlin'},
                  {label: 'Frankfurt', value: 'Frankfurt'},
                  {label: 'Hamburg', value: 'Hamburg'},
                  {label: 'Munich', value: 'Munich'}
              ]
          },
          {
              label: 'USA', value: 'us', 
              items: [
                  {label: 'Chicago', value: 'Chicago'},
                  {label: 'Los Angeles', value: 'Los Angeles'},
                  {label: 'New York', value: 'New York'},
                  {label: 'San Francisco', value: 'San Francisco'}
              ]
          },
          {
              label: 'Japan', value: 'jp', 
              items: [
                  {label: 'Kyoto', value: 'Kyoto'},
                  {label: 'Osaka', value: 'Osaka'},
                  {label: 'Tokyo', value: 'Tokyo'},
                  {label: 'Yokohama', value: 'Yokohama'}
              ]
          }
      ];

      this.countries = [
          {name: 'Australia', code: 'AU'},
          {name: 'Brazil', code: 'BR'},
          {name: 'China', code: 'CN'},
          {name: 'Egypt', code: 'EG'},
          {name: 'France', code: 'FR'},
          {name: 'Germany', code: 'DE'},
          {name: 'India', code: 'IN'},
          {name: 'Japan', code: 'JP'},
          {name: 'Spain', code: 'ES'},
          {name: 'United States', code: 'US'}
      ];
  }




  show(value: any) {
    debugger;
  if (value == 'more') {
    this.toggle = true;
  } else {
    this.toggle = false;
  }
}




 disableDropDownRangeOptions(max_values:any, minValue:any) {
  if (max_values) {
    max_values.each(function() {
      var maxValue = $(this).attr("value");

      if (parseInt(maxValue) < parseInt(minValue)) {
        $(this).addClass('disabled');
      } else {
        $(this).removeClass('disabled');
      }
    });
  }
}

 setuinvestRangeDropDownList(min_values, max_values, min_input, max_input, clearLink, dropDownControl) {
  min_values.click(function() {
    var minValue = $(this).attr('value');
    min_input.val(minValue);
    document.getElementById('price_range1').innerHTML = minValue;

   this.disableDropDownRangeOptions(max_values, minValue);

    validateDropDownInputs();
  });

  max_values.click(function() {
    var maxValue = $(this).attr('value');
    max_input.val(maxValue);
    document.getElementById('price_range2').innerHTML = maxValue;

    toggleDropDown();
  });

  clearLink.click(function() {
    min_input.val('');
    max_input.val('');

    this.disableDropDownRangeOptions(max_values);

    validateDropDownInputs();
  });

  min_input.on('input',
    function() {
      var minValue = min_input.val();

      this.disableDropDownRangeOptions(max_values, minValue);
      validateDropDownInputs();
    });

  max_input.on('input', validateDropDownInputs);

  max_input.blur('input',
    function() {
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
    min_values.click(function() {
      var minValue = $(this).attr('value');
      min_input.val(minValue);
      document.getElementById('min_marla').innerHTML = minValue;
  
     this.disableDropDownRangeOptionsArea(max_values, minValue);
  
      validateDropDownInputs();
    });
  
    max_values.click(function() {
      var maxValue = $(this).attr('value');
      max_input.val(maxValue);
      document.getElementById('max_marla').innerHTML = maxValue;
  
      toggleDropDown();
    });
  
    clearLink.click(function() {
      min_input.val('');
      max_input.val('');
  
      this.disableDropDownRangeOptionsArea(max_values);
  
      validateDropDownInputs();
    });
  
    min_input.on('input',
      function() {
        var minValue = min_input.val();
  
        this.disableDropDownRangeOptionsArea(max_values, minValue);
        validateDropDownInputs();
      });
  
    max_input.on('input', validateDropDownInputs);
  
    max_input.blur('input',
      function() {
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


  disableDropDownRangeOptionsArea(max_values:any, minValue:any) {
    if (max_values) {
      max_values.each(function() {
        var maxValue = $(this).attr("value");
  
        if (parseInt(maxValue) < parseInt(minValue)) {
          $(this).addClass('disabled');
        } else {
          $(this).removeClass('disabled');
        }
      });
    }
  }
// setuinvestRangeDropDownList(
//   $('.investRange .min_value'),
//   $('.investRange .max_value'),
//   $('.investRange .freeformPrice .min_input'),
//   $('.investRange .freeformPrice .max_input'),
//   $('.investRange .btnClear'),
//   $('.investRange .dropdown-toggle'));





}
