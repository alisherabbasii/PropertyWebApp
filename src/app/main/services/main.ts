export interface ISignUp {
  Email: string,
  Password: string,
  RePassword: string,
  CustomerPhone1: string,
  CustomerFirstName : string,
  CustomerLastName : string,
  CustomerIsAgent : number,
  CustomerCompanyName : string,
  CustomerCompanyContactNos : string,
  CustomerCompanyMobileNos : string,
  CustomerCompanyFaxNos : string,
  CustomerCompanyEmail1 : string
}

export interface ISignIn {
  Email: string,
  Password: string,
}

export interface IEmailBucketSend {
  name: string,
  email: string,
  phone: string,
  message: string,
}


export interface IUserProfile {
  CustomerId: number;
  CustomerBusinessEntityId?: any;
  CustomerCode?: any;
  CustomerMapCode?: any;
  CustomerCustomerTypeId?: any;
  CustomerPrefix?: any;
  CustomerName?: any;
  CustomerMapName?: any;
  CustomerFirstName: string;
  CustomerMiddleName?: any;
  CustomerLastName: string;
  CustomerGender?: any;
  CustomerLeadSourceId?: any;
  CustomerLeadSourceDate?: any;
  CustomerVendorLeadActivityId?: any;
  CustomerRegistrationDate?: any;
  CustomerPhoneTypeId1?: any;
  CustomerPhone1: string;
  CustomerPhoneTypeId2?: any;
  CustomerPhone2?: any;
  CustomerPhoneTypeId3?: any;
  CustomerPhone3?: any;
  CustomerEmail1: string;
  CustomerEmail2?: any;
  CustomerSalesPersonId?: any;
  CustomerNationalityId?: any;
  CustomerIdTypeId?: any;
  CustomerIdNumber?: any;
  CustomerDesignationId?: any;
  CustomerEducationId?: any;
  CustomerExperienceYears?: any;
  CustomerDOB?: any;
  CustomerAddress1?: any;
  CustomerAddress2?: any;
  CustomerCityId?: any;
  CustomerComments?: any;
  CustomerContactPerson?: any;
  CustomerCustomerCompanyId?: any;
  CustomerCompanyName?: any;
  CustomerDesignation?: any;
  CustomerPostalAddressId?: any;
  CustomerTaxNo?: any;
  CustomerGSTNo?: any;
  CustomerOpeningBalance?: any;
  CustomerLocationId?: any;
  CustomerAddBy?: any;
  CustomerAddTime: Date;
  CustomerEditBy?: any;
  CustomerEditTime?: any;
  CustomerLoginName: string;
  CustomerCityName?: any;
  CustomerCountryName?: any;
  CustomerCountryCode?: any;
  CustomerPicturePath?: any;
  CustomerSignatureImage?: any;
  CustomerSignatureImageName?: any;
  CustomerSignatureImageType?: any;
  CustomerSignatureImageAddBy?: any;
  CustomerSignatureImageAddTime?: any;
  CustomerLastLoginTime?: any;
  CustomerIsActive: number;
  CustomerActiveTime?: any;
  CustomerFullNameMap?: any;
  CustomerIsBlocked: number;
  CustomerDeviceId?: any;
  CustomerDeviceType: string;
  CustomerOSType: string;
  CustomerDPI?: any;
  CustomerOSVersion: string;
  CustomerAPPVersion?: any;
  CustomerRemoteAddress?: any;
  CustomerXForwardedFor?: any;
  CustomerProvider?: any;
  CustomerToken?: any;
  CustomerIdProvider?: any;
  CustomerRewardBalance?: any;
  CustomerCreditLimit?: any;
  CustomerIsAgent?: any;
  Location?: any;
}

export interface IAdDetails {
  AdId: number;
  AdName: string;
  AdCustomerId?: any;
  AdPurposeId?: any;
  AdOccupancyStatusId: number;
  AdIsExpired?: any;
  AdValidityPeriod?: any;
  AdValidityPeriodUnit: string;
  AdPropertyPrice: number;
  AdIsPossessionAvailable: number;
  AdIsInstallmentsAvailable: number;
  AdIsInstallmentsInitialPayment?: any;
  AdNoOfRemainingInstallments?: any;
  AdMonthlyInstallment?: any;
  AdMinimumContractPeriod?: any;
  AdMonthlyRent?: any;
  AdSecurityDepositAmount?: any;
  AdSecurityDepositNoOfMonthsMonthlyRent?: any;
  AdAdvanceRentAmount?: any;
  AdAdvanceRentNoOfMonthsMonthlyRent?: any;
  AdContactPersonName: string;
  AdContactPersonEmail: string;
  AdAdClassId?: any;
  AdQuality?: any;
  AdLocation?: any;
  AdDescription: string;
  AdMapDescription?: any;
  AdAdTypeId: number;
  AdAdTypeName?: any;
  AdSize?: any;
  AdCityId: number;
  AdAreaId: number;
  AdCountryId?: any;
  AdUOMGroupId?: any;
  AdPropertyBaseUOMId?: any;
  AdPropertyBaseArea?: any;
  AdPropertyUOMId: number;
  AdPropertyArea?: any;
  AdNoOfBedrooms?: any;
  AdNoOfBathrooms?: any;
  AdNoOfServantQuarters?: any;
  AdNoOfKitchens?: any;
  AdNoOfStoreRooms?: any;
  AdNoOfDrawingRooms?: any;
  AdNoOfDiningRooms?: any;
  AdNoOfStudyRooms?: any;
  AdNoOfPrayerRooms?: any;
  AdNoOfPowderRooms?: any;
  AdNoOfGyms?: any;
  AdNoOfSittingRooms?: any;
  AdNoOfLaundaryRooms?: any;
  AdHotStatus?: any;
  AdTags?: any;
  AdComments?: any;
  AdImages: any[];
  isInBasket: boolean;
}
