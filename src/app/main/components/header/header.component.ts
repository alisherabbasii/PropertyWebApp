import {AfterViewInit, Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {DOCUMENT} from "@angular/common";
import {SendlangstatusService} from "../../../profolio/servives/sendlangstatus.service";
import {LoginComponent} from "../login/login.component";
import {MatDialog} from "@angular/material/dialog";
import {Subscription} from "rxjs";
import {LogedinPopupComponent} from "../logedin-popup/logedin-popup.component";
import {MainService} from "../../services/main.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('headerElement') headerElement: ElementRef;
  subscription: Subscription;
  switchLang = false;

  constructor(private route: Router, public translate: TranslateService,
              @Inject(DOCUMENT) private document: Document,
              private sendlangstatusService: SendlangstatusService,
              public dialog: MatDialog, private router: Router, private mainService: MainService) {
    if (localStorage.getItem('languageCodeLandLogic') === 'ur'){
      this.switchLang = true;
    }
    else {
      this.switchLang = false;
    }

  }

  ngOnInit(): void {
    if (localStorage.getItem('landlogic-login-response') && localStorage.getItem('landlogic-login-response-token') && !localStorage.getItem('landlogic-login-response-userprofile')) {
      let req = {
        token: localStorage.getItem('landlogic-login-response-token')
      }
      this.mainService.getUserProfile(req).subscribe(res => {
        if (res.status.code === 0) {
          console.log(res.result)
          localStorage.setItem('landlogic-login-response-userprofile', JSON.stringify(res.result));
        }
      });
    }
  }

  ngAfterViewInit(): void{
    this.subscription = this.sendlangstatusService.onMessageLoginPgeStatus().subscribe(message => {
      this.headerElement.nativeElement.scrollIntoView();
      this.login()
    });
  }

  clickAddProperty(){
    if(localStorage.getItem('landlogic-login-response') && localStorage.getItem('landlogic-login-response-token')) {
      this.route.navigateByUrl('profolio');
    }
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
    else {
      this.sendlangstatusService.sendLangStatus(false);
    }
  }

  login(){
    if(localStorage.getItem('landlogic-login-response') && localStorage.getItem('landlogic-login-response-token')){
      const dialog = this.dialog.open(LogedinPopupComponent, {
        panelClass: 'tt-dialog-loged-user',
        width: '200px',
        // height: '500px',
        maxWidth: '200px',
        maxHeight: '400px',
        // data: rowData,
        // autoFocus: false
      });
      dialog.afterClosed().subscribe(result => {
        if (result) {
          this.router.navigateByUrl('home');
        }
      });
    }
    else{
      const dialog = this.dialog.open(LoginComponent, {
        panelClass: 'tt-dialog',
        width: '350px',
        // height: '500px',
        maxWidth: '350px',
        maxHeight: '520px',
        hasBackdrop: true,
        disableClose: true
        // data: rowData,
        // autoFocus: false
      });
      dialog.afterClosed().subscribe(result => {
        if (result) {
          this.router.navigateByUrl('home');
        }
      });
    }

  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
