import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-range',
  templateUrl: './price-range.component.html',
  styleUrls: ['./price-range.component.css']
})
export class PriceRangeComponent implements OnInit {

  toggle:Boolean= true;
  selectedButton:any='Buy';
  selectedSpan:any='Home';
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



  }



  // toggle:Boolean= true;
  constructor() {
  }
  changeBtn(val:any){
    
      this.selectedButton = val;
  

  }
  changeSpan(val:any){
    this.selectedSpan = val;
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

  $("#min_price").on('keyup',function(){
    debugger;
    var temp=(<HTMLInputElement>document.getElementById('min_price')).value
    document.getElementById('min_marla').innerHTML =temp;
  });

  $("#max_price").on('keyup',function(){
    debugger;
    var temp=(<HTMLInputElement>document.getElementById('max_price')).value
    document.getElementById('max_marla').innerHTML =temp;
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






 




}
