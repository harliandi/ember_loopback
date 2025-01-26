import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TeamEditRoute extends Route {
  @service store;

  model() {
    const { team_id } = this.paramsFor('team');
    return this.store.findRecord('team', team_id);
  }
}
