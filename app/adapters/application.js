import RESTAdapter from '@ember-data/adapter/rest';
import ENV from 'frontend/config/environment';

export default class ApplicationAdapter extends RESTAdapter {
  host = ENV.APP.apiHost;
  namespace = 'api';

  headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
}
