import {Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {DOCUMENT} from "@angular/common";
import {SendlangstatusService} from "../../../profolio/servives/sendlangstatus.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  switchLang = false;
  constructor(private route: Router, public translate: TranslateService,
              @Inject(DOCUMENT) private document: Document,  private sendlangstatusService: SendlangstatusService) {
    if (localStorage.getItem('languageCodeLandLogic') === 'ur'){
      this.switchLang = true;
    }
    else {
      this.switchLang = false;
    }
  }

  ngOnInit(): void {
  }

  clickAddProperty(){
    this.route.navigateByUrl('profolio');
  }

  translateLanguageTo(lang: string) {
    // if(localStorage.getItem('languageCodeLandLogic')){
    //   if (localStorage.getItem('languageCodeLandLogic') === 'ur'){
    //     this.switchLang = true;
    //   }
    //   else {
    //     this.switchLang = false;
    //   }
    // }
    localStorage.setItem('languageCodeLandLogic', lang)
    this.document.body.classList.toggle('direction-urdu');
    this.switchLang = !this.switchLang;
    this.translate.use(lang);
    if (lang === 'ur'){
      this.sendlangstatusService.sendLangStatus(true);
    }
    else{
      this.sendlangstatusService.sendLangStatus(false);
    }
  }
}
