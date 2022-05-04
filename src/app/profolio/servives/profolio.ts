export interface ISavePostListing {
  AdAdClassId: number; // Category
  AdAdTypeId: number; // Sale, Rent, Project
  AdAdvanceRentAmount: number;
  AdAdvanceRentNoOfMonthsMonthlyRent: number;
  AdAreaId: number;
  AdAuthorityReference: string;
  AdAutoNo: number;
  AdCityId: number;
  AdClass: string;
  AdCode: number;
  AdCodeOld: number;
  AdComments: string;
  AdContactPersonEmail: string;
  AdContactPersonName: string;
  AdCountryId: number;
  AdCustomerId: number;
  AdDescription: string;
  AdEditBy: string;
  AdEditTime: Date;
  AdHotStatus: string;
  AdId: number;
  AdIsActive: boolean;
  AdIsExpired: boolean;
  AdIsInstallmentsAvailable: boolean;
  AdIsInstallmentsInitialPayment: number;
  AdIsPossessionAvailable: boolean;
  AdLocation: string;
  AdMapDescription: string;
  AdMinimumContractPeriod: number;
  AdMonthlyInstallment: number
  AdMonthlyRent: number
  AdName: string;
  AdNoOfBathrooms: number;
  AdNoOfBedrooms: number;
  AdNoOfDiningRooms: number;
  AdNoOfDrawingRooms: number;
  AdNoOfGyms: number;
  AdNoOfKitchens: number;
  AdNoOfLaundaryRooms: number;
  AdNoOfPowderRooms: number;
  AdNoOfPrayerRooms: number;
  AdNoOfRemainingInstallments: number
  AdNoOfServantQuarters: number;
  AdNoOfSittingRooms: number;
  AdNoOfStoreRooms: number;
  AdNoOfStudyRooms: number;
  AdOccupancyStatusId: number;
  AdPropertyArea: number;
  AdPropertyPrice: number;
  AdPurposeId: number;
  AdQuality: string;
  AdSecurityDepositAmount: number;
  AdSecurityDepositNoOfMonthsMonthlyRent: number;
  Area: number;
  AdPropertyUOMId: number;
  AdValidityPeriod: number;
  AdValidityPeriodUnit: number;
  Description: string;
  AdImages: any;
}

export interface ILanguageTranslate {
  text: string; // English Text
  urdu: string; // Urdu Text
}
