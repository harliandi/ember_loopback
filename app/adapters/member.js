import RESTAdapter from '@ember-data/adapter/rest';
import ENV from 'frontend/config/environment';

export default class MemberAdapter extends RESTAdapter {
  host = ENV.APP.apiHost;
  namespace = 'api';

  urlForQuery(query) {
    if (query.teamId) {
      const teamId = query.teamId;
      delete query.teamId;
      return `${this.host}/${this.namespace}/teams/${teamId}/members`;
    }
    return super.urlForQuery(...arguments);
  }

  urlForCreateRecord(modelName, { adapterOptions }) {
    const teamId = adapterOptions?.teamId;
    return `${this.host}/${this.namespace}/teams/${teamId}/members`;
  }
}
