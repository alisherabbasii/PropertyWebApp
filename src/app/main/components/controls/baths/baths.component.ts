import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baths',
  templateUrl: './baths.component.html',
  styleUrls: ['./baths.component.css']
})
export class BathsComponent implements OnInit {

  items:any;

  
  constructor() { 
    this.items = [];
    for (let i = 0; i < 10000; i++) {
        this.items.push({label: 'Item ' + i, value: 'Item ' + i});
    }
  }

  ngOnInit(): void {
    $('.dropdown-menu.ddRange')
    .click(function(e) {
      e.stopPropagation();
    });



    
    
      this.setuinvestRangeDropDownListArea(
        $('.bedRange .min_value'),
        $('.bedRange .max_value'),
        $('.bedRange .freeformPrice .min_input'),
        $('.bedRange .freeformPrice .max_input'),
        $('.bedRange .btnClear'),
        $('.bedRange .dropdown-toggle'));

        
  }
  setuinvestRangeDropDownListArea(min_values, max_values, min_input, max_input, clearLink, dropDownControl) {
    min_values.click(function() {
      var minValue = $(this).attr('value');
      $(".min_value").css('background-color', 'white');
      $(".min_value").css('color', 'black');
      $(this).css('background-color', '#007bff');
      $(this).css('color', 'white');
      min_input.val(minValue);
      document.getElementById('selectedBeds').innerHTML = minValue;
  
     this.disableDropDownRangeOptionsArea(max_values, minValue);
  
      validateDropDownInputs();
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
