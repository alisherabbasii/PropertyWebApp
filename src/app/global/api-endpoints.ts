import {environment} from '../../environments/environment';

export const APP_CONTEXT = 'api/';
export const BASE_FILE_PATH = `${environment.documentsUrl}`;
// Lets set our base url on basic of environment mentioned during ng-buid / ng serve command
export const SERVICING_URL = environment.servicingUrl;
export const PROFLOIO_SERVICING_URL = environment.profolioServicingUrl;
export const API_SERVICING_URL = SERVICING_URL + APP_CONTEXT;
export const API_PROFLIO_SERVICING_URL = PROFLOIO_SERVICING_URL + APP_CONTEXT;
export const BlOGS_URL = API_SERVICING_URL + 'Blog/';
export const POST_LISTING_URL = API_SERVICING_URL + 'Ad/';
