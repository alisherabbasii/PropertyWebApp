import {Component, Inject} from '@angular/core';
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private route: Router, public translate: TranslateService, @Inject(DOCUMENT) private document: Document) {
    // Register translation languages
    translate.addLangs(['en', 'ur']);
    // Set default language
    if(localStorage.getItem('languageCodeLandLogic')){
      if (localStorage.getItem('languageCodeLandLogic') === 'ur'){
        this.document.body.classList.toggle('direction-urdu');
        translate.setDefaultLang('ur');
        localStorage.setItem('languageCodeLandLogic', 'ur')
      }
    }
    else {
      localStorage.setItem('languageCodeLandLogic', 'en')
      translate.setDefaultLang('en');
    }
  }

  title = 'PropertyWeb';
}
