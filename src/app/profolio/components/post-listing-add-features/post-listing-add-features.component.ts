import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-post-listing-add-features',
  templateUrl: './post-listing-add-features.component.html',
  styleUrls: ['./post-listing-add-features.component.scss']
})
export class PostListingAddFeaturesComponent implements OnInit {

  builtInYear: number;
  view: string;
  parkingSpace: string;
  isDoubleGlazedWindow: boolean = false;
  isCentralAirConditioning: boolean = false;
  isCentralHeating: boolean = false;
  flooring: any[] = [];
  selectedFlooring: any;
  electricityBackup: any[] = [];
  selectedElectricityBackup: any;
  isWasteDisposal: boolean = false;
  floors: string;
  otherMainFeatures: string;
  isFurnished: boolean = false;

  isBroadbandInternetAccess: boolean = false;
  isSatelliteOrCableTVReady: boolean = false;
  isIntercom: boolean = false;
  otherBusinessCommunicationFacilities: string;

  isLawnOrGarden: boolean = false;
  isSwimmingPool: boolean = false;
  isSauna: boolean = false;
  isJacuzzi: boolean = false;
  otherHealthcareRecreationFacilities: string;

  isMaintenanceStaff: boolean = false;
  isSecurityStaff: boolean = false;
  isFacilitiesForDisabled: boolean = false;
  otherFacilities: string;

  bedrooms: string;
  bathrooms: string;
  servantQuarters: string;
  isDrawingRoom: boolean = false;
  isDiningRoom: boolean = false;
  kitchens: string;
  isStudyRoom: boolean = false;
  isPrayerRoom: boolean = false;
  isPowderRoom: boolean = false;
  isGym: boolean = false;
  storeRooms: string;
  isSteamRoom: boolean = false;
  isLoungeOrSittingRoom: boolean = false;
  isLaundryRoom: boolean = false;
  otherRooms: string;

  isCommunityLawnOrGarden: boolean = false;
  isCommunitySwimmingPool: boolean = false;
  isCommunityGym: boolean = false;
  isFirstAidOrMedicalCentre: boolean = false;
  isDayCareCentre: boolean = false;
  isKidsPlayArea: boolean = false;
  isBarbequeArea: boolean = false;
  isMosque: boolean = false;
  isCommunityCentre: boolean = false;
  otherCommunityFacilities: string;

  nearbySchools: string;
  nearbyHospitals: string;
  nearbyShoppingMalls: string;
  nearbyRestaurants: string;
  distanceFromAirport: string;
  nearbyPublicTransportService: string;
  otherNearbyPlaces: string;

  constructor(private dialogRef: MatDialogRef<PostListingAddFeaturesComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
              private toastr: ToastrService, ) { }

  ngOnInit(): void {
  }


  onClose(event?): void {
    this.dialogRef.close(event);
  }

}
