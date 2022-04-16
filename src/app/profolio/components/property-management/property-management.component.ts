import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-management',
  templateUrl: './property-management.component.html',
  styleUrls: ['./property-management.component.css']
})
export class PropertyManagementComponent implements OnInit {

  activeLists: any;
  commonLists: any;
  rejectedImsgesLists: any;
  rejectedVideosLists: any;
  allListingShow: boolean = false;
  activeListingShow: boolean = false;
  editedListingShow: boolean = false;
  pendingListingShow: boolean = false;
  expiredListingShow: boolean = false;
  uploadedListingShow: boolean = false;
  hiddenListingShow: boolean = false;
  deletedListingShow: boolean = false;
  rejectedListingShow: boolean = false;
  downgradedListingShow: boolean = false;
  imagesListingShow: boolean = false;
  videosListingShow: boolean = false;

  selectedListingMenu = 'Active';
  selectedListingSubMenu = "All Listings";
  constructor() {
    this.activeListingShow = true;
  }

  ngOnInit(): void {
    this.activeLists = [
      {
        id: 1,
        name: 'All Listings'
      }, {
        id: 1,
        name: 'For Sale',
        count: '1'
      }, {
        id: 1,
        name: 'For Rent',
        count: ''
      }, {
        id: 1,
        name: 'Super Hot Listings',
        count: ''
      }, {
        id: 1,
        name: 'Hot Listings',
        count: ''
      }
    ]

    this.commonLists = [
      {
        id: 1,
        name: 'All Listings'
      }, {
        id: 1,
        name: 'For Sale',
        count: ''
      }, {
        id: 1,
        name: 'For Rent',
        count: ''
      } ]
    this.rejectedImsgesLists = [
      {
        id: 1,
        name: 'All Images'
      }, {
        id: 1,
        name: 'Sales',
        count: ''
      }, {
        id: 1,
        name: 'For Rent',
        count: ''
      } ]
    this.rejectedVideosLists = [
      {
        id: 1,
        name: 'All Videos'
      }, {
        id: 1,
        name: 'Sales',
        count: ''
      }, {
        id: 1,
        name: 'For Rent',
        count: ''
      }]
  }

  openListing(val: any, status: boolean){
    if(val === 'Videos'){
      this.videosListingShow = status
    }
    else if(val === 'Images'){
      this.imagesListingShow = status
    }
    else if(val === 'Downgraded'){
      this.downgradedListingShow = status
    }
    else if(val === 'Rejected'){
      this.rejectedListingShow = status
    }
    else if(val === 'Deleted'){
      this.deletedListingShow = status
    }
    else if(val === 'Hidden'){
      this.hiddenListingShow = status
    }
    else if(val === 'Uploaded'){
      this.uploadedListingShow = status
    }
    else if(val === 'Expired'){
      this.expiredListingShow = status
    }
    else if(val === 'Pending'){
      this.pendingListingShow = status
    }
    else if(val === 'Edited'){
      this.editedListingShow = status
    }
    else if(val === 'Active'){
      this.activeListingShow = status
    }
    else {
      this.allListingShow = status;
      this.videosListingShow = status;
      this.imagesListingShow = status;
      this.downgradedListingShow = status;
      this.rejectedListingShow = status;
      this.deletedListingShow = status;
      this.hiddenListingShow = status;
      this.uploadedListingShow = status
      this.expiredListingShow = status;
      this.pendingListingShow = status;
      this.editedListingShow = status;
      this.activeListingShow = status;
    }

}

  onClickListingMenu(menu: string, submenu: any){
    this.selectedListingMenu = menu;
    this.selectedListingSubMenu = submenu.name;
}

}
