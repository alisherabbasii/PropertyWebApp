import {environment} from '../../environments/environment';

export const APP_CONTEXT = 'api/';
export const BASE_FILE_PATH = `${environment.documentsUrl}`;
// Lets set our base url on basic of environment mentioned during ng-buid / ng serve command
export const SERVICING_URL = environment.servicingUrl;
export const LOGINSIGNUP_URL = environment.loginSignupUrl;
export const PROFLOIO_SERVICING_URL = environment.profolioServicingUrl;
export const API_SERVICING_URL = SERVICING_URL + APP_CONTEXT;
export const API_LOGINSIGNUP_URL = LOGINSIGNUP_URL + APP_CONTEXT;
export const API_PROFLIO_SERVICING_URL = PROFLOIO_SERVICING_URL + APP_CONTEXT;
export const BlOGS_URL = API_SERVICING_URL + 'Blog/';
export const POST_LISTING_URL = API_SERVICING_URL + 'Ad/';
export const SignUp_URL = API_LOGINSIGNUP_URL + 'customer/' + 'signup';
export const SignIn_URL = API_LOGINSIGNUP_URL + 'customer/' + 'login';
export const ForgotPassword_URL = API_LOGINSIGNUP_URL + 'customer/' + 'forgotpassword';
export const API_USERS_URL = API_LOGINSIGNUP_URL + 'customer';
export const EMAIL_BASKET = API_SERVICING_URL + 'Basket';
