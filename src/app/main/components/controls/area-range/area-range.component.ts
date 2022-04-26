import { Component, OnInit } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';
import { City } from 'src/app/models/City';

@Component({
  selector: 'app-area-range',
  templateUrl: './area-range.component.html',
  styleUrls: ['./area-range.component.css']
})
export class AreaRangeComponent implements OnInit {

  toggle: Boolean = true;
  selectedButton: any = 'Buy';
  selectedSpan: any = 'Home';
  showBedDropDown:boolean=true;
  ngOnInit(): void {

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
  constructor() {



  }
  changeBtn(val: any) {

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
      document.getElementById('min_marla').innerHTML = minValue;

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
      document.getElementById('max_marla').innerHTML = maxValue;
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




}





