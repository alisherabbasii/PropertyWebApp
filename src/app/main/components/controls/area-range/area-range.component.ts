import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-range',
  templateUrl: './area-range.component.html',
  styleUrls: ['./area-range.component.css']
})
export class AreaRangeComponent implements OnInit {

  toggle:Boolean= true;
  selectedButton:any='Buy';
  selectedSpan:any='Home';
  ngOnInit(): void {

    $('.dropdown-menu.ddRange')
    .click(function(e) {
      e.stopPropagation();
    });


  this.setuinvestRangeDropDownListArea(
    $('.marlaRange .min_value'),
    $('.marlaRange .max_value'),
    $('.marlaRange .freeformPrice .min_input'),
    $('.marlaRange .freeformPrice .max_input'),
    $('.marlaRange .btnClear'),
    $('.marlaRange .dropdown-toggle'));


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




}
